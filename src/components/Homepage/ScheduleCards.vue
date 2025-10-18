<template>
  <div class="Scheduler bg-pattern">
    <div class="container Modul">
      <h2 class="section-title">Náš denný harmonogram</h2>
      <p class="section-subtitle">Štrukturovaný deň plný hier, učenia a oddychu je kľúčom k spokojnosti našich najmenších.</p>

      <div v-if="scheduleItems.length" class="row g-4">
        <div v-for="item in scheduleItems" :key="item.id" class="col-md-6 col-lg-4 d-flex align-items-stretch">
          <div class="schedule-card fade-in-up">
            <div class="card-icon">
              <img :src="getImg(item.img)" :alt="item.description">
            </div>
            <div class="card-content">
              <h3 class="time">{{ item.time }}</h3>
              <p>{{ item.description === 'Prichod detí, voľné aktivity' ? 'Príchod detí, voľné aktivity' : item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <p>Načítavam harmonogram...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dbData from '../../../data/db.json';

interface ScheduleData {
  id: number;
  img: string;
  time: string;
  description: string;
}

const scheduleItems = ref<ScheduleData[]>(dbData.schedule);

const getImg = (imgPath: string) => {
  return new URL(`/src/assets/img/Schedule/${imgPath}`, import.meta.url).toString();
};
</script>