<script setup lang="ts">
import { ref, Ref } from 'vue';

const searchInput: Ref<HTMLInputElement | null> = ref(null);

const focusInput = () => {
  if (searchInput.value) {
    searchInput.value.focus();
  }
};
</script>

<template>
  <div class="search-bar">
    <img @click="focusInput" src="../assets/icons/searchIcon.svg" alt="search icon" />
    <input ref="searchInput" type="text" placeholder="Search">
  </div>
</template>

<style scoped>
  div.search-bar {
    position: relative;
    height: 52px;
    input {
      width: 592px;
      height: 52px;
      border: 1px solid rgba(0, 0, 0, 0.20);
      border-radius: 3px;
      padding-left: 60px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    input::placeholder {
      color: #ADA7A7;
    }

    input:focus {
      outline: 1px solid #0B63F8;
    }

    img {
      display: block;
      position: absolute;
      width: 24px;
      height: 24px;
      top: 14px;
      left: 20px;
    }
  }
</style>