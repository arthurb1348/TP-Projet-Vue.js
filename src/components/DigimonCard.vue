<script setup>
defineProps({
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
    <li class="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 class="text-xl font-bold">{{ name }}</h2>
        <img :src="img" :alt="name" width="150">
    </li>
</template>