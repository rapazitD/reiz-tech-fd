<script setup lang="ts">

import Search from "./filters/Search.vue";
</script>

<template>
  <p class="text">Products Information</p>
  <div class="filter-content">
    <Search name="Title"/>
    <Search name="Brand"/>
  </div>
</template>

<style scoped>
  .text {
    margin-top: 43.9px;
    margin-bottom: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .filter-content {
    margin-top: 30px;
    margin-bottom: 34px;
    display: inline-flex;
    align-items: center;
    gap: 22px;
  }
</style>