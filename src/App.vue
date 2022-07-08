<template>
  <top-bar />
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style>
@import "@/assets/base.css";
.wrapper {
  width: 1260px;
  margin: 0 auto;
}
.loading {
  text-align: center;
}
</style>
