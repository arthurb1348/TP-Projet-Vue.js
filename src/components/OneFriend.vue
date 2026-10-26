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
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    premium: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <li>
        <h2>{{ name }}</h2>
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
        <div v-if="premium" style="background-color: aquamarine;">Premium</div>
        <div v-else>Standard</div>
    </li>
</template>