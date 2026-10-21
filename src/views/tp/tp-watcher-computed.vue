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
    <section>
        <h1>Exercice 7 : Watchers</h1>
        <h2>Valeur actuelle : {{ leNombre }}</h2>
        <button type="button" @click="augmenter1">
            + 1
        </button>
        <button type="button" @click="augmenter5">
            + 5
        </button>
        <p>{{ indice }}</p>
        <h3>{{ msg }}</h3>
    </section>
</template>