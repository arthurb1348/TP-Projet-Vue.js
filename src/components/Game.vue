<script setup>
import { ref, computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const player = ref(100);
const badguy = ref(100);

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
    badguy.value = Math.max(0, badguy.value - 7);
    attackGentil();
}

function attackGentil() {
    player.value = Math.max(0, player.value - 19);
}
</script>

<template>
    <section class="jeu">
        <div class="gentil">
            <h2>Gentil</h2>

            <p>Vie : {{ player }} / 100</p>

            <div class="barre-vie">
                <Bar
                    :data="playerLife"
                    :options="chartOptions"
                    role="img"
                    :aria-label="`Vie du joueur : ${player} sur 100`"
                />
            </div>
        </div>
        

        <div class="mechant">
            <h2>Méchant</h2>

            <p>Vie : {{ badguy }} / 100</p>
            <div class="barre-vie">
                <Bar
                    :data="badguyLife"
                    :options="chartOptions"
                    role="img"
                    :aria-label="`Vie du joueur : ${player} sur 100`"
                />
            </div>
        </div>

        <div class="actions">
            <button type="button" @click="attackMechant">
                À l'attaque !!!
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