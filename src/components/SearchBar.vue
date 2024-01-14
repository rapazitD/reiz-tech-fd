<script setup lang="ts">
import '/src/assets/css/searchBar/searchBar.css'
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