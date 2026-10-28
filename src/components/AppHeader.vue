<template>
    <div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">Tutur.vue</a>
  <router-link to="/home" class="btn btn-ghost">Home</router-link>
  <router-link to="/lessons" class="btn btn-ghost">Cours</router-link>
  <router-link to="/exercices" class="btn btn-ghost">Exercices</router-link>  
  <router-link to="/tp" class="btn btn-ghost">TP</router-link>
  <router-link to="/corrections" class="btn btn-ghost">Corrections</router-link>
  <RouterLink to="/articles" class="btn btn-ghost">Articles</RouterLink>
  <RouterLink to="/register" class="btn btn-ghost">S'enregistrer</RouterLink>
  <RouterLink to="/login" class="btn btn-ghost">Se connecter</RouterLink>
</div>
</template>

<script setup>
  import {RouterLink} from 'vue-router'
</script>