<template>
  <div class="footer">
    <div v-if="datas.length" class="container Modul">
      <div class="flex">
        <img src="../assets/img/MalySvetLogo/Logo.png" alt="Logo" width="100" height="100">
        <div class="Info">
          <p>Jasle MALÝ SVET ©2020</p>
          <a href="tel:+421915987987">{{ datas[0].phone }}</a>
          <a href="mailto:malysvet@gmail.com">{{ datas[0].email }}</a>
          <a href="https://www.facebook.com/maly.svet.967/" target="_blank">
            <i class="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <h1> LLLLLLLLLLLL</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const datas = ref<any[]>([]);

    onMounted(() => {
      fetch('http://localhost:3000/Contact')
        .then((res) => res.json())
        .then((data) => (datas.value = data))
        .catch((err) => console.log(err.message));
    });

    return {
      datas,
    };
  },
});
</script>

<style>
  
</style>