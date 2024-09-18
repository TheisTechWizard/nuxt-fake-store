<template>
    <div class="products-wrapper">
        <!-- For potential filter system -->
        <!-- <div class="filter-wrapper"></div> -->
        <div class="products-grid">
            <ProductCard v-for="item in products" :product="item" />
        </div>
    </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss"></style>