<script setup>
import { ref, onMounted } from "vue";
import Pokemon from "../../components/PokemonCard.vue";
import Digimon from "../../components/DigimonCard.vue";

const list = ref([]);
const list2 = ref([])

async function recupPokemons() {
    try {
        // Récupérer la liste des 20 Pokémon
        const reponse = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
        );

        if (!reponse.ok) {
            throw new Error("Impossible de récupérer la liste.");
        }

        const donnees = await reponse.json();

        list.value = [];

        // Récupérer les détails de chaque Pokémon
        for (const pokemon of donnees.results) {
            const reponseDetails = await fetch(pokemon.url);

            if (!reponseDetails.ok) {
                throw new Error(
                    `Impossible de récupérer ${pokemon.name}.`
                );
            }

            const details = await reponseDetails.json();

            // Préparer les informations à transmettre à l'enfant
            list.value.push({
                id: details.id,
                name: details.name,
                img: details.sprites.front_default
            });
        }

        console.log(list.value);
    } catch (erreur) {
        console.error(erreur);
    }
}

async function recupDigimons() {
    try {
        const reponse = await fetch(
            "https://digi-api.com/api/v1/digimon?pageSize=20&page=0"
        );

        if (!reponse.ok) {
            throw new Error("Impossible de récupérer la liste.");
        }

        const donnees = await reponse.json();

        list2.value = donnees.content;
        console.log(list2.value);

    } catch (erreur) {
        console.error(erreur);
    }
}
onMounted(recupPokemons);
onMounted(recupDigimons);
</script>

<template>
    <h1>Fetch API + lifecycle + props</h1>
    <section>
        <div>
            <h2>Pokémons</h2>

            <ul>
                <Pokemon
                    v-for="pokemon in list"
                    :key="pokemon.id"
                    :id="pokemon.id"
                    :name="pokemon.name"
                    :img="pokemon.img"
                />
            </ul>
        </div>
        <div>
            <h2>Digimons</h2>

            <ul>
                <Digimon
                    v-for="digimon in list2"
                    :key="digimon.name"
                    :name="digimon.name"
                    :img="digimon.image"
                />
            </ul>
        </div>
    </section>
</template>