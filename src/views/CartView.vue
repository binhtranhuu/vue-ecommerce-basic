<template>
  <div class="shopping-cart">
    <div class="shopping-cart__title">Shopping Cart</div>
    <div class="shopping-cart__list">
      <cart-item
        v-for="item in cart.items"
        :key="item.id"
        :cart-item="item"
        @remove="onRemove"
      />
    </div>
    <div class="shopping-cart__total-price">
      <div class="total-price__title">Total price:</div>
      <div class="total-price__value">{{ currency }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useCurrency } from "@/composables/useCurrency";

const cart = useCartStore();

const totalPrice = computed(() => {
  return cart.totalPrice;
});

const { currency } = useCurrency(totalPrice);

const onRemove = (id: number) => {
  cart.deleteFromCart(id);
};
</script>

<style scoped>
.shopping-cart {
  padding-bottom: 50px;
}
.shopping-cart__title {
  font-weight: 600;
  font-size: 26px;
  color: #151515;
}
.shopping-cart__list {
  margin-top: 24px;
}
.shopping-cart__total-price {
  margin-top: 20px;
}
.total-price__title {
  font-weight: 600;
  font-size: 12px;
  color: #000000;
}
.total-price__value {
  font-weight: 600;
  font-size: 26px;
  color: #151515;
  margin-top: 8px;
}
</style>
