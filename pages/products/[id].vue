<template>
    <ProductDetails @productToShoppingCart="addToCart" :product="product" />
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id


const { data: product } = await useFetch(uri)

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'product not found', fatal: true })
}

function addToCart() {
    console.log(product)
}
</script>

<style lang="scss"></style>