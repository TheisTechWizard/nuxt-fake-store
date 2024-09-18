<template>
    <div>
        <img :src="product.image" alt="">
        <p>{{ product.title }}</p>
        <p>Price: {{ product.price }}$</p>
        <p>{{ product.description }}</p>
        <p>{{ product.category }}</p>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped></style>