<script setup>
    import { ref, watch, computed } from "vue";

    const leNombre = ref(0);
    const msg = ref("");
    let time = null

    const indice = computed(() => {
        if (leNombre.value < 7) {
            return "ESSAIE ENCORE !";
        } else if (leNombre.value === 7) {
            return "7... BINGO !";
        } else {
            return "Tu as dépassé le nombre !";
        }
    });

    function augmenter1() {
        leNombre.value ++;
    }

    function augmenter5() {
        leNombre.value += 5;
    }

    watch(leNombre, (newVal) => {
        if(newVal >= 30) {
            msg.value = "Beaucoup trop mon ami !";
            time = setTimeout(() => {
                leNombre.value = 0;
                msg.value = "";
                time = null
            }, 7000);
        }
    });
</script>

<template>
    <section class="exercice">
        <h1 class="text-2xl font-bold">TP 3 : Watcher computed</h1>
        <h2 class="text-lg font-semibold">Valeur actuelle : {{ leNombre }}</h2>
        <button type="button" @click="augmenter1" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            + 1
        </button>
        <button type="button" @click="augmenter5" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            + 5
        </button>
        <p class="mt-4 text-lg font-medium">{{ indice }}</p>
        <h3 class="text-xl font-bold">{{ msg }}</h3>
    </section>
</template>