<script setup lang="ts">
import TopHeader from "../components/TopHeader.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import Filter from "../components/Filter.vue";
</script>

<template>
  <div style="display: flex; flex-direction: row">
    <div>
      <SidebarMenu/>
    </div>
    <div style="margin-left: 41px; margin-top: 56.1px; display: flex; flex-direction: column">
      <TopHeader/>
      <Filter style="padding-top: 43.9px;"/>
    </div>
  </div>


</template>