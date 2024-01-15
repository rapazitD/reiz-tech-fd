<script setup lang="ts">

</script>

<template>
  <div class="notification">
    <img class="ring-bell" src="../assets/icons/notificationIcon.svg" alt="ring bell">

    <img class="active" src="../assets/icons/activeNotificationIcon.svg" alt="active status">
  </div>
</template>

<style scoped>
  div.notification {
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: #FFFFFF;
    position: relative;
  }

  .ring-bell {
    width: 24px;
    height: 24px;
    margin: 14px;
  }

  .active {
    position: absolute;
    left: 47px;
    bottom: 45.1px;
    width: 10px;
    height: 10px;
    flex-shrink: 0;
  }
</style>