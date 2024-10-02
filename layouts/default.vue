<template>
    <header class="header-wrapper">
        <nav class="navigation-bar">
            <div class="nav-left-side">
                <!-- <h2>Fake store!</h2> -->
                <button class="burger-menu-icon" @click="toggleBurgerMenu">
                    <img src="/assets/icons/burger-menu.png" alt="Burger menu">
                </button>
            </div>
            <div class="nav-right-side">
                <ul class="navigation-links">
                    <nuxt-link to="/products">Products</nuxt-link>
                    <!-- <nuxt-link v-for="category in uniqueCategories" :key="category"
                        :to="{ path: '/products', query: { category } }">
                        {{ category }}
                    </nuxt-link> -->
                </ul>
                <button class="shopping-cart" @click="toggleShoppingBar">
                    <img src="/assets/icons/shopping-bag.png" alt="Shopping Cart">
                    <div class="cart-count" v-if="cart.length > 0">
                        <p>{{ totalCartItems }}</p>
                    </div>
                </button>
            </div>
        </nav>
    </header>

    <ShoppingCartSideBar :visible="isShoppingBarVisible" @close="closeSidebar" />
    <BurgerMenu :visible="isBurgerMenuVisible" @close="closeSidebar" />
    <div v-if="isShoppingBarVisible || isBurgerMenuVisible" class="overlay"></div>

    <div>
        <slot />
    </div>

    <!-- <footer class="footer-wrapper">
        footer TODO
    </footer> -->
</template>

<script setup>
import { useCart } from '@/composables/useCart';
import { useProducts } from '@/composables/useProducts';

const { cart, totalCartItems } = useCart();
const { uniqueCategories } = useProducts();

const isShoppingBarVisible = ref(false);
const isBurgerMenuVisible = ref(false);


const toggleShoppingBar = () => {
    isShoppingBarVisible.value = !isShoppingBarVisible.value;
    toggleBodyScroll(isShoppingBarVisible.value);
}

const closeSidebar = () => {
    isShoppingBarVisible.value = false;
    isBurgerMenuVisible.value = false;
    toggleBodyScroll(false);
}

const toggleBurgerMenu = () => {
    isBurgerMenuVisible.value = !isBurgerMenuVisible.value;
    toggleBodyScroll(isBurgerMenuVisible.value);
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