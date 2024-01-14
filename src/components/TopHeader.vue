<script setup lang="ts">

import SearchBar from "./SearchBar.vue";
import Notification from "./Notification.vue";
import ProfileAvatar from "./ProfileAvatar.vue";
</script>

<template>
  <div style="display: flex;
width: 1129px;
justify-content: space-between;
align-items: center;">
    <SearchBar/>
    <Notification/>
    <ProfileAvatar/>
  </div>

</template>