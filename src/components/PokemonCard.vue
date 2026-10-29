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
    <li class="mb-4">
        <h2 class="text-xl font-bold">{{ name }}</h2>
        <p class="text-lg">Numéro : {{ id }}</p>
        <img :src="img" :alt="name" class="mt-2 w-32 h-32 object-contain" />
    </li>
</template>