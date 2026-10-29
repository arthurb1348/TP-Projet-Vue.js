<script setup>
    import { ref, onMounted } from "vue";

    const taches = ref([]);

    async function chargerTaches() {
        try {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

            if (!reponse.ok) {
                throw new Error("Impossible de récupérer les tâches.");
            }

            const donnees = await reponse.json();

            console.log(donnees);

            taches.value = donnees;
        } catch (erreur) {
            console.error(erreur);
        }
    }

    onMounted(chargerTaches);
</script>

<template >
    <section class="p-4">
        <h2 class="text-2xl font-bold">Les tâches récupérées</h2>

        <ul class="mt-4 list-inside list-disc space-y-2">
            <li v-for="tache in taches" :key="tache.id" class="mb-2">
                {{ tache.title }}
            </li>
        </ul>
    </section>
</template>