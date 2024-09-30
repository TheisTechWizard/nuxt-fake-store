import {ref, computed} from 'vue'
import { useFetch } from '#app'

export const useProducts = () => {
    const {data: products, pending, error} = useFetch('https://fakestoreapi.com/products');

    const uniqueCategories = computed(() => {
        if (!products.value) return [];
        const categories = products.value.map(product => product.category);
        return [...new Set(categories)]
    });


    return {
        products,
        pending,
        error,
        uniqueCategories,
    }
}