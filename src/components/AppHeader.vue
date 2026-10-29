<script setup>
import { ref, watch, onUnmounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";
import { logout } from "../services/AuthService.js";

const router = useRouter();
const route = useRoute();

const currentUser = ref(null);
const authReady = ref(false);
const menuOpen = ref(false);
const isLoggingOut = ref(false);
const errorMessage = ref("");

// Une seule liste de liens pour les versions mobile et ordinateur.
const navigationLinks = [
    { label: "Accueil", to: "/home" },
    { label: "Cours", to: "/lessons" },
    { label: "Exercices", to: "/exercices" },
    { label: "TP", to: "/tp" },
    { label: "Corrections", to: "/corrections" },
    { label: "Articles", to: "/articles" },
];

// Écoute la session initiale, puis chaque connexion ou déconnexion.
const stopAuthListener = onAuthStateChanged(auth, (user) => {
    currentUser.value = user;
    authReady.value = true;
});

// Nettoie l'écouteur si le composant est retiré.
onUnmounted(() => {
    stopAuthListener();
});

// Ferme le menu après une navigation, même déclenchée ailleurs.
watch(
    () => route.fullPath,
    () => {
        menuOpen.value = false;
    }
);

async function handleLogout() {
    isLoggingOut.value = true;
    errorMessage.value = "";

    try {
        // Réutilise la fonction de ton AuthService.js.
        await logout();

        menuOpen.value = false;
        await router.replace("/login");
    } catch (error) {
        console.error("Erreur de déconnexion :", error);
        errorMessage.value = "Impossible de vous déconnecter. Réessayez.";
    } finally {
        isLoggingOut.value = false;
    }
}
</script>

<template>
    <header class="border-b border-base-300 bg-base-100 shadow-sm">
        <div
            class="navbar mx-auto max-w-7xl flex-wrap gap-2 px-4 md:px-8"
        >
            <!-- Le nom du site ramène à l'accueil. -->
            <RouterLink
                to="/home"
                class="btn btn-ghost px-2 text-xl font-bold text-primary"
                @click="menuOpen = false"
            >
                Tutur.vue
            </RouterLink>

            <!-- Bouton visible sur les petits écrans. -->
            <button
                type="button"
                class="btn btn-ghost ml-auto xl:hidden"
                :aria-expanded="menuOpen"
                aria-controls="header-navigation"
                @click="menuOpen = !menuOpen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                {{ menuOpen ? "Fermer" : "Menu" }}
            </button>

            <!-- Menu vertical sur mobile, horizontal sur grand écran. -->
            <nav
                id="header-navigation"
                aria-label="Navigation principale"
                class="w-full flex-col gap-4 pb-3 xl:ml-auto xl:w-auto xl:flex-1 xl:flex-row xl:items-center xl:justify-between xl:pb-0"
                :class="menuOpen ? 'flex' : 'hidden xl:flex'"
            >
                <ul
                    class="menu w-full gap-1 rounded-box bg-base-200 xl:menu-horizontal xl:w-auto xl:bg-transparent"
                >
                    <li
                        v-for="link in navigationLinks"
                        :key="link.to"
                    >
                        <RouterLink
                            :to="link.to"
                            active-class="bg-primary/10 font-semibold text-primary"
                            @click="menuOpen = false"
                        >
                            {{ link.label }}
                        </RouterLink>
                    </li>
                </ul>

                <!-- Attend la première réponse de Firebase. -->
                <div
                    v-if="!authReady"
                    role="status"
                    class="flex min-h-10 items-center justify-center px-4"
                >
                    <span
                        class="loading loading-spinner loading-sm"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">
                        Vérification de la connexion…
                    </span>
                </div>

                <div
                    v-else
                    class="flex flex-col gap-2 border-t border-base-300 pt-3 xl:flex-row xl:border-0 xl:pt-0"
                >
                    <!-- Utilisateur connecté. -->
                    <template v-if="currentUser">
                        <RouterLink
                            to="/admin"
                            class="btn btn-primary btn-outline"
                            @click="menuOpen = false"
                        >
                            Espace privé
                        </RouterLink>

                        <button
                            type="button"
                            class="btn btn-ghost text-error"
                            :disabled="isLoggingOut"
                            @click="handleLogout"
                        >
                            {{
                                isLoggingOut
                                    ? "Déconnexion…"
                                    : "Se déconnecter"
                            }}
                        </button>
                    </template>

                    <!-- Visiteur déconnecté. -->
                    <template v-else>
                        <RouterLink
                            to="/register"
                            class="btn btn-ghost"
                            @click="menuOpen = false"
                        >
                            S’inscrire
                        </RouterLink>

                        <RouterLink
                            to="/login"
                            class="btn btn-primary"
                            @click="menuOpen = false"
                        >
                            Se connecter
                        </RouterLink>
                    </template>
                </div>
            </nav>
        </div>

        <p
            v-if="errorMessage"
            role="alert"
            class="mx-auto max-w-7xl px-4 pb-3 text-sm text-error md:px-8"
        >
            {{ errorMessage }}
        </p>
    </header>
</template>