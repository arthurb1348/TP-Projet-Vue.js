<script setup>
    import { ref } from "vue";

    const nomFilm = ref("");
    const mesFilms = ref([]);
    const visible = ref(true);

    function lireNomFilm(event) {
        nomFilm.value = event.target.value;
    }

    function basculerListe() {
        visible.value = !visible.value;
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
    <section class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-10">
        <h1 class="text-2xl font-bold">Ma liste de films</h1>

        <label for="film" class="block text-sm font-medium text-gray-700">
            Nom du film :
        </label>

        <input
            id="film"
            type="text"
            placeholder="Exemple : Tutur 2 le retour "
            :value="nomFilm"
            @input="lireNomFilm"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />

        <button type="button" @click="ajouterFilm" class="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Ajouter le film
        </button>

        <ul 
            v-if="mesFilms.length > 0"
            v-show="visible"
            class="mt-4 list-inside list-disc space-y-2"
        >
            <li
                v-for="(film, index) in mesFilms"
                :key="index"
                class="text-base-content/70"
            >

                <button
                    type="button"
                    class="bouton-supprimer text-blue-500 hover:underline"
                    @click="supprimerFilm(index)"
                >
                    {{ film }} - Cliquez pour supprimer
                </button>
            </li>
        </ul>

        <p v-else class="mt-4 p-4 bg-blue-100 text-blue-800">
            Votre liste est vide : ajoutez votre premier film !
        </p>
        <button 
            type="button"  
            @click="basculerListe"
            v-if="visible"
            class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Masquer la liste
        </button>
        <button 
            type="button"  
            @click="basculerListe"
            v-else
            class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Afficher la liste
        </button>
    </section>
</template>
