<template>
  <div class="Scheduler">
    <div class="container-md Modul">
      <div v-if="datas.length" class="GG">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div v-for="data in datas" :key="data.id" class="col cards">
              <img :src="getImg(data.img)" alt="foto" class="img"> 
              <h1 class="time">{{ data.time }}</h1>
              <p>{{ data.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>No data available</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface ScheduleData {
  id: number;
  img: string;
  time: string;
  description: string;
}

export default defineComponent({
  setup() {
    const datas = ref<ScheduleData[]>([]);

    onMounted(() => {
      fetch('http://localhost:3000/schedule')
        .then((res) => res.json())
        .then((data: ScheduleData[]) => (datas.value = data))
        .catch((err) => console.log(err.message));
    });

    const getImg = (imgPath: any) => {
      return new URL(`/src/assets/img/Schedule/${imgPath}`, import.meta.url).toString();
};


    return {
      datas,
      getImg,
    };
  }
});
</script>
