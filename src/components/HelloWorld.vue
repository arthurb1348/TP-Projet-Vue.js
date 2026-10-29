<script setup>
import { ref } from 'vue'
import heroImg from '../assets/hero.png'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'

const count = ref(0)
</script>

<template>
  <section id="center content" class="flex flex-col items-center justify-center">
    <div class="hero relative mb-4">
      <img :src="heroImg" class="base" width="170" height="179" alt="" />
      <img :src="vueLogo" class="framework" alt="Vue logo" />
      <img :src="viteLogo" class="vite" alt="Vite logo" />
    </div>
    <div class="text-center">
      <h1 class="text-2xl font-bold">Get started</h1>
      <p class="text-lg">Edit <code>src/App.vue</code> and save to test <code>HMR</code></p>
    </div>
    <button type="button" class="counter btn btn-primary" @click="count++">
      Count is {{ count }}
    </button>
  </section>

  <div class="ticks"></div>

  <section id="next-steps content" class="flex flex-col items-center justify-center">
    <div id="docs" class="mb-4">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2 class="text-xl font-bold">Documentation</h2>
      <p class="text-lg">Your questions, answered</p>
      <ul>
        <li class="mb-2">
          <a href="https://vite.dev/" target="_blank">
            <img class="logo" :src="viteLogo" alt="" />
            Explore Vite
          </a>
        </li>
        <li class="mb-2">
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
            <img class="button-icon" :src="vueLogo" alt="" />
            Learn more
          </a>
        </li>
      </ul>
    </div>
    <div id="social">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2 class="text-xl font-bold">Connect with us</h2>
      <p class="text-lg">Join the Vite community</p>
      <ul>
        <li>
          <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://chat.vite.dev/" target="_blank" rel="noopener noreferrer ">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
          </a>
        </li>
        <li class="mb-2">
          <a href="https://x.com/vite_js" target="_blank" rel="noopener noreferrer">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#x-icon"></use>
            </svg>
            X.com
          </a>
        </li>
        <li class="mb-2">
          <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noopener noreferrer">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Bluesky
          </a>
        </li>
      </ul>
    </div>
  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
