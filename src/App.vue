<template>
  <NavBar></NavBar>
  <RouterView />
  <FooterBar></FooterBar>
</template>



<script setup lang="ts">
import {RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import FooterBar from "./components/FooterBar.vue"
</script>

<style >
</style>
