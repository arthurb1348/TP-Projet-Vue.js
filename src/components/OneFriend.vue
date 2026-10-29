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
    <li class="mt-4 list-inside list-disc space-y-2">
        <h2 class="text-xl font-bold">{{ name }}</h2>
        <p class="text-lg">{{ email }}</p>
        <p class="text-lg">{{ phone }}</p>
        <div v-if="premium" class="bg-blue-100 text-blue-800 p-2 rounded">
            Premium
        </div>
        <div v-else class="bg-gray-100 text-gray-800 p-2 rounded">
            Standard
        </div>
    </li>
</template>