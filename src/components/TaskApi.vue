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

<template>
    <section>
        <h2>Les tâches récupérées</h2>

        <ul>
            <li v-for="tache in taches" :key="tache.id">
                {{ tache.title }}
            </li>
        </ul>
    </section>
</template>