<template>
    <div class="product-details-wrapper">
        <div class="product-details-card">
            <div class="image-content">
                <img :src="product.image" alt="">
            </div>
            <div class="product-info">
                <h3>{{ product.title }}</h3>
                <h4>USD {{ product.price }}$</h4>
                <p>{{ product.description }}</p>
                <p>Category: {{ product.category }}</p>
                <button @click="addProductToCart(product)">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
import { useCart } from '@/composables/useCart';

const { addToCart } = useCart();

function addProductToCart(product) {
    addToCart(product)
    alert(`${product.title} added to cart!`);
}
</script>

<style lang="scss"></style>