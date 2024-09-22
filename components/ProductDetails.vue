<template>
    <div class="product-details-wrapper">
        <div class="product-details-card">
            <div class="image-content">
                <img :src="product.image" alt="">
            </div>
            <div class="product-info">
                <h2>{{ product.title }}</h2>
                <h3>USD {{ product.price }}$</h3>
                <p>Category: {{ product.category }}</p>

                <div class="quantity-wrapper">
                    <label for="quantity">Quantity:</label>
                    <div class="quantity-selector">
                        <button @click="decreaseQuantity">-</button>
                        <input v-model="quantity" min="1" />
                        <button @click="quantity++">+</button>
                    </div>
                </div>

                <button @click="addProductToCart(product)">Add to cart</button>

                <div class="description-accordion">
                    <span @click="toggleAccordion" class="accordion-header">
                        DESCRIPTION
                        <span>^</span>
                    </span>
                    <transition name="accordion">
                        <p v-if="isAccordionOpen">{{ product.description }}</p>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
import { useCart } from '@/composables/useCart';

const { addToCart } = useCart();
const quantity = ref(1); // Default quantity 1
const isAccordionOpen = ref(false);

function addProductToCart(product) {
    for (let i = 0; i < quantity.value; i++) {
        addToCart(product);
    }
}

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value -= 1;
    }
};

const toggleAccordion = () => {
    isAccordionOpen.value = !isAccordionOpen.value;
};
</script>

<style lang="scss"></style>