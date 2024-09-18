<template>
    <div class="product-card">
        <img :src="product.image" alt="product thumb">
        <p>{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`">View Details</nuxt-link>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style lang="scss"></style>