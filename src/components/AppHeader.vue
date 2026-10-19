<template>
    <div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">Tutur.vue</a>
  <router-link to="/home" class="btn btn-ghost">Home</router-link>
  <router-link to="/about" class="btn btn-ghost">About</router-link>
  <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
  <router-link to="/exercices" class="btn btn-ghost">Exercices</router-link>
  <router-link to="/lessons" class="btn btn-ghost">Cours</router-link>
</div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>