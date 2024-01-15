<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import Notification from "./Notification.vue";
import ProfileAvatar from "./ProfileAvatar.vue";
</script>

<template>
  <div class="top-header">
    <SearchBar/>
    <div>
      <Notification/>
      <ProfileAvatar/>
    </div>
  </div>
</template>

<style scoped>
  div.top-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }
  }
</style>