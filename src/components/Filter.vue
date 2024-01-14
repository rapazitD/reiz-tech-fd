<script setup lang="ts">

import Search from "./filters/Search.vue";
</script>

<template>
  <p style="
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;">
    Products Information
  </p>
  <div style="display: inline-flex;
              align-items: center;
              gap: 22px;">
    <Search name="Title"/>
    <Search name="Brand"/>
  </div>
</template>

<style scoped>

</style>