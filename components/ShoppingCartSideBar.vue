<template>
    <transition name="sidebar-slide">
        <div class="sidebar" v-if="visible">
            <h2>Shopping Cart</h2>
            <button class="close-btn" @click="$emit('close')">X</button>
            <ul>
                <li v-for="item in cart" :key="item.id">
                    {{ item.name }} - {{ item.price }} - {{ item.quantity }}
                    <button @click="removeFromCart(item.id)">Remove</button>
                    <button @click="addToCart(item)">Add</button>
                </li>
            </ul>
            <h2 v-if="cart.length == 0">Your cart is empty</h2>
        </div>
    </transition>
</template>

<script setup>
import { useCart } from '@/composables/useCart';

const { visible } = defineProps(['visible'])
const { cart, removeFromCart, addToCart } = useCart();
</script>

<style lang="scss"></style>