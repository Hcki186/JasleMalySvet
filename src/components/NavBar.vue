<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top">
      <div class="container-md">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/img/MalySvetLogo/Logo.png" alt="MalySvet" width="60" height="60">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Domov</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Informacie">Informácie</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Kontakt">Kontakt</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>