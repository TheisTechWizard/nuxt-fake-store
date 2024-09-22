<template>
    <transition name="sidebar-slide">
        <div class="sidebar" v-if="visible">
            <div class="sidebar-head">
                <h2>Shopping Cart - {{ cart.length }}</h2>
                <button class="close-btn" @click="$emit('close')">X</button>
            </div>
            <ul class="shopping-cart-list">
                <li class="shopping-cart-item" v-for="item in cart" :key="item.id">
                    <nuxt-link class="image-wrapper" :to="`/products/${item.id}`">
                        <img :src="item.image" alt="product thumb">
                    </nuxt-link>
                    <div class="cart-item-info">
                        <div class="title-icon-wrapper">
                            <h3>{{ item.title }}</h3>
                            <!-- Trash can icon to remove item -->
                        </div>
                        <div class="quantity-price-wrapper">
                            <div class="quantity-selector">
                                <button @click="removeFromCart(item.id)">-</button>
                                <input v-model="item.quantity" min="1" />
                                <button @click="addToCart(item)">+</button>
                            </div>
                            <p>
                                {{ item.price }}$
                            </p>
                        </div>



                    </div>

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