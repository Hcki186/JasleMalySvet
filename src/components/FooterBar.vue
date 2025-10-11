<template>
  <footer class="footer bg-pattern">
    <div v-if="contactInfo" class="container">
      <div class="row gy-4 text-center text-md-start">
        <div class="col-md-4 col-lg-4">
          <h5 class="footer-title">Jasle MALÝ SVET</h5>
          <img src="../assets/img/MalySvetLogo/Logo.png" alt="Logo Malý Svet" class="footer-logo my-3">
          <p class="copyright">© 2020 - {{ new Date().getFullYear() }} Všetky práva vyhradené.</p>
        </div>

        <div class="col-md-4 col-lg-4">
          <h5 class="footer-title">Kontakt</h5>
          <ul class="list-unstyled footer-contact">
            <li><i class="fas fa-map-marker-alt"></i> Bernolákova 17, 08001 Prešov</li>
            <li><a :href="'tel:' + contactInfo.phone"><i class="fas fa-phone"></i> {{ contactInfo.phone }}</a></li>
            <li><a :href="'mailto:' + contactInfo.email"><i class="fas fa-envelope"></i> {{ contactInfo.email }}</a></li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-4">
          <h5 class="footer-title">Zriaďovatelia</h5>
          <ul class="list-unstyled">
            <li v-for="owner in contactInfo.Owners" :key="owner">{{ owner }}</li>
          </ul>
          <a href="https://www.facebook.com/maly.svet.967/" target="_blank" class="social-icon" aria-label="Facebook stránka">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dbData from '../../data/db.json';

interface ContactData {
  phone: string;
  email: string;
  Owners: string[];
}

const contactInfo = ref<ContactData>(dbData.Contact[0]);
</script>