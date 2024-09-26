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
                <button class="shopping-cart" @click="toggleSideBar">
                    <img src="/assets/icons/shopping-bag.png" alt="">
                    <div class="cart-count" v-if="cart.length > 0">
                        <p>{{ totalCartItems }}</p>
                    </div>
                </button>
            </div>
        </nav>
    </header>

    <ShoppingCartSideBar :visible="isSidebarVisible" @close="closeSidebar" />
    <div v-if="isSidebarVisible" class="overlay"></div>

    <div>
        <slot />
    </div>

    <!-- <footer class="footer-wrapper">
        footer TODO
    </footer> -->
</template>

<script setup>
import { useCart } from '@/composables/useCart';

const { cart, totalCartItems } = useCart();

const isSidebarVisible = ref(false);

const toggleSideBar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
    toggleBodyScroll(isSidebarVisible.value);
}

const closeSidebar = () => {
    isSidebarVisible.value = false;
    toggleBodyScroll(false);
}

const toggleBodyScroll = (disableScroll) => {
    const body = document.body;
    if (disableScroll) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove('no-scroll');
    }
}
</script>

<style lang="scss"></style>