<template>
    <header class="header-wrapper">
        <nav class="navigation-bar">
            <h2>Fake store!</h2>
            <ul>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
            </ul>
            <div class="shopping-cart">

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