<template>
  <div v-if="contact" class="ContactInfo fade-in-up">
    <h3 class="contact-section-title">Kontaktné informácie</h3>
    <div class="info-block">
      <div class="info-item">
        <i class="fas fa-map-marker-alt info-icon"></i>
        <div>
          <strong>Adresa</strong>
          <p>Bernolákova 17, 08001 Prešov</p>
        </div>
      </div>
      <div class="info-item">
        <i class="fas fa-phone info-icon"></i>
        <div>
          <strong>Telefón</strong>
          <p><a :href="'tel:' + contact.phone">{{ contact.phone }}</a></p>
        </div>
      </div>
      <div class="info-item">
        <i class="fas fa-envelope info-icon"></i>
        <div>
          <strong>Email</strong>
          <p><a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
        </div>
      </div>
      <div class="info-item">
        <i class="fas fa-users info-icon"></i>
        <div>
          <strong>Zriaďovatelia</strong>
          <p>{{ contact.Owners.join(', ') }}</p>
        </div>
      </div>
    </div>

    <h3 class="contact-section-title mt-5">Otváracie hodiny</h3>
    <div class="info-block">
      <div class="info-item">
        <i class="fas fa-clock info-icon"></i>
        <div>
          <strong>Pondelok - Piatok</strong>
          <p>{{ contact.openHours.time[0] }}</p>
        </div>
      </div>
      <div class="info-item">
        <i class="fas fa-door-closed info-icon"></i>
        <div>
          <strong>Sobota - Nedeľa</strong>
          <p>{{ contact.openHours.time[1] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dbData from '../../../data/db.json';

interface OpenHours {
  day: string[];
  time: string[];
}
interface ContactData {
  phone: string;
  email: string;
  openHours: OpenHours;
  Owners: string[];
}

const contact = ref<ContactData | null>(dbData.Contact[0]);
</script>