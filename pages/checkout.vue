<template>
    <div class="checkout-container">
        <h1>Checkout</h1>
        <form class="checkout-form" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="name" type="text" id="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input v-model="address" type="text" id="address" required />
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input v-model="city" type="text" id="city" required />
            </div>
            <div class="form-group">
                <label for="zip">Zip Code</label>
                <input v-model="zip" type="text" id="zip" required />
            </div>

            <div id="payment-element" class="payment-element"></div>

            <button type="submit">Pay {{ totalPrice }}</button>
        </form>

        <div v-if="processing">Processing payment...</div>
        <div v-if="paymentSuccess">Payment successful!</div>
    </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/composables/useCart';
const config = useRuntimeConfig();


const stripe = ref(null);
const elements = ref(null);
const loading = ref(true);

const processing = ref(false);
const paymentSuccess = ref(false);
const { cart, totalPrice } = useCart();

// User information fields
const name = ref('');
const email = ref('');
const address = ref('');
const city = ref('');
const zip = ref('');
//


onMounted(async () => {
    stripe.value = await loadStripe(config.public.stripePublishableKey);
    elements.value = stripe.value.elements({
        mode: 'payment',
        amount: 1999,
        currency: 'dkk'
    });

    const paymentElement = elements.value.create("payment")
    paymentElement.mount("#payment-element")

    loading.value = false;
});

const handleSubmit = async () => {
    if (loading.value) return;
    if (!stripe || !elements) return;

    loading.value = true;

    try {
        const response = await useFetch("StripeAPI", "/stripePurchase", {
            body: { productID: "prod_R2Xs5KjAHD2QTt" }
        });
        console.log("RESPONSE", response);

        const { clientSecret } = response;

        const { submitError } = await elements.value.submit();
        if (submitError) {
            console.log("error submit")
            loading.value = false;
            return;
        }

        const { error } = await stripe.value.confirmPayment({
            elements: elements.value,
            clientSecret,
            confirmParams: {
                receipt_email: email.value,
                shipping: {
                    address: {
                        city: city.value,
                        line1: address.value,
                        postal_code: zip.value,
                        country: "US",
                    },
                    name: name.value,
                },
                return_url: "http://localhost:3000/success"
            }
        });

        loading.value = false;
        if (error.type === "card_error" || error.type === "validation_error") {
            console.log("OOOHHH NOOOO!")
        } else {
            console.log("Nah we good")
        }
    } catch (error) {
        console.log("We have encountered an error", error);
        loading.value = false;
    }
}
</script>

<style lang="scss">
.checkout-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .checkout-form {
        border: solid 1px gray;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 10px;

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 5px
        }
    }
}
</style>