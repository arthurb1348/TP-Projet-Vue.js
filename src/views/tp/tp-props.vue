<script setup>
import { ref } from 'vue'
import Friend from '../../components/OneFriend.vue'

const lesAmis = ref([
    {id : 1, name : "Toto", phone : "0606060606", email : "supertoto@totomail.com", premium : true},
    {id : 2, name : "Tata", phone : "0606060607", email : "supertata@totomail.com", premium : false},
    {id : 3, name : "Yoyo", phone : "0606060608", email : "superyoyo@totomail.com", premium : false}
])
</script>

<template>
    <h1>Les Amis</h1>
    <ul>
        <Friend 
            v-for="ami in lesAmis"
            :key="ami.id"
            :id="ami.id"
            :name="ami.name"
            :phone="ami.phone"
            :email="ami.name"
            :premium="ami.premium" 
        />
    </ul>
</template>