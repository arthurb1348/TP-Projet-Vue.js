<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Petite démonstration interactive de la réactivité.
const clicks = ref(0);

// Ces cartes utilisent les routes déjà présentes dans ton projet.
const sections = [
    {
        number: "01",
        title: "Comprendre",
        description:
        "Les notions de Vue.js, avec des explications et des exemples pour prendre ses repères.",
        label: "Découvrir les cours",
        to: "/lessons"
    },
    {
        number: "02",
        title: "Expérimenter",
        description:
        "Des exercices pour manipuler les données, déclencher des événements et faire communiquer les composants.",
        label: "Explorer les exercices",
        to: "/exercices"
    },
    {
        number: "03",
        title: "Construire",
        description:
        "Un jeu, un dashboard, des formulaires… Des petits projets pour mettre les notions en pratique.",
        label: "Tester les TP",
        to: "/tp"
    }
];
</script>

<template>
    <div class="space-y-10">
        <!-- Présentation et première interaction. -->
        <section
        class="rounded-3xl border border-base-300 bg-base-100
                p-6 shadow-sm sm:p-10"
        >
            <div class="grid items-center gap-8 lg:grid-cols-3">
                <div class="space-y-6 lg:col-span-2">
                    <span class="badge badge-outline">
                        Mon carnet d’apprentissage
                    </span>

                    <h1 class="text-4xl font-bold leading-tight sm:text-5xl">
                        Venez découvrir
                        <span class="text-primary">Vue.js</span>
                        avec moi.
                    </h1>

                    <p class="max-w-2xl text-lg leading-relaxed text-base-content/70">
                        Moi, c’est Arthur. Dans le cadre de ma formation de concepteur
                        développeur d’applications, j’apprends Vue.js en créant des
                        interfaces interactives.
                    </p>

                    <p class="max-w-2xl leading-relaxed text-base-content/70">
                        Ici, je rassemble mes cours, mes exercices et mes petits projets.
                        Parcourez-les, essayez les fonctionnalités et découvrez mes progrès,
                        un composant à la fois.
                    </p>

                    <div class="flex flex-wrap gap-3">
                        <RouterLink to="/exercices" class="btn btn-primary">
                        Explorer les exercices
                        </RouterLink>

                        <RouterLink to="/tp" class="btn btn-outline">
                        Voir les projets en action
                        </RouterLink>
                    </div>
                </div>

                <aside class="rounded-2xl bg-base-200 p-6 text-center">
                    <h2 class="text-lg font-semibold">
                        Vue, ça réagit !
                    </h2>

                    <p class="mt-2 text-sm text-base-content/70">
                        Un clic suffit pour modifier ce compteur.
                    </p>

                    <p
                        class="my-6 text-6xl font-bold text-primary"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {{ clicks }}
                    </p>

                    <button
                        type="button"
                        class="btn btn-primary w-full"
                        @click="clicks++"
                    >
                        À vous de cliquer
                    </button>

                    <button
                        type="button"
                        class="btn btn-ghost btn-sm mt-2"
                        :disabled="clicks === 0"
                        @click="clicks = 0"
                    >
                        Remettre à zéro
                    </button>
                </aside>
            </div>
        </section>

        <!-- Présentation des trois rubriques. -->
        <section class="space-y-5" aria-labelledby="explore-title">
            <div>
                <h2 id="explore-title" class="text-2xl font-bold">
                Choisissez votre point de départ
                </h2>

                <p class="mt-2 text-base-content/70">
                Un peu de théorie, beaucoup de pratique.
                </p>
            </div>

            <div class="grid gap-5 md:grid-cols-3">
                <article
                    v-for="section in sections"
                    :key="section.to"
                    class="card border border-base-300 bg-base-100
                    shadow-sm transition-shadow hover:shadow-md"
                >
                    <div class="card-body">
                        <span class="text-sm font-bold text-primary">
                        {{ section.number }}
                        </span>

                        <h3 class="card-title">{{ section.title }}</h3>

                        <p class="text-base-content/70">
                            {{ section.description }}
                        </p>

                        <div class="card-actions mt-4">
                            <RouterLink
                                :to="section.to"
                                class="btn btn-outline btn-sm"
                            >
                                {{ section.label }}
                            </RouterLink>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>