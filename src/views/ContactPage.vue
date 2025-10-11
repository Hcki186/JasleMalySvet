<template>
  <div class="ContactPage TopGap">
    <div class="container Modul">
      <h2 class="section-title">Kontaktujte nás</h2>
      <p class="section-subtitle">Máte otázky alebo si chcete dohodnúť návštevu? Sme tu pre vás.</p>
      <div class="row g-5">
        <div class="col-lg-6">
          <ContactInfo />
        </div>
        <div class="col-lg-6">
          <GoogleMapLoc />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoogleMapLoc from '../components/ContactPage/GoogleMapLoc.vue';
import ContactInfo from "../components/ContactPage/ContactInfo.vue"; // Zmenený import
</script>