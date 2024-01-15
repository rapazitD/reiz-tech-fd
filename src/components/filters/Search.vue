<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <div>
    <p>{{name}}</p>
    <input type="text" placeholder="Search">
  </div>

</template>

<style scoped>
div {
  width: 266px;
  height: 90px;
}

p {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input {
  margin-top: 16px;
  height: 50px;
  width: 266px;
  border-radius: 3px;
  border: 1px solid rgba(19, 19, 19, 0.25);
  background: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-indent: 24px;
}
input::placeholder {
  color: #ADA7A7;
}
</style>