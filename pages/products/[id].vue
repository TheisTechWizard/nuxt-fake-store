<template>

    <Head>
        <Title> {{ product.title }} </Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id


const { data: product } = await useFetch(uri)

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'product not found', fatal: true })
}
</script>

<style lang="scss"></style>