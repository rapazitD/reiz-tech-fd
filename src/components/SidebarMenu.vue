<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";

</script>

<template>
  <div class="sidebar-menu">
    <Logo class="custom-logo"/>
    <Menu/>
  </div>
</template>

<style scoped>
  .sidebar-menu {
    width: 230px;
    height: 1149px;
    flex-shrink: 0;
    background: #FFF;
  }

  .custom-logo {
    padding-top: 55px;
    padding-left: 29px;
    width: 71px;
    height: 36px;
    flex-shrink: 0;
  }
</style>