<script setup lang="ts">
import { L } from 'vue-router/dist/index-u4XkZVDG.js';

</script>

<template>
  <main>
    <h1>Cours Vue.js</h1>

    <ul>
      <li>
        <RouterLink to="/lessons/setup">
          Cours 1 : Setup
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/lessons/intro">
          Cours 2 : Introduction
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/lessons/syntax">
          Cours 3 : Syntaxe
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/lessons/text-interpolation">
          Cours 4 : Interpolation de texte
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/lessons/attribute-binding">
          Cours 5 : Liaison d'attributs
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/lessons/event-binding">
          Cours 6 : Gestion des événements
        </RouterLink>
      </li>
    </ul>
  </main>
</template>