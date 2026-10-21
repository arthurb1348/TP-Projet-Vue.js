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
    <section>
        <h1>Exercice 7 : Watchers</h1>
        <h2>Valeur actuelle : {{ leNombre }}</h2>
        <button type="button" @click="augmenter">
            + 1
        </button>
    </section>
</template>