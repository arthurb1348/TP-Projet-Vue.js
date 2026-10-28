<script setup>
    import FirebaseAddArticle from "../components/FirebaseAddArticle.vue";
    import FirebaseListAdd from "../components/FirebaseListArticles.vue";
</script>

<template>
    <section class="space-y-6">
        <header>
            <h1 class="text-3xl font-bold">Mes articles</h1>
            <p class="mt-2 text-base-content/70">
                Ajoutez et consultez vos articles.
            </p>
        </header>

        <div class="grid items-start gap-6 lg:grid-cols-3">
            <div class="min-w-0">
                <FirebaseAddArticle />
            </div>

            <div class="min-w-0 lg:col-span-2">
                <FirebaseListAdd />
            </div>
        </div>
    </section>
</template>