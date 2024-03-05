<template>
    <div>
        <nav class="navbar navbar-expand-md fixed-top bg-body-tertiary">
            <div class="container-md">
                <div class="navbar-brand ">
                    <img src="../assets/img/MalySvetLogo/Logo.png" alt="MalySvet" width="40" height="40">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Domov</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/Informácie">Informácie</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/Dokumenti">Dokumenti</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/Galéria">Galéria</router-link>
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