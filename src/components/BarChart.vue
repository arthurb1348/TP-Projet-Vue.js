<script setup>
    import { ref, onMounted } from "vue";
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

    const loaded = ref(false);
    const erreur = ref("");

    const chartData = ref({
        labels: [],
        datasets: [],
    });

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    async function recupMeteo() {
        try {
            const reponse = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=43.61&longitude=3.88&daily=temperature_2m_max&forecast_days=7&timezone=Europe%2FParis"
            );

            if (!reponse.ok) {
                throw new Error("Impossible de récupérer les données météo.");
            }

            const donnees = await reponse.json();
            console.log(donnees.daily);

            chartData.value = {
                labels: donnees.daily.time,
                datasets: [{
                    label: "Température maximale prévue (°C)",
                    data: donnees.daily.temperature_2m_max,
                    backgroundColor: "#166534",
                }]
            };

            loaded.value = true;
        } catch (e) {
            console.error(e);
            erreur.value = "Impossible de charger les données météo.";
        }
    }

    onMounted(recupMeteo);
</script>

<template>
    <section class="container px-4 py-8">
        <h2 class="text-2xl font-bold">Prévisions météo à Montpellier</h2>

        <p v-if="erreur" role="alert" class="text-red-500">
            {{ erreur }}
        </p>

        <p v-else-if="!loaded" class="text-gray-500">
            Chargement du graphique…
        </p>

        <div v-else class="graphique mb-4">
            <Bar :data="chartData" :options="chartOptions" />
        </div>

        <small class="text-sm text-gray-500">
            Données : <a href="https://open-meteo.com/" class="text-blue-500 hover:underline">Open-Meteo</a>
        </small>
    </section>
</template>

<style scoped>
    .container {
        max-width: 900px;
        margin: 24px auto;
    }

    .graphique {
        position: relative;
        width: 100%;
        height: 350px;
    }
</style>