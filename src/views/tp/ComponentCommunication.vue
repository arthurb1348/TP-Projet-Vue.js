<script setup lang="ts">
import { ref } from "vue";
import UserData from "../../components/UserData.vue";
import ActiveUser from "../../components/ActiveUser.vue";

const user = ref({
    name: "Toto",
    age: 25,
});

function updateUser(newName: string, newAge: number) {
    console.log("2 : événement reçu par le parent");
    user.value.name = newName;
    user.value.age = newAge;
}


</script>

<template>
    <section class="space-y-6">
        <h1 class="text-3xl font-bold">Profil de l'utilisateur</h1>
            
        <div class="grid items-start gap-6 lg:grid-cols-2">

            <ActiveUser :name="user.name" :age="user.age"/>

            <UserData :name="user.name" :age="user.age" @update-data="updateUser"/>

        </div>
    </section>
</template>