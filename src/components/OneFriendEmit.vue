<template>
    <li class="card min-w-0 border border-base-300 bg-base-100 shadow-sm">
        <div class="card-body gap-4 p-5">
            <div class="flex items-start justify-between gap-3">
                <h2 class="card-title min-w-0 break-words">
                    {{ name }}
                </h2>

                <span v-if="premium" class="badge badge-primary shrink-0">
                    Premium
                </span>
                <span v-else class="badge badge-ghost shrink-0">
                    Standard
                </span>
            </div>

            <div class="space-y-1 text-sm text-base-content/70">
                <p class="break-words">{{ email }}</p>
                <p>{{ phone }}</p>
            </div>

            <div class="card-actions mt-auto flex-wrap">
                <button
                    type="button"
                    class="btn btn-outline btn-sm"
                    @click="updatePremium"
                >
                    {{ premium ? "Passer Standard" : "Passer Premium" }}
                </button>

                <button
                    type="button"
                    class="btn btn-error btn-outline btn-sm"
                    @click="deleteFriend"
                >
                    Supprimer
                </button>
            </div>
        </div>
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