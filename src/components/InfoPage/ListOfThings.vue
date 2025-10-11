<template>
  <div class="ListOfThings TopGap bg-pattern">
    <div class="container Modul">
      <h2 class="section-title">Praktické informácie</h2>
      <p class="section-subtitle">Pre bezproblémový pobyt vášho dieťatka sme pripravili zoznam potrebných vecí a dôležitých dokumentov.</p>

      <div class="row g-4">
        <div class="col-lg-6 d-flex">
          <div class="info-card fade-in-up">
            <div class="card-header">
              <i class="fas fa-hand-holding-heart card-icon"></i>
              <h3>V jasliach poskytujeme</h3>
            </div>
            <ul>
              <li>Celodennú stravu, pitný režim a čerstvé ovocie</li>
              <li>Posteľnú bielizeň, uteráky a podbradníky</li>
              <li>Hygienické potreby (vreckovky, toaletný papier)</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 d-flex">
          <div class="info-card fade-in-up" style="animation-delay: 0.1s;">
            <div class="card-header">
              <i class="fas fa-shopping-bag card-icon"></i>
              <h3>Čo si priniesť</h3>
            </div>
            <ul>
              <li>Pohodlné prezuvky alebo protišmykové ponožky</li>
              <li>Pyžamko a obľúbenú hračku na spanie</li>
              <li>Náhradné oblečenie a fľašu na pitie</li>
              <li>V prípade potreby plienky a krém proti zapareninám</li>
            </ul>
            <p class="mt-3 text-center fw-bold">Všetky veci prosím označte menom dieťaťa.</p>
          </div>
        </div>
      </div>

      <div class="row mt-5 justify-content-center">
        <div class="col-lg-8">
          <div class="info-card download-section text-center fade-in-up" style="animation-delay: 0.2s;">
            <div class="card-header">
              <i class="fas fa-file-download card-icon"></i>
              <h3>Dokumenty na stiahnutie</h3>
            </div>
            <p>Tieto dokumenty si prosím stiahnite, vyplňte a prineste so sebou v prvý deň nástupu.</p>
            <a href="/ziadost.docx" download class="btn btn-primary m-2">
              <i class="fas fa-file-word me-2"></i> Žiadosť o prijatie
            </a>
            <a href="/zdravotny.docx" download class="btn btn-secondary m-2">
              <i class="fas fa-file-medical me-2"></i> Zdravotný dotazník
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>