<script setup lang="ts">
  import '/src/assets/css/notification/notification.css'
</script>

<template>
  <div class="notification">
    <img class="ring-bell" src="../assets/icons/notificationIcon.svg" alt="ring bell">

    <img class="active" style="width: 10px;
                height: 10px;
                flex-shrink: 0;"
         src="../assets/icons/activeNotificationIcon.svg" alt="active status">
  </div>
</template>