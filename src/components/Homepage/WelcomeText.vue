<template>
  <div class="welcome-hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="hero-content fade-in-up">
            <h1 class="hero-title">
              Vitajte v jasličkách <br><span>MALÝ SVET</span>
            </h1>
            <p class="hero-subtitle">
              Miesto, kde sa každé dieťa cíti bezpečne, milovane a inšpirovane.
            </p>
            <router-link to="/Kontakt" class="btn btn-primary btn-lg hero-button">
              Kontaktujte nás <i class="fas fa-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <img src="../../assets/img/ObjectPhoto/BackGroundWelcomeImg2.png" alt="Hrajúce sa deti" class="hero-image fade-in-up">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>