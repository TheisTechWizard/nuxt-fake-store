<template>
    <transition name="burger-menu-slide">
        <div class="burger-menu-container" v-if="visible">
            <div class="close-icon-wrapper">
                <button class="close-icon" @click="$emit('close')">X</button>
            </div>
            <ul class="menu" @click="$emit('close')">
                <nuxt-link to="/products">Products</nuxt-link>
                <nuxt-link v-for="category in uniqueCategories" :key="category"
                    :to="{ path: '/products', query: { category } }">
                    {{ category }}
                </nuxt-link>
            </ul>
        </div>
    </transition>
</template>

<script setup>
import { useProducts } from '@/composables/useProducts';
const { uniqueCategories } = useProducts();

const { visible } = defineProps(['visible'])

</script>

<style lang="scss" scoped></style>