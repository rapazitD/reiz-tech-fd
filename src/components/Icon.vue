<script setup lang="ts">
interface Props {
  src: string
  alt: string
}

const props = defineProps<Props>()

</script>

<template>
  <img :src="props.src" :alt="props.alt">
</template>

<style scoped>

</style>