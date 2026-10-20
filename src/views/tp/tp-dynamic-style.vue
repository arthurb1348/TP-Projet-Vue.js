<script setup>
    import { ref } from "vue";

    const classeTitre1 = ref("");
    const couleurFond = ref("");
    const visible = ref(true);

    function lireMot(event) {
        const texte = event.target.value;

        if (texte.trim().toLowerCase() === "hello") {
            classeTitre1.value = "maClasseHello";
        } else if (texte.trim().toLowerCase() === "world") {
            classeTitre1.value = "maClasseWorld";
        } else {
            classeTitre1.value = "";
        }
    }

    function lireCouleur(event) {
        couleurFond.value = event.target.value;
    }

    function basculerTitre() {
        visible.value = !visible.value;
    }
</script>

<template>
    <section>
        <h1>TP : Dynamic style</h1>

        <div>
            <label for="mot">Entrez « hello » ou « world » :</label>

            <input
                id="mot"
                type="text"
                placeholder="hello"
                @input="lireMot"
            />

            <h2 
                :class="classeTitre1"
                v-show="visible"
            >
                Premier titre : changement de classe
            </h2>
        </div>

        <div>
            <label for="couleur">Entrez une couleur CSS :</label>

            <input
                id="couleur"
                type="text"
                placeholder="red, blue, orange..."
                @input="lireCouleur"
            />

            <h2 :style="{ backgroundColor: couleurFond }">
                Deuxième titre : changement de couleur
            </h2>
        </div>

        <button type="button" @click="basculerTitre">
            Afficher / masquer le premier titre
        </button>
    </section>
</template>

<style scoped>
    .exercice {
        padding: 24px;
        background-color: white;
        color: #222;
        border-radius: 12px;
    }

    label {
        display: block;
        margin-bottom: 8px;
    }

    input {
        padding: 10px;
    }

    h2 {
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
    }

    .maClasseHello {
        background-color: #dcfce7;
        color: #166534;
    }

    .maClasseWorld {
        background-color: #dbeafe;
        color: #1e40af;
    }
</style>