<script setup>
    import { ref, onMounted } from "vue";

    const list = ref([]);

    async function afficherPokemon() {
        try {
            const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0") 
        
            if (!reponse.ok) {
                throw new Error("Impossible de récupérer la liste.");
            }
            const donnees = await reponse.json();
            console.log(donnees);

            list.value = donnees.results;
        } catch (erreur) {
            console.error(erreur);
        }
    } 

    onMounted(afficherPokemon);
</script>

<template>
    <section class="p-4">
        <h2 class="text-2xl font-bold">Poke-poke</h2>

        <ul class="mt-4 list-inside list-disc space-y-2">
            <li v-for="pokemon in list" :key="pokemon.url" class="mb-2">
                {{ pokemon.name }}
            </li>
        </ul>
    </section>
</template>