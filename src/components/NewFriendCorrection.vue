<template>
  <div class="card w-full max-w-lg bg-info shadow-xl mx-auto my-8 text-info-content">
    <h2>AddFriend.vue</h2>
    <div class="card-body">
      <h2 class="card-title text-2xl mb-4">Ajouter un Nouvel Ami</h2>
      
      <form @submit.prevent="submitData" class="space-y-4">
        
        <div class="form-control">
          <label class="label" for="friend-name">
            <span class="label-text text-info-content">Nom</span>
          </label>
          <input 
            id="friend-name"
            v-model="enteredName" 
            type="text" 
            placeholder="Votre nom" 
            class="input input-bordered input-sm w-full bg-base-100 text-base-content"
            required
          />
        </div>
        
        <div class="form-control">
          <label class="label" for="friend-phone">
            <span class="label-text text-info-content">Téléphone</span>
          </label>
          <input 
            id="friend-phone"
            v-model="enteredPhone" 
            type="tel" 
            placeholder="Votre Tél (ex: 06 00 00 00 00)" 
            class="input input-bordered input-sm w-full bg-base-100 text-base-content"
            required
          />
        </div>
        
        <div class="form-control">
          <label class="label" for="friend-email">
            <span class="label-text text-info-content">Email</span>
          </label>
          <input 
            id="friend-email"
            v-model="enteredMail" 
            type="email" 
            placeholder="Votre EMAIL" 
            class="input input-bordered input-sm w-full bg-base-100 text-base-content"
            required
          />
        </div>
        
        <div class="card-actions justify-end pt-4">
          <button type="submit" class="btn btn-primary btn-sm w-full">
            Ajouter Ami
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
// A optimiser avec un validator pour checker si on a pas oublié de mettre les 3 champs dans l'event add-friend
// Penser a déclarer l'event en mode Objet pour du validator sur les params de l'event
const emit = defineEmits(['add-friend']);

const enteredName = ref('');
const enteredPhone = ref('');
const enteredMail = ref('');

const submitData = () => {
  // console.log({ enteredName, enteredPhone, enteredMail });
  // Émettre l'événement avec les valeurs entrées
  emit('add-friend', enteredName.value, enteredPhone.value, enteredMail.value);
}
</script>
