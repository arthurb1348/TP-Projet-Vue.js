<template>
    <div class="card-body">
        <h2 class="card-title text-2xl font-bold">Ajouter un ami</h2>
        <form class="form-control w-full" @submit.prevent="submitFriend">
            <label class="label">
                <span class="label-text">Nom:</span>
            </label>
            <input type="text" v-model="name" class="input input-bordered w-full" />       
            <label class="label">
                <span class="label-text">Téléphone:</span>
            </label>
            <input type="text" v-model="phone" class="input input-bordered w-full" />    
            <label class="label">
                <span class="label-text">Email:</span>
            </label>
            <input type="text" v-model="email" class="input input-bordered w-full" />   

            <button type="submit">Ajouter l’ami</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const name = ref('');
    const phone = ref('');
    const email = ref('');

    const emit = defineEmits(['add-friend']);

    function submitFriend() {
        emit('add-friend', name.value, phone.value, email.value);
    }
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>