<script setup>
import { ref } from "vue";

const props = defineProps({
    name: {type: String, required: true},
    age: {type: Number, required: true}
});

const newName = ref(props.name);
const newAge = ref(props.age);

const emit = defineEmits(["update-data"]);

function submitData() {
    console.log("1 : formulaire soumis");
    emit("update-data", newName.value, newAge.value);
}
</script>

<template>
    <form
        class="card border border-base-300 bg-base-100 shadow-sm"
        @submit.prevent="submitData"
    >
        <div class="card-body gap-4">
            <h2 class="card-title">Modifier les informations</h2>

            <label class="flex flex-col gap-2">
                <span class="text-sm font-medium">Nom</span>

                <input
                    v-model="newName"
                    type="text"
                    required
                    class="input w-full border-base-300"
                />
            </label>

            <label class="flex flex-col gap-2">
                <span class="text-sm font-medium">Âge</span>

                <input
                    v-model.number="newAge"
                    type="number"
                    min="0"
                    step="1"
                    required
                    class="input w-full border-base-300"
                />
            </label>

            <button type="submit" class="btn btn-primary">
                Enregistrer
            </button>
        </div>
    </form>
</template>
