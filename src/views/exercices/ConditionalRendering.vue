<script setup>
    import { ref } from "vue";

    const nomFilm = ref("");
    const mesFilms = ref([]);

    function lireNomFilm(event) {
        nomFilm.value = event.target.value;
    }

    function ajouterFilm() {
    
        const film = nomFilm.value.trim().toLocaleLowerCase();

        if (film === "") {
            return;
        }
        mesFilms.value.push(film);
        nomFilm.value = "";
    }

    function supprimerFilm(index) {
        mesFilms.value.splice(index, 1);
    }
</script>

<template>
    <section class="space-y-6">
        <h1 class="text-2xl font-bold">Ma liste de films</h1>

        <label for="film" class="font-medium">Nom du film :</label>

        <input
            class="border border-gray-300 rounded-md p-2 w-full"
            id="film"
            type="text"
            placeholder="Exemple : Tutur 2 le retour "
            :value="nomFilm"
            @input="lireNomFilm"
        />

        <button type="button" class="bg-green-600 text-white border border-green-600 rounded-md py-2 px-4 hover:bg-green-700" @click="ajouterFilm">
            Ajouter le film
        </button>

        <ul v-if="mesFilms.length > 0" class="list-disc list-inside space-y-2">
            <li
                v-for="(film, index) in mesFilms"
                :key="index"
                class="flex items-center justify-between bg-green-100 rounded-md p-2"
            >

                <button
                    type="button"
                    class="bouton-supprimer bg-red-600 text-white border border-red-600 rounded-md py-1 px-2 hover:bg-red-700"
                    @click="supprimerFilm(index)"   
                >
                    {{ film }} - Cliquez pour supprimer
                </button>
            </li>
        </ul>

        <p v-else class="text-gray-500">
            Votre liste est vide : ajoutez votre premier film !
        </p>
    </section>
</template>
