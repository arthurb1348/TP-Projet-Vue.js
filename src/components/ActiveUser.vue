<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})
</script>

<template>
    <article class="card border border-base-300 bg-base-100 shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Informations actuelles</h2>

            <p>Nom : {{ props.name }}</p>
            <p>Âge : {{ props.age }} ans</p>
        </div>
    </article>
</template>