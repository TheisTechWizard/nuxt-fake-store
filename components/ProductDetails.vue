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

                <label for="quantity">Quantity:</label>
                <input v-model="quantity" type="number" min="1" />

                <button @click="addProductToCart(product)">Add to cart</button>

                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
import { useCart } from '@/composables/useCart';

const { addToCart } = useCart();
const quantity = ref(1); // Default quantity 1

function addProductToCart(product) {
    for (let i = 0; i < quantity.value; i++) {
        addToCart(product);
    }
    //alert(`${quantity.value} x ${product.title} added to cart!`);
}
</script>

<style lang="scss"></style>