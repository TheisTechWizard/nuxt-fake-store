<template>
    <div class="product-details">
        <div class="image-content">
            <img :src="product.image" alt="">
        </div>
        <div class="product-info">
            <h3>{{ product.title }}</h3>
            <p>Price: {{ product.price }}$</p>
            <p>{{ product.description }}</p>
            <p>{{ product.category }}</p>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style lang="scss"></style>