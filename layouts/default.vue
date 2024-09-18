<template>
    <header>
        <nav>
            <h2>Fake store!</h2>
            <ul>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
            </ul>
        </nav>
    </header>

    <div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss"></style>