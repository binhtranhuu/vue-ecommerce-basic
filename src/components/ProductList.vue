<template>
  <div v-if="isLoading" class="loading">Loading...</div>
  <div v-else class="product-list">
    <product-card
      v-for="card in filteredProducts"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/model/Product";
import { useFiltersStore } from "@/stores/filters";

const API_PRODUCTS_URL = "https://fakestoreapi.com/products";

const filters = useFiltersStore();
const isLoading = ref(true);
const products = ref<IProduct[]>([]);

const filteredProducts = computed(() => {
  if (filters.searchBarValue) {
    return products.value.filter((product: IProduct) =>
      product.title.includes(filters.searchBarValue)
    );
  }
  return products.value;
});

watchEffect(async () => {
  products.value = await (await fetch(API_PRODUCTS_URL)).json();
  isLoading.value = false;
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
