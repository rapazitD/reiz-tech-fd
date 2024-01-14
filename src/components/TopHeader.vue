<script setup lang="ts">
import "/src/assets/css/topHeader/topHeader.css"
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