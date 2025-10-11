<template>
  <NavBar></NavBar>
  <main class="main-content">
    <RouterView />
  </main>
  <FooterBar></FooterBar>
</template>

<script setup lang="ts">
import {RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import FooterBar from "./components/FooterBar.vue"
</script>

<style>
/* Štýly pre hlavný obsah, aby päta správne sedela */
.main-content {
  flex-grow: 1;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>