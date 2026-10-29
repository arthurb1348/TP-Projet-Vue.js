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
    <section class="exercice">
        <h1 class="text-2xl font-bold">TP : Dynamic style</h1>

        <div class="mt-4">
            <label for="mot" class="block text-sm font-medium text-gray-700">
                Entrez « hello » ou « world » :
            </label>

            <input
                id="mot"
                type="text"
                placeholder="hello"
                @input="lireMot"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />

            <h2 
                :class="classeTitre1"
                v-show="visible"
            >
                Premier titre : changement de classe
            </h2>
        </div>

        <div class="mt-4">
            <label for="couleur" class="block text-sm font-medium text-gray-700">
                Entrez une couleur CSS :
            </label>

            <input
                id="couleur"
                type="text"
                placeholder="red, blue, orange..."
                @input="lireCouleur"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />

            <h2 :style="{ backgroundColor: couleurFond }">
                Deuxième titre : changement de couleur
            </h2>
        </div>

        <button type="button" @click="basculerTitre" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

    .maClasseHello {
        background-color: #dcfce7;
        color: #166534;
    }

    .maClasseWorld {
        background-color: #dbeafe;
        color: #1e40af;
    }
</style>