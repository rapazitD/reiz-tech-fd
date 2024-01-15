<script setup lang="ts">
import { useFetch } from '/src/assets/services/useFetch.ts';
import {onBeforeMount} from "vue";
import TopHeader from "../components/TopHeader.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import Filter from "../components/Filter.vue";
import ContentTable from "../components/ContentTable.vue";

const { data, loading, fetchData } = useFetch<{ yourDataStructure: string }>();

onBeforeMount( () => {
  fetchData('https://dummyjson.com/products')
})
</script>

<template>
  <div style="display: flex; flex-direction: row; width: 100%">
    <div>
      <SidebarMenu/>
    </div>
    <div style="margin-left: 40px; margin-top: 56.1px; margin-right: 40px; display: flex; flex-direction: column; width: 100%">
      <TopHeader style="margin-left: 1px;"/>
      <Filter/>
      <ContentTable v-if="!loading" :data='data'/>
    </div>
  </div>
</template>