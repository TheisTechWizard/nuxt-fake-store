<template>
    <transition name="sidebar-slide">
        <div class="sidebar" v-if="visible">
            <div class="sidebar-head">
                <div class="cart-size">
                    <h2>Shopping Cart</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                        <path fill="black" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2" />
                    </svg>
                    <h2>{{ totalCartItems }}</h2>
                </div>
                <button class="close-btn" @click="$emit('close')">X</button>
            </div>
            <div class="shopping-cart-content">
                <ul class="shopping-cart-list">
                    <li class="shopping-cart-item" v-for="item in cart" :key="item.id">
                        <div @click="$emit('close')">
                            <nuxt-link class="image-wrapper" :to="`/products/${item.id}`">
                                <img :src="item.image" alt="product thumb">
                            </nuxt-link>
                        </div>
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
                <div class="checkout-container">
                    <nuxt-link v-if="cart.length > 0" class="to-checkout-link" to="/checkout">
                        GO TO CHECKOUT - {{ totalPrice }}$
                    </nuxt-link>
                    <div @click="$emit('close')">
                        <nuxt-link v-if="cart.length > 0" to="/products/">Continue shopping</nuxt-link>
                    </div>
                </div>
            </div>
            <h2 v-if="cart.length == 0">Your cart is empty</h2>
        </div>
    </transition>
</template>

<script setup>
import { useCart } from '@/composables/useCart';

const { visible } = defineProps(['visible'])
const { cart, removeFromCart, addToCart, totalPrice, totalCartItems } = useCart();
</script>

<style lang="scss"></style>