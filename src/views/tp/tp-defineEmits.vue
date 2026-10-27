<script setup lang="ts">
import { ref } from "vue";
import NewFriend from "../../components/NewFriend.vue";
import OneFriendEmit from "../../components/OneFriendEmit.vue";

const lesAmis = ref([
    {
        id: 1,
        name: "Toto",
        phone: "0606060606",
        email: "supertoto@totomail.com",
        premium: true
    },
    {
        id: 2,
        name: "Tata",
        phone: "0606060607",
        email: "supertata@totomail.com",
        premium: false
    },
    {
        id: 3,
        name: "Yoyo",
        phone: "0606060608",
        email: "superyoyo@totomail.com",
        premium: false
    }
]);

let nextId = 4;

function updatePremium(id: number) {

    const amiTrouve = lesAmis.value.find(
        (ami) => ami.id === id
    );
    if (amiTrouve) {
        amiTrouve.premium = !amiTrouve.premium;
    }
}

function handleDelete(id: number) {

    lesAmis.value = lesAmis.value.filter(
        (ami) => ami.id !== id
    );
}

function handleAdd(name: string, phone: string, email: string) {

    const nouvelAmi = {
        id: nextId,
        name: name,
        phone: phone,
        email: email,
        premium: false
    };
    lesAmis.value.push(nouvelAmi);
    nextId += 1;
}
</script>

<template>
    <section class="space-y-6">
        <header>
            <h1 class="text-3xl font-bold">Mes amis</h1>
            <p class="mt-2 text-base-content/70">
                Ajoutez vos contacts et gérez leur statut.
            </p>
        </header>

        <div class="grid items-start gap-6 lg:grid-cols-3">
            <NewFriend @add-friend="handleAdd" />

            <ul class="grid min-w-0 gap-4 lg:col-span-2 xl:grid-cols-2">
                <li
                    v-if="lesAmis.length === 0"
                    class="col-span-full rounded-2xl border border-dashed
                            border-base-300 bg-base-100 p-8 text-center"
                >
                    Aucun ami pour le moment. Ajoutez votre premier contact !
                </li>

                <OneFriendEmit
                    v-for="ami in lesAmis"
                    :key="ami.id"
                    :unAmiId="ami.id"
                    :name="ami.name"
                    :phone="ami.phone"
                    :email="ami.email"
                    :premium="ami.premium"
                    @mon-event-premium-update="updatePremium"
                    @delete-friend="handleDelete"
                />
            </ul>
        </div>
    </section>
</template>