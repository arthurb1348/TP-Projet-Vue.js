<script setup>
    import { ref, watch } from "vue";

    const leNombre = ref(0);

    function augmenter() {
        leNombre.value ++;
    }

    watch(leNombre, (newVal) => {
        console.log("Je te vois!");
        if(newVal === 7) {
            console.log("Limite atteinte !!!");
            leNombre.value = 0;
        }
    });
</script>

<template>
    <section class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-10">
        <h1 class="text-2xl font-bold">Exercice 7 : Watchers</h1>
        <h2 class="text-lg">Valeur actuelle : {{ leNombre }}</h2>
        <button type="button" class="bg-blue-600 text-white border border-blue-600 rounded-md py-2 px-4 hover:bg-blue-700" @click="augmenter">
            + 1
        </button>
    </section>
</template>