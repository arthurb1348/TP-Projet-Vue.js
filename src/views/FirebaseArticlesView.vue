<script setup>
import { ref, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

import FirebaseAddArticle from "../components/FirebaseAddArticle.vue";
import FirebaseListArticles from "../components/FirebaseListArticles.vue";

const currentUser = ref(null);
const authReady = ref(false);

// Actualise l'affichage à chaque connexion ou déconnexion.
const unsubscribe = onAuthStateChanged(auth, (user) => {
    currentUser.value = user;
    authReady.value = true;
});

onUnmounted(() => {
    unsubscribe();
});
</script>

<template>
    <section class="space-y-6">
        <header>
            <h1 class="text-3xl font-bold">Articles</h1>
            <p class="mt-2 text-base-content/70">
                Consultez les articles et connectez-vous pour participer.
            </p>
        </header>

        <p v-if="!authReady" role="status">
            Vérification de la connexion…
        </p>

        <div v-else class="grid items-start gap-6 lg:grid-cols-3">
            <div class="min-w-0">
                <!-- Le formulaire est réservé aux utilisateurs connectés. -->
                <FirebaseAddArticle v-if="currentUser" />

                <!-- Invitation affichée aux visiteurs. -->
                <article
                    v-else
                    class="card border border-base-300 bg-base-100 shadow-sm"
                >
                    <div class="card-body">
                        <h2 class="card-title">Envie de participer ?</h2>

                        <p class="text-base-content/70">
                            Connectez-vous pour publier un article.
                        </p>

                        <RouterLink
                            to="/login"
                            class="btn btn-primary mt-3"
                        >
                            Se connecter
                        </RouterLink>
                    </div>
                </article>
            </div>

            <div class="min-w-0 lg:col-span-2">
                <FirebaseListArticles
                    :can-edit="currentUser !== null"
                />
            </div>
        </div>
    </section>
</template>