<script>
import Home from "@/components/Home.vue";

export default {
  components: {Home},
  methods: {
    onSuppliersListClick() {
      // alert('Vous avez cliqué sur le bouton pour afficher la liste des fournisseurs.');
      this.$router.push({ name: 'SuppliersList' });
    },
    onMapClick() {
      // alert('Vous avez cliqué sur le bouton pour afficher la carte.')
      this.$router.push({ name: 'Map' });
    }
  }
}

</script>

<template>

  <main>

        <nav>
          <div>
            <router-link to="/">Retour à l'accueil</router-link>
            <h2>Consulter les fournisseurs</h2>
            <router-link @click="onSuppliersListClick" :to= '{ name : "SuppliersList" }'>Afficher la liste des fournisseurs</router-link>
            <router-link @click="onMapClick" to='/map'>Afficher la carte</router-link>
          </div>
          <div>
            <h2>Modifier la liste des fournisseurs</h2>
            <router-link :to='{ name : "Register New Supplier" }'>Enregistrer un nouveau fournisseur</router-link>
            <router-link to="/editSupplier">Modifier les informations d'un fournisseur</router-link>
            <router-link to="">Effacer un fournisseur</router-link>
          </div>
        </nav>




    <router-view></router-view>

    </main>


</template>

<style scoped>

</style>
