<script setup>
    const unLivre = "Les mémoires de Steven Seagal";
    const isOnline = false;
    const unNombre = 8888;

    const unTableau = ["du texte", 99];

    const unObjet = {
        name: "COOL",
        tel: "060503030",
    };
    const duHtml = "<h1>Du HTML</h1>";

    function fonctionTest() {
      return "Hello World";
    }
</script>

<template>
  <section class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-10">
    <h1 class="text-2xl font-bold">Exercice 1 : interpolation de texte</h1>

    <table class="mt-6">
      <thead class="bg-gray-200">
        <tr class="text-left">
          <th scope="col" class="p-4">Variable ou expression</th>
          <th scope="col" class="p-4">Valeur</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-300">
        <tr class="bg-gray-100">
          <td class="p-4">unLivre</td>
          <td class="p-4">{{ unLivre }}</td>
        </tr>

        <tr>
          <td class="p-4">isOnline</td>
          <td class="p-4">{{ isOnline }}</td>
        </tr>

        <tr>
          <td class="p-4">unNombre</td>
          <td class="p-4">{{ unNombre }}</td>
        </tr>

        <tr>
          <td class="p-4">unTableau</td>
          <td class="p-4">{{ unTableau }}</td>
        </tr>

        <tr>
          <td class="p-4">unTableau[0]</td>
          <td class="p-4">{{ unTableau[0] }}</td>
        </tr>

        <tr>
          <td class="p-4">unObjet</td>
          <td class="p-4">{{ unObjet }}</td>
        </tr>

        <tr>
          <td class="p-4">unObjet.name</td>
          <td class="p-4">{{ unObjet.name }}</td>
        </tr>

        <tr>
          <td class="p-4">unObjet["name"]</td>
          <td class="p-4">{{ unObjet["name"] }}</td>
        </tr>

        <tr>
          <td class="p-4">unObjet.tel</td>
          <td class="p-4">{{ unObjet.tel }}</td>
        </tr>

        <tr>
          <td class="p-4">fonctionTest()</td>
          <td class="p-4">{{ fonctionTest() }}</td>
        </tr>

        <tr>
          <td class="p-4">Condition ternaire</td>
          <td class="p-4">{{ isOnline ? "Connecté" : "Déconnecté" }}</td>
        </tr>

        <tr>
          <td class="p-4">Chaîne contenant du HTML</td>
          <td class="p-4" v-html="duHtml"></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
