<script setup>
import { RouterLink } from "vue-router";

// Afficher automatiquement l’année courante.
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="border-t border-base-300 bg-base-100">
        <div class="mx-auto max-w-7xl px-4 py-8 md:px-8">
            <div
                class="flex flex-col justify-between gap-6
                    sm:flex-row sm:items-center"
            >
                <div>
                    <RouterLink to="/home" class="text-xl font-bold text-primary">
                        Tutur.vue
                    </RouterLink>

                    <p class="mt-2 text-sm text-base-content/70">
                        Apprendre Vue.js, un exercice à la fois.
                    </p>
                </div>

                <nav
                    aria-label="Liens du pied de page"
                    class="flex flex-wrap gap-5 text-sm"
                >
                    <RouterLink to="/home" class="link link-hover">
                        Accueil
                    </RouterLink>

                    <a
                        href="https://github.com/arthurb1348/TP-Projet-Vue.js"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link link-hover"
                    >
                        Voir le code sur GitHub
                    </a>

                    <a
                        href="https://fr.vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link link-hover"
                    >
                        Documentation Vue.js
                    </a>
                </nav>
            </div>

            <div
                class="mt-6 flex flex-col justify-between gap-2
                    border-t border-base-300 pt-5 text-xs
                    text-base-content/70 sm:flex-row"
            >
                <p>© {{ currentYear }} Arthur · Projet de formation CDA.</p>
                <p>Construit avec Vue.js, Tailwind CSS et DaisyUI.</p>
            </div>
        </div>
    </footer>
</template>