<template>
    <header class="header-wrapper">
        <nav class="navigation-bar">
            <div class="nav-left-side">
                <h2>Fake store!</h2>
            </div>
            <div class="nav-right-side">
                <ul>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                </ul>
                <button class="shopping-cart" @click="isSidebarVisible = !isSidebarVisible">
                    <img src="/assets/icons/shopping-bag.png" alt="">
                    <div class="cart-count" v-if="cart.length > 0">
                        <p>{{ cart.length }}</p>
                    </div>
                </button>
            </div>
        </nav>
    </header>

    <ShoppingCartSideBar :visible="isSidebarVisible" @close="isSidebarVisible = false" />

    <div>
        <slot />
    </div>
</template>

<script setup>
import { useCart } from '@/composables/useCart';

const { cart } = useCart();

const isSidebarVisible = ref(false);
</script>

<style lang="scss"></style>