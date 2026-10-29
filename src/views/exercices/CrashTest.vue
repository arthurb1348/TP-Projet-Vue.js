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
  <section class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-10">
    <h1 class="text-2xl font-bold">Exercice 6 : Crash test</h1>

    <p class="text-lg">Compteur : {{ compteur }}</p>

    <button type="button" class="bg-blue-600 text-white border border-blue-600 rounded-md py-2 px-4 hover:bg-blue-700" @click="augmenter">
      + 1000
    </button>

    <button type="button" class="bg-red-600 text-white border border-red-600 rounded-md py-2 px-4 hover:bg-red-700" @click="reduire">
      − 77
    </button>
    <p class="text-gray-500">{{afficherNameUser( )}}</p>
  </section>
</template>