<script setup>
import { ref, computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const player = ref(100);
const badguy = ref(100);
const currentround = ref(0);
const lastSpecial = ref(0);

const playerLife = computed(() => {
    return {
        labels: ['Gentil'],
        datasets: [{
            data: [player.value],
            backgroundColor: '#15803d',
            borderWidth: 0,
            barPercentage: 1,
            categoryPercentage: 1
        }]
    }
});

const badguyLife = computed(() => {
    return {
        labels: ['Méchant'],
        datasets: [{
            data: [badguy.value],
            backgroundColor: '#15803d',
            borderWidth: 0,
            barPercentage: 1,
            categoryPercentage: 1
        }]
    }
});

const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    },

    scales: {
        x: {
        min: 0,
        max: 100,
        display: false
        },
        y: {
        display: false
        }
    }
};

function attackMechant() {
    badguy.value = Math.max(0, badguy.value - 12);
    attackGentil();
    currentround.value++;
}

function specialAttack() {
    badguy.value = Math.max(0, badguy.value - 24);
    lastSpecial.value = currentround.value;
    attackGentil();
    currentround.value++;
}

function soin() {
    player.value = Math.min(100, player.value + 33);
    attackGentil();
    currentround.value++;
}

function attackGentil() {
    player.value = Math.max(0, player.value - 22);
}
</script>

<template>
    <section class="jeu flex flex-col items-center justify-center">
        <div class="gentil flex flex-col items-center justify-center">
            <h2 class="text-xl font-bold">Gentil</h2>

            <p class="text-lg">Vie : {{ player }} / 100</p>

            <div class="barre-vie w-full h-8 bg-gray-300 rounded-lg overflow-hidden">
                <Bar
                    :data="playerLife"
                    :options="chartOptions"
                    role="img"
                    :aria-label="`Vie du joueur : ${player} sur 100`"
                />
            </div>
        </div>
        

        <div class="mechant flex flex-col items-center justify-center mt-4">
            <h2 class="text-xl font-bold">Méchant</h2>

            <p class="text-lg">Vie : {{ badguy }} / 100</p>
            <div class="barre-vie w-full h-8 bg-gray-300 rounded-lg overflow-hidden">
                <Bar
                    :data="badguyLife"
                    :options="chartOptions"
                    role="img"
                    :aria-label="`Vie du joueur : ${player} sur 100`"
                />
            </div>
        </div>

        <div class="actions mt-4">
            <button type="button" @click="attackMechant" class="btn btn-primary">
                À l'attaque !!!
            </button>
        </div>

        <div class="actions mt-4">
            <button 
                type="button" 
                @click="specialAttack"
                v-if="lastSpecial === 0 || currentround - lastSpecial > 3"
                class="btn btn-warning"
            >
                Chabite !!!
            </button>
            <button 
                type="button" 
                @click="specialAttack"
                disabled
                v-else
                class="btn btn-warning"
            >
                Pas encore...
            </button>
            <button 
                type="button" 
                @click="soin"
                class="btn btn-success"
            >
                Se soigner
            </button>
        </div>
    </section>
</template>

<style scoped>
.jeu {
    max-width: 500px;
    margin: 24px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.gentil, .mechant {
    padding: 10px 50px;
}

.barre-vie {
    position: relative;
    height: 32px;
    background-color: #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
}

.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;
}
</style>