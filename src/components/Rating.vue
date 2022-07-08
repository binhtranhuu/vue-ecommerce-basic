<template>
  <icon-filled-star v-for="star in roundedRating" :key="star" />
  <icon-empty-star v-for="star in emptyStarsCount" :key="star" />
</template>

<script setup lang="ts">
const props = defineProps<{
  rating: number;
}>();

const NUMBER_OF_STARS = 5;

const roundedRating = ref<number>(Math.round(props.rating));
const emptyStarsCount = computed(() => {
  return NUMBER_OF_STARS - roundedRating.value;
});
</script>
