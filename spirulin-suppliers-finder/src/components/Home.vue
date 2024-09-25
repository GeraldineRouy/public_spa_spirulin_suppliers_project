<script>
export default {
  name: "Home",
  methods: {
    onSuppliersListClick() {
      alert('Vous avez cliqué sur le bouton pour afficher la liste des fournisseurs.');
    },
    onMapClick() {
      alert('Vous avez cliqué sur le bouton pour afficher la carte.')
    }
  }
}

</script>

<template>
  <div>
    <h1>Accueil</h1>

    <button @click="onSuppliersListClick">Voir la liste des fournisseurs</button>

    <button @click="onMapClick">Voir la carte</button>

  </div>

</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>