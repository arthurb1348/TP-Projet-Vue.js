<script setup>
import { ref } from "vue";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../firebase.js";

const router = useRouter();

// Le routeur aura vérifié la connexion avant d’afficher cette page.
const user = auth.currentUser;
const errorMessage = ref("");

async function logout() {
    errorMessage.value = "";

    try {
        await signOut(auth);

        // Revenir à la connexion après la déconnexion.
        await router.replace("/login");
    } catch (error) {
        console.error("Erreur de déconnexion :", error);
        errorMessage.value = "Impossible de vous déconnecter. Réessayez.";
    }
}
</script>

<template>
    <section v-if="user" class="mx-auto max-w-2xl space-y-6">
        <header>
            <span class="badge badge-primary badge-outline">
                Espace privé
            </span>

            <h1 class="mt-3 text-3xl font-bold">
                Page admin
            </h1>
        </header>

        <div class="alert alert-success">
            <span>Vous êtes connecté : l’accès à cette page est autorisé.</span>
        </div>

        <article class="card border border-base-300 bg-base-100 shadow-sm">
            <div class="card-body gap-4">
                <h2 class="card-title">Votre compte</h2>

                <div>
                    <p class="text-sm text-base-content/70">Email</p>
                    <p class="break-all font-medium">{{ user.email }}</p>
                </div>

                <div>
                    <p class="text-sm text-base-content/70">Identifiant Firebase</p>
                    <p class="break-all font-mono text-sm">{{ user.uid }}</p>
                </div>

                <button
                    type="button"
                    class="btn btn-error btn-outline mt-2"
                    @click="logout"
                >
                    Se déconnecter
                </button>
            </div>
        </article>

        <p v-if="errorMessage" role="alert" class="alert alert-error">
            {{ errorMessage }}
        </p>
    </section>
</template>