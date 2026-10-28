<template>

    <div class="flex flex-col md:flex-row gap-4">
        <h1 class="text-2xl text-primary">PArent : ExerciceEmit.vue</h1>
        <div class="">
            <!-- Formulaire on emet les 3 champs, name, phone, mail -->
            <NewFriend @add-friend="parentAddNewFriend"></NewFriend>
            <!-- Liste des amis avec le composant OneFriendEmit -->
            <OneFriendEmit 
            v-for="ami in lesAmis" 
            :unAmiId="ami.id" 
            :unAmiName="ami.name" 
            :unAmiPhone="ami.phone"
            :unAmiMail="ami.email" 
            :unAmiPremium="ami.premium"
            v-on:mon-event-premium-update="parentUpdatePremium"
            v-on:delete-friend="parentDeleteFriend"
            ></OneFriendEmit>
        </div>

        <div class="md:w-1/2 bg-green-200 p-4 rounded-md shadow-md">
            <!-- Ici on va afficher le tableau lesAmis en direct -->
            <h3 class="text-lg font-bold mb-2">Données du tableau lesAmis dans le parent Exercice Emit :</h3>
            <ul>
                <li v-for="ami in lesAmis" :key="ami.id">{{ ami }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import OneFriendEmit from '../../components/OneFriendEmitCorrection.vue';
import NewFriend from '../../components/NewFriendCorrection.vue';

// TODO: Optimiser avec des UUID pour les id des amis, pour éviter les collisions d'id
const lesAmis = ref([
    {
        id: '001',
        name: 'Janine De La Vega',
        phone: '01234 5678 991',
        email: 'janine@delavega.com',
        premium: false
    },
    {
        id: '002',
        name: 'Eric Reptile',
        phone: '01234 5678 991',
        email: 'eric@reptile.com',
        premium: true
    },
    {
        id: '003',
        name: "Jean Kreps",
        phone: '+338765477',
        email: 'jean@kreps.com',
        premium: true
    },
    {
        id: '004',
        name: "Goulive",
        phone: '+338765477',
        email: 'goulive@seagal.com',
        premium: true
    },
    {
        id: '005',
        name: "JAROD",
        phone: '+338765477',
        email: 'jarod@seagal.com',
        premium: true
    },
    {
        id: '006',
        name: "GussDX",
        phone: '+338765477',
        email: 'gussdx@seagal.com',
        premium: true
    }
]);

const parentUpdatePremium=(id)=>{
    console.log('id : ', id);

    // On va mettre à jour le premium de l'utilisateur avec l'id passé en paramètre
    // On va utiliser la méthode find pour trouver l'utilisateur avec l'id passé en paramètre
    const ami = lesAmis.value.find(ami => ami.id === id);
    // On va mettre à jour la props premium de l'utilisateur
    ami.premium = !ami.premium;
}

const parentDeleteFriend = (unId) => {
    console.log('unId', unId);
	lesAmis.value = lesAmis.value.filter(unAmi => unAmi.id!== unId);
    // splice permet de supprimer un élément dans un tableau à l'index passé en paramètre
    lesAmis.value.splice(ami, 1);
    //Slice permet de créer un nouveau tableau en retirant les éléments à partir de l'index passé en paramètre
    // lesAmis.value = lesAmis.value.slice(ami, 1);
}

// A optimiser avec UUID pour les id des amis, pour éviter les collisions d'id
const parentAddNewFriend = (name, phone, email) => {
    console.log('On arrive dans la fonction addNewFriend');
    console.log('name', name);
    console.log('phone', phone);
    console.log('email', email);
	const newFriend = {
        id: Math.random().toString(),
        name,
        phone,
        email,
        premium: false
    };

	lesAmis.value.push(newFriend);
}
// const addNewFriend = (name: string, phone: string, email: string) => {
//     console.log('On arrive dans la fonction addNewFriend');
//     console.log('name', name);
//     console.log('phone', phone);
//     console.log('email', email);
// 	const newFriend:any = {
//         id: Math.random().toString(),
//         name,
//         phone,
//         email,
//         premium: false
//     };

// 	lesAmis.value.push(newFriend);
// }




// onMounted(() => {
// })


</script>
