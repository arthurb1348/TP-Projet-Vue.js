<script setup>
import { ref } from "vue";

const compteur = ref(0);

function augmenter() {
  compteur.value += 1000;
}

function reduire() {
  compteur.value -= 77;
}
</script>

<template>
  <section>
    <h1>Exercice 3 : gestion des événements</h1>

    <p>Compteur : {{ compteur }}</p>

    <button type="button" @click="augmenter">
      + 1000
    </button>

    <button type="button" @click="reduire">
      − 77
    </button>
  </section>
</template>