<script setup>
  import {RouterView} from 'vue-router'
  import Header from './components/Header.vue'
  
</script>



<template>
  <div class="overflow-hidden">
    <Header />
    <RouterView />
  </div>
</template>


<style>

body {
  font-family:  sans-serif;
  background-color: #f5f5f5;
}
</style>