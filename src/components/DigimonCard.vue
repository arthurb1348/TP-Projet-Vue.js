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
    <li>
        <h2>{{ name }}</h2>
        <img :src="img" :alt="name" width="150">
    </li>
</template>