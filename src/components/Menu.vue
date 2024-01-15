<script setup lang="ts">
import Icon from "./Icon.vue";
import { menuItems } from "/src/assets/menuItems.ts"
</script>

<template>
  <div class="menu">
    <div v-for="item in menuItems"
         :key="item.id"
         class="menu-item">
      <Icon :src="item.iconPath" :alt="item.alt"/>
      <span> {{ item.label }} </span>
    </div>
  </div>
</template>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 41px;
    padding-left: 41px;
    margin-top: 65px;

    div:first-child {
      color: #0B63F8;
    }
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    gap: 15px;

    span {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.32px;
    }
  }
</style>