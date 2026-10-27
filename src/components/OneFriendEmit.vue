<template>
    <li class="flex gap-2 bg-blue-500 p-4 rounded-xl">
        <div>
            <h2>{{ name }}</h2>
            <p>{{ email }}</p>
            <p>{{ phone }}</p>

            <div v-if="premium" style="background-color: aquamarine;">
                Premium
            </div>
            <div v-else>Standard</div>
        </div>

        <button
            type="button"
            class="btn btn-success"
            @click="updatePremium"
        >
            Changer le statut
        </button>

        <button
            type="button"
            class="btn btn-error"
            @click="deleteFriend"
        >
            Supprimer
        </button>
    </li>
</template>

<script setup>
const props = defineProps({
    unAmiId: {
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
});

const emit = defineEmits([
    "mon-event-premium-update",
    "delete-friend"
]);

function updatePremium() {
    emit("mon-event-premium-update", props.unAmiId);
}

function deleteFriend() {
    emit("delete-friend", props.unAmiId);
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>