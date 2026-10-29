<script setup>
import { ref } from "vue";

const leLien = ref("https://vuejs.org");
const laImg = ref("https://picsum.photos/400/300");

const descriptionImage = "Une photographie d’illustration";
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-2xl font-bold">Exercice 2 : liaison d’attributs</h1>

    <h2 class="text-xl font-semibold">Liens dynamiques</h2>

    <p class="text-base-content/70">
      <a v-bind:href="leLien">
        Documentation Vue — syntaxe complète
      </a>
    </p>

    <p class="text-base-content/70">
      <a :href="leLien">
        Documentation Vue — syntaxe courte
      </a>
    </p>

    <h2 class="text-xl font-semibold">Image dynamique</h2>

    <img
      :src="laImg"
      :alt="descriptionImage"
      width="400"
      height="300"
    />
  </section>
</template>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>