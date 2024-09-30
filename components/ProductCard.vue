<template>
    <div class="product-card">
        <div class="image-wrapper">
            <nuxt-link :to="`/products/${product.id}`">
                <img class="product-thumb" :src="product.image" alt="product thumb">
            </nuxt-link>
            <button @click="addToCart(product)" class="quick-buy-btn">
                <img src="/assets/icons/shopping-bag.png" alt="">
            </button>
        </div>
        <div class="info-wrapper">
            <nuxt-link :to="`/products/${product.id}`">
                <h4>{{ product.title }}</h4>
            </nuxt-link>
            <p>${{ product.price }}</p>
        </div>
        <!-- TODO add quick buy button -->
        <!-- <transition name="quick-buy">
            <button @click="addToCart(product)" class="quick-buy-btn">
                Add product
            </button>
        </transition> -->
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
import { useCart } from '@/composables/useCart';

const { addToCart } = useCart();

</script>

<style lang="scss"></style>