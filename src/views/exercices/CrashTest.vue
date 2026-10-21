<script setup>
import { ref } from "vue";

const compteur = ref(0);
const username = ref('');

function afficherNameUser() {
  console.log("la fonction qui gère le name est déclenchée");
  if(username.value == '') {
    return "Online"
  } else {
    return "Offline"
  }
}

function augmenter() {
  compteur.value += 1000;
}

function reduire() {
  compteur.value -= 77;
}
</script>

<template>
  <section>
    <h1>Exercice 6 : Crash test</h1>

    <p>Compteur : {{ compteur }}</p>

    <button type="button" @click="augmenter">
      + 1000
    </button>

    <button type="button" @click="reduire">
      − 77
    </button>
    <p>{{afficherNameUser( )}}</p>
  </section>
</template>