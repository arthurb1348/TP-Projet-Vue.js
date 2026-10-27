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
    <h1>TP : defineEmits</h1>

    <NewFriend @add-friend="handleAdd" />

    <ul>
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
</template>