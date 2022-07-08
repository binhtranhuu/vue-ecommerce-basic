<template>
  <div
    class="add-to-cart"
    :class="isClicked ? 'add-to-cart__buy_clicked' : 'add-to-cart__not-clicked'"
    @click.stop="onBuyClick"
  >
    {{ buttonText }}
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import type { IProduct } from "@/model/Product";

const props = defineProps<{
  product: IProduct;
}>();

const cart = useCartStore();
const isClicked = ref(false);

const onBuyClick = () => {
  if (isClicked.value) {
    isClicked.value = false;
    cart.deleteFromCart(props.product.id);
  } else {
    isClicked.value = true;
    cart.addToCart(props.product);
  }
};

const buttonText = computed(() => {
  return isClicked.value ? "Remove" : "Add to cart";
});

onMounted(() => {
  const isInCart =
    cart.items.findIndex((item) => item.id === props.product.id) > -1;
  if (isInCart) {
    isClicked.value = true;
  }
});
</script>

<style>
.add-to-cart {
  padding: 6px 12px;
  border: 2px solid #46760a;
  border-radius: 12px;
  font-size: 15px;
  cursor: pointer;
}
.add-to-cart__not-clicked {
  color: #fff;
  background: #6a983c;
}
.add-to-cart__buy_clicked {
  color: #151515;
  background: #fff;
}
</style>
