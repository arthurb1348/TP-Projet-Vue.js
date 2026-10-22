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
    <section>
        <h2>Poke-poke</h2>

        <ul>
            <li v-for="pokemon in list" :key="pokemon.url">
                {{ pokemon.name }}
            </li>
        </ul>
    </section>
</template>