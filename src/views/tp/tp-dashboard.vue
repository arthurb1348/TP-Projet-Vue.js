<script setup>
import { ref, computed } from "vue";

// 1° Données initiales (Mock de tickets)
const tickets = ref([
    { id: 1, titre: "Impossible de se connecter à la base de données", categorie: "Infrastructure", priorite: "Haute" },
    { id: 2, titre: "Erreur 500 lors de la validation du panier", categorie: "Backend", priorite: "Haute" },
    { id: 3, titre: "Le bouton de déconnexion est mal aligné sur mobile", categorie: "UI/UX", priorite: "Basse" },
    { id: 4, titre: "Lenteur excessive sur l'affichage du tableau de bord", categorie: "Performance", priorite: "Moyenne" },
    { id: 5, titre: "Le formulaire de contact n'envoie pas d'email", categorie: "Backend", priorite: "Moyenne" },
    { id: 6, titre: "Mettre à jour le logo dans le header", categorie: "UI/UX", priorite: "Basse" }
]);

const searchText = ref("");
const selectedPriority = ref("");

const filteredTickets = computed(() => {
    
    const search = searchText.value.trim().toLowerCase();

    // Examiner chaque ticket et garder ceux qui correspondent.
    return tickets.value.filter((ticket) => {
        const matchesTitle = ticket.titre
        .toLowerCase()
        .includes(search);

        const matchesPriority =
        selectedPriority.value === "" ||
        ticket.priorite === selectedPriority.value;

        // Le ticket doit respecter les DEUX critères.
        return matchesTitle && matchesPriority;
    });
});


const totalDisplayed = computed(() => {
    return filteredTickets.value.length;
});


const highPriorityPercentage = computed(() => {
    // Éviter une division par zéro si aucun ticket ne correspond.
    if (totalDisplayed.value === 0) {
        return 0;
    }

    const highPriorityCount = filteredTickets.value.filter(
        (ticket) => ticket.priorite === "Haute"
    ).length;

    return Math.round(
        (highPriorityCount / totalDisplayed.value) * 100
    );
});
</script>

<template>
    <section class="space-y-6">
        <h1 class="text-3xl font-bold">Dashboard des tickets</h1>

        <!-- Statistiques issues de la liste filtrée. -->
        <div
            class="stats stats-vertical w-full border border-base-300
            bg-base-100 shadow-sm sm:stats-horizontal"
        >
            <div class="stat">
                <div class="stat-title">Tickets affichés</div>
                <div class="stat-value">{{ totalDisplayed }}</div>
            </div>

            <div class="stat">
                <div class="stat-title">Priorité haute</div>
                <div class="stat-value text-error">
                    {{ highPriorityPercentage }} %
                </div>
            </div>
        </div>

        <!-- Les champs modifient directement les critères. -->
        <div class="grid gap-4 sm:grid-cols-2">
            <label class="flex flex-col gap-2">
                <span class="text-sm font-medium">Rechercher par titre</span>

                <input
                    v-model="searchText"
                    type="search"
                    placeholder="Exemple : formulaire"
                    class="input w-full border-base-300"
                />
            </label>

            <label class="flex flex-col gap-2">
                <span class="text-sm font-medium">Priorité</span>

                <select
                    v-model="selectedPriority"
                    class="select w-full border-base-300"
                >
                    <option value="">Toutes les priorités</option>
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
            </label>
        </div>

        <p v-if="totalDisplayed === 0" class="text-base-content/70">
            Aucun ticket ne correspond aux filtres.
        </p>

        <!-- La boucle utilise obligatoirement filteredTickets. -->
        <ul class="space-y-3">
            <li
                v-for="ticket in filteredTickets"
                :key="ticket.id"
                class="rounded-xl border border-base-300 bg-base-100 p-4"
            >
                <h2 class="font-semibold">{{ ticket.titre }}</h2>

                <p class="mt-2 text-sm text-base-content/70">
                    {{ ticket.categorie }} · Priorité {{ ticket.priorite }}
                </p>
            </li>
        </ul>
    </section>
</template>