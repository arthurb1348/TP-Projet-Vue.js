<script setup>
import { ref, computed } from "vue";
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

// État du combat.
const player = ref(100);
const badguy = ref(100);
const currentround = ref(0);

// null signifie que la spéciale n'a pas encore été utilisée.
const lastSpecial = ref(null);

// Le combat se termine dès qu'un combattant n'a plus de vie.
const gameOver = computed(() => {
    return player.value === 0 || badguy.value === 0;
});

// Spéciale disponible au départ, puis une fois tous les trois tours.
const canSpecial = computed(() => {
    return (
        lastSpecial.value === null ||
        currentround.value - lastSpecial.value >= 3
    );
});

// Données réactives des barres de vie.
const playerLife = computed(() => ({
    labels: ["Gentil"],
    datasets: [
        {
            data: [player.value],
            backgroundColor: "#15803d",
            borderWidth: 0,
            barPercentage: 1,
            categoryPercentage: 1,
        },
    ],
}));

const badguyLife = computed(() => ({
    labels: ["Méchant"],
    datasets: [
        {
            data: [badguy.value],
            backgroundColor: "#b91c1c",
            borderWidth: 0,
            barPercentage: 1,
            categoryPercentage: 1,
        },
    ],
}));

const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
    },

    scales: {
        x: {
            min: 0,
            max: 100,
            display: false,
        },
        y: {
            display: false,
        },
    },
};

// Termine le tour après une action du joueur.
function endTurn() {
    currentround.value++;

    // Un adversaire vaincu ne peut plus riposter.
    if (!gameOver.value) {
        attackGentil();
    }
}

function attackMechant() {
    // Empêche toute action après la fin du combat.
    if (gameOver.value) return;

    badguy.value = Math.max(0, badguy.value - 12);
    endTurn();
}

function specialAttack() {
    // Vérifie aussi la disponibilité dans la fonction.
    if (gameOver.value || !canSpecial.value) return;

    lastSpecial.value = currentround.value;
    badguy.value = Math.max(0, badguy.value - 24);

    endTurn();
}

function soin() {
    if (gameOver.value) return;

    // La vie ne peut pas dépasser 100.
    player.value = Math.min(100, player.value + 33);
    endTurn();
}

// Riposte du méchant.
function attackGentil() {
    player.value = Math.max(0, player.value - 22);
}

function restartCombat() {
    player.value = 100;
    badguy.value = 100;
    currentround.value = 0;
    lastSpecial.value = null;
}
</script>

<template>
    <section class="mx-auto w-full max-w-3xl space-y-6">
        <header class="space-y-2 text-center">
            <span class="badge badge-primary badge-outline">
                Jeu au tour par tour
            </span>

            <h1 class="text-3xl font-bold">
                Duel des Guignols
            </h1>

            <p class="text-sm text-base-content/70">
                Tours joués : {{ currentround }}
            </p>
        </header>

        <!-- Cartes empilées sur mobile, côte à côte dès sm. -->
        <div class="grid gap-4 sm:grid-cols-2">
            <article
                class="card min-w-0 border border-base-300 bg-base-100 shadow-sm"
            >
                <div class="card-body items-center gap-4 text-center">
                    <div class="avatar">
                        <div
                            class="h-28 w-28 rounded-full ring-2 ring-primary ring-offset-4 ring-offset-base-100"
                        >
                            <img
                                src="/images/sylvestre.jpg"
                                alt="Marionnette du commandant Sylvestre"
                                class="h-full w-full object-cover object-top"
                                width="112"
                                height="112"
                            />
                        </div>
                    </div>

                    <h2 class="card-title">
                        Commandant Sylvestre
                    </h2>

                    <span class="badge badge-primary badge-outline">
                        Gentil
                    </span>

                    <p class="font-semibold">
                        Vie : {{ player }} / 100
                    </p>

                    <div
                        class="relative h-8 w-full min-w-0 overflow-hidden rounded-full bg-base-300"
                    >
                        <Bar
                            :data="playerLife"
                            :options="chartOptions"
                            role="img"
                            :aria-label="`Vie de Sylvestre : ${player} sur 100`"
                        />
                    </div>
                </div>
            </article>

            <article
                class="card min-w-0 border border-base-300 bg-base-100 shadow-sm"
            >
                <div class="card-body items-center gap-4 text-center">
                    <div class="avatar">
                        <div
                            class="h-28 w-28 rounded-full ring-2 ring-error ring-offset-4 ring-offset-base-100"
                        >
                            <img
                                src="/images/ben-laden.jpg"
                                alt="Marionnette de Ben Laden dans Les Guignols"
                                class="h-full w-full object-cover object-top"
                                width="112"
                                height="112"
                            />
                        </div>
                    </div>

                    <h2 class="card-title">
                        Ben Laden
                    </h2>

                    <span class="badge badge-error badge-outline">
                        Méchant
                    </span>

                    <p class="font-semibold">
                        Vie : {{ badguy }} / 100
                    </p>

                    <div
                        class="relative h-8 w-full min-w-0 overflow-hidden rounded-full bg-base-300"
                    >
                        <Bar
                            :data="badguyLife"
                            :options="chartOptions"
                            role="img"
                            :aria-label="`Vie du méchant : ${badguy} sur 100`"
                        />
                    </div>
                </div>
            </article>
        </div>

        <!-- Actions visibles pendant le combat. -->
        <template v-if="!gameOver">
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                    type="button"
                    class="btn btn-primary h-auto min-h-12 w-full whitespace-normal py-3"
                    @click="attackMechant"
                >
                    À l’attaque !!!
                </button>

                <button
                    type="button"
                    class="btn btn-warning h-auto min-h-12 w-full whitespace-normal py-3"
                    :disabled="!canSpecial"
                    @click="specialAttack"
                >
                    {{ canSpecial ? "Chabite !!!" : "Pas encore…" }}
                </button>

                <button
                    type="button"
                    class="btn btn-success h-auto min-h-12 w-full whitespace-normal py-3"
                    @click="soin"
                >
                    Se soigner
                </button>
            </div>

            <p class="text-center text-sm text-base-content/70">
                La spéciale est disponible une fois tous les trois tours.
            </p>
        </template>

        <!-- Résultat affiché à la place des actions. -->
        <article
            v-else
            role="status"
            class="card border bg-base-100 text-center shadow-sm"
            :class="badguy === 0 ? 'border-success' : 'border-error'"
        >
            <div class="card-body items-center gap-4">
                <h2
                    class="text-3xl font-bold"
                    :class="badguy === 0 ? 'text-success' : 'text-error'"
                >
                    {{ badguy === 0 ? "Victoire !" : "Défaite…" }}
                </h2>

                <p>
                    {{ badguy === 0 ? "Démocratie pour tout le monde !" : "BOOOOOMMM!!!" }}
                </p>

                <button
                    type="button"
                    class="btn btn-primary"
                    @click="restartCombat"
                >
                    Relancer le combat
                </button>
            </div>
        </article>
    </section>
</template>