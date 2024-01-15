<script setup lang="ts">
import Icon from "./Icon.vue";

defineProps<{ data: object }>()
</script>

<template>
  <div class="table-container">
    <div class="table-row heading">
      <div class="row-item">
        <Icon alt="minus-square" src="/src/assets/icons/minus-square.svg"/>
        <span>Title</span>
      </div>
      <div class="row-item">Category</div>
      <div class="row-item">Brand</div>
      <div class="row-item">Price</div>
      <div class="row-item">Stock</div>
      <div class="row-item">Rating</div>
    </div>
    <div class="table-row content" v-for="product in data.products">
      <div class="row-item">
        <Icon alt="minus-square" src="/src/assets/icons/minus-square.svg"/>
        <span class="active">{{product.title}}</span>
      </div>
      <div class="row-item">{{ product.category }}</div>
      <div class="row-item">{{ product.brand }}</div>
      <div class="row-item">{{ product.price }}</div>
      <div class="row-item">{{ product.stock }}</div>
      <div class="row-item">{{ product.rating }}</div>
    </div>
  </div>
</template>

<style scoped>
  .table-container {
    margin-top: 34px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    border-radius: 3px;
    gap: 30px;
  }

  .heading {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .content {
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .table-row {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    border-bottom: 1px solid #F2F2F2;
    padding-bottom: 24px;
  }

  .table-row:first-child {
    padding-top: 24px;
  }

  .table-row:last-child,
  .row-sub-container .row-item:last-child {
    border-bottom: 0;
  }

  .row-item {
    display: flex;
    flex: 1;
    justify-content: start;
    align-items: center;

    span {
      padding-left: 24px;
    }
  }

  .row-item:first-child {
    padding-left: 24px;
  }

  .active {
    color: #0B63F8;

    font-weight: 400;

  }
</style>