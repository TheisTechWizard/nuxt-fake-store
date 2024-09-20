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
                <div class="shopping-cart">
                    <img src="/assets/icons/shopping-bag.png" alt="">
                </div>
            </div>
        </nav>
    </header>

    <div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss"></style>