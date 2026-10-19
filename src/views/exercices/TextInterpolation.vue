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
  <section>
    <h1>Exercice 1: interpolation de texte</h1>

    <p>Livre : {{ unLivre }}</p>
    <p>En ligne : {{ isOnline }}</p>
    <p>Nombre : {{ unNombre }}</p>
    <p>Le double du nombre : {{ unNombre * 2 }}</p>

    <p>Tableau complet : {{ unTableau }}</p>
    <p>Premier élément : {{ unTableau[0] }}</p>

    <p>Objet complet : {{ unObjet }}</p>
    <p>Nom : {{ unObjet.name }}</p>
    <p>Nom avec les crochets : {{ unObjet["name"] }}</p>
    <p>Téléphone : {{ unObjet.tel }}</p>
    <p>Résultat de la fonction : {{ fonctionTest() }}</p>
    <p>Statut : {{ isOnline ? "Coonecté" : "Décoonecté" }}</p>
    <p>Contenu HTML : {{ duHtml }}</p>
  </section>
  <section>
    <h1>Exercice 1 bis: interpolation de texte</h1>

    <table>
      <thead>
        <tr>
          <th scope="col">Variable ou expression</th>
          <th scope="col">Valeur</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>unLivre</td>
          <td>{{ unLivre }}</td>
        </tr>

        <tr>
          <td>isOnline</td>
          <td>{{ isOnline }}</td>
        </tr>

        <tr>
          <td>unNombre</td>
          <td>{{ unNombre }}</td>
        </tr>

        <tr>
          <td>unTableau</td>
          <td>{{ unTableau }}</td>
        </tr>

        <tr>
          <td>unTableau[0]</td>
          <td>{{ unTableau[0] }}</td>
        </tr>

        <tr>
          <td>unObjet</td>
          <td>{{ unObjet }}</td>
        </tr>

        <tr>
          <td>unObjet.name</td>
          <td>{{ unObjet.name }}</td>
        </tr>

        <tr>
          <td>unObjet["name"]</td>
          <td>{{ unObjet["name"] }}</td>
        </tr>

        <tr>
          <td>unObjet.tel</td>
          <td>{{ unObjet.tel }}</td>
        </tr>

        <tr>
          <td>fonctionTest()</td>
          <td>{{ fonctionTest() }}</td>
        </tr>

        <tr>
          <td>Condition ternaire</td>
          <td>{{ isOnline ? "Connecté" : "Déconnecté" }}</td>
        </tr>

        <tr>
          <td>Chaîne contenant du HTML</td>
          <td>{{ duHtml }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px 16px;
  border: 1px solid #aaa;
  text-align: left;
}

th {
  background-color: #e4ece8;
  color: #222;
}
</style>