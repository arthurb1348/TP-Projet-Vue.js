<script setup>
defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});
</script>

<template>
    <li>
        <h2>{{ name }}</h2>
        <p>Numéro : {{ id }}</p>
        <img :src="img" :alt="name">
    </li>
</template>