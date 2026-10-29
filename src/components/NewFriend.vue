<template>
    <section
        class="card min-w-0 border border-base-300 bg-base-100 shadow-sm"
    >
        <form class="card-body gap-4" @submit.prevent="submitFriend">
            <h2 class="card-title">Ajouter un ami</h2>

            <div class="space-y-2">
                <label for="friend-name" class="block text-sm font-medium">
                    Nom
                </label>
                <input
                    id="friend-name"
                    v-model="name"
                    type="text"
                    placeholder="Arthur"
                    class="input w-full border-base-300"
                />
            </div>

            <div class="space-y-2">
                <label for="friend-phone" class="block text-sm font-medium">
                    Téléphone
                </label>
                <input
                    id="friend-phone"
                    v-model="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    class="input w-full border-base-300"
                />
            </div>

            <div class="space-y-2">
                <label for="friend-email" class="block text-sm font-medium">
                    Email
                </label>
                <input
                    id="friend-email"
                    v-model="email"
                    type="email"
                    placeholder="arthur@exemple.fr"
                    class="input w-full border-base-300"
                />
            </div>

            <button type="submit" class="btn btn-primary mt-2 w-full">
                Ajouter l’ami
            </button>
        </form>
    </section>
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
