import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("../views/HomeView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: () => import("../views/ProductDetailsView.vue"),
    },
  ],
});

export default router;
