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
    <section>
        <h1>Ma liste de films</h1>

        <label for="film">Nom du film :</label>

        <input
            id="film"
            type="text"
            placeholder="Exemple : Tutur 2 le retour "
            :value="nomFilm"
            @input="lireNomFilm"
        />

        <button type="button" @click="ajouterFilm">
            Ajouter le film
        </button>

        <ul v-if="mesFilms.length > 0">
            <li
                v-for="(film, index) in mesFilms"
                :key="index"
            >

                <button
                    type="button"
                    class="bouton-supprimer"
                    @click="supprimerFilm(index)"
                >
                    {{ film }} - Cliquez pour supprimer
                </button>
            </li>
        </ul>

        <p v-else>
            Votre liste est vide : ajoutez votre premier film !
        </p>
    </section>
</template>

<style scoped>
    section {
        max-width: 600px;
        margin: 24px auto;
        padding: 24px;
        background: #ffffff;
        color: #1f2937;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        text-align: left;
        line-height: 1.5;
    }

    h1 {
        margin: 0 0 24px;
        font-size: 1.6rem;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
    }

    input,
    button {
        box-sizing: border-box;
        width: 100%;
        min-height: 44px;
        padding: 12px;
        font: inherit;
        border-radius: 8px;
    }

    input {
        background: white;
        color: #1f2937;
        border: 1px solid #64748b;
    }

    input::placeholder {
        color: #64748b;
        opacity: 1;
    }

    button {
        margin-top: 12px;
        background: #166534;
        color: white;
        border: 1px solid #166534;
        cursor: pointer;
    }

    button:hover {
        background: #14532d;
    }

    input:focus-visible,
    button:focus-visible {
        outline: 3px solid #1d4ed8;
        outline-offset: 3px;
    }

    ul {
        margin-top: 24px;
        padding-left: 24px;
    }

    li {
        margin-bottom: 8px;
        padding: 8px 12px;
        background: #f0fdf4;
        border-radius: 6px;
        overflow-wrap: anywhere;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    p {
        margin-top: 24px;
        padding: 12px;
        background: #f1f5f9;
        border-radius: 8px;
    }
    .bouton-supprimer {
        width: auto;
        margin-top: 0;
        flex-shrink: 0;
        background: #b91c1c;
        border-color: #b91c1c;
    }

    .bouton-supprimer:hover {
        background: #991b1b;
    }
</style>