<template>
    <div class="product-card">
        <div class="image-wrapper">

        </div>
        <img :src="product.image" alt="product thumb">
        <p>{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`">View Details</nuxt-link>
        <!-- TODO add quick buy button -->
        <transition name="quick-buy">
            <button @click="addToCart(product)" class="quick-buy-btn">
                Add product
            </button>
        </transition>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
import { useCart } from '@/composables/useCart';

const { addToCart } = useCart();

</script>

<style lang="scss"></style>