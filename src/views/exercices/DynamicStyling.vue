<script setup>
    import { ref } from 'vue';

    const color1 = ref({
        color: 'blue'
    });

    const color2 = ref({
        color: 'red'
    });

    const activ1 = ref(true);

    const activ2 = ref(true);

    function changeColor1() {
        color1.value.color = color1.value.color === 'blue' ? 'black' : 'blue';
    }

    function changeColor2() {
        color2.value.color = color2.value.color === 'red' ? 'black' : 'red';
    }

    function changeClass1() {
        activ1.value = !activ1.value;
    }

    function changeClass2() {
        activ2.value = !activ2.value;
    }

</script>
<template>
    <section class="grille-cartes">

        <article
        class="carte"
        :style="color1"
        @click="changeColor1"
        >
            <h2>Carte 1 — Style</h2>
        </article>

        <article 
            class="carte"
            :style="color2"
            @click="changeColor2"
        >
            <h2>Carte 2 — Style</h2>
        </article>

        <article 
            class="carte" 
            :class="{'green' : activ1, 'red' : !activ1}"
            @click="changeClass1"
        >
            <h2>Carte 3 — Classe</h2>
        </article>

        <article 
            class="carte"
            :class="{'small' : activ2, 'big' : !activ2}"
            @click="changeClass2"
        >
            <h2>Carte 4 — Classe</h2>
        </article>

    </section>
</template>

<style scoped>
    .carte {
        background-color: white;
        padding: 24px;
        border: 1px solid #ccc;
        border-radius: 12px;
    }

    .green {
        background-color : green;
        color: antiquewhite;
    }

    .red {
        background-color: red;
        color: black;
        font-weight: bold;
    }

    .small {
        font-size: x-small;
    }

    .big {
        font-size: x-large;
    }
</style>