<template>

    <Head>
        <Title> Products </Title>
        <Meta name="description" content="All products" />
    </Head>
    <div class="products-wrapper">
        <div class="filter-wrapper">
            <button v-for="category in uniqueCategories" :key="category" @click="filterByCategory(category)"
                :class="{ active: selectedCategory === category }">
                {{ category }}
            </button>
            <button @click="filterByCategory('All')" :class="{ active: selectedCategory === 'All' }">All</button>
        </div>
        <div class="products-grid">
            <ProductCard v-for="item in filteredProducts" :key="item.id" :product="item" />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProducts } from '@/composables/useProducts';

const { products, uniqueCategories, pending, error } = useProducts();
const selectedCategory = ref('All');

// Filtered products based on selected category
const filteredProducts = computed(() => {
    if (selectedCategory.value === 'All') {
        return products.value; // Show all products if no category is selected
    }
    return products.value.filter(product => product.category === selectedCategory.value);
});

// Method to set the selected category
const filterByCategory = (category) => {
    selectedCategory.value = category; // Update the selected category
};

const route = useRoute();
watch(() => route.query.category, (newCategory) => {
    if (newCategory) {
        selectedCategory.value = newCategory; // Set selected category from query param
    } else {
        selectedCategory.value = 'All'; // Default to 'All' if no query param
    }
});
</script>

<style scoped lang="scss">
.filter-wrapper {
    margin-bottom: 20px;
    text-align: center;

    button {
        margin: 5px;
        padding: 10px;
        background-color: #f0f0f0;
        cursor: pointer;
        border-radius: 6px;
        border: none;
    }

    button.active {
        background-color: #252D9B;
        color: white;
    }
}
</style>