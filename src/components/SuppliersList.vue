<script>
import Supplier from "@/components/Supplier.vue";
import axios from "axios";
import supplier from "@/components/Supplier.vue";

export default {
  name: "SuppliersList",
  components: {Supplier},
  data () {
    return {
      suppliers: [],
      filteredSuppliers : [],
      loading: false,
      error: null,
      filterStatus: "all"
    }
  },
  created() {
    //juste après la création du composant, j'appelle la fonction qui récupère la liste de fournisseurs
    this.fetchSuppliers();
  },
  methods: {
    async fetchSuppliers () {
      // on démarre le chargement
      this.loading = true;
      this.error = null;

      try {
        // appel avec Axios sur l'API
        const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers');
        // remplir le tableau suppliers avec la réponse de l'API
        this.suppliers = response.data.data;
        console.log(this.suppliers);
      } catch (error) {
        this.error = "Désolé, je n'arrive pas à récupérer la liste des fournisseurs :-(";
        console.log(error);
      } finally {
        // arrête le chargement en cas d'échec ou de réussite
        this.loading = false;
      }
    },
    applyFilter() {
      if (this.filterStatus === "all") {
        // J'affiche toute la liste
        this.filteredSuppliers = this.suppliers;
      } else if (this.filterStatus === "ok") {
        // J'affiche les fournisseurs avec stock OK
        this.filteredSuppliers = this.suppliers.filter(supplier => supplier.status === 1);
      } else if (this.filterStatus === "ko") {
        // J'affiche les fournisseurs avec stock KO
        this.filteredSuppliers = this.suppliers.filter(supplier => supplier.status === 0);
      }
    },
    setFilter(status) {
      this.filterStatus = status;
      console.log("bouton cliqué : ", this.filterStatus);
      this.applyFilter();
    }
  }
}
</script>

<template>
  <h2>Liste des fournisseurs</h2>
  <p>Ceci est la liste des fournisseurs.</p>

  <div>

    <button @click="setFilter('all')">Tous</button>
    <button @click="setFilter('ok')">Stock dispo</button>
    <button @click="setFilter('ko')">En rupture</button>

  </div>

  <p v-if="loading">Veuillez patienter, je recherche la liste des fournisseurs...</p>

  <p v-if="error" style="color:red">{{ error }}</p>

  <div v-if="!loading && !error" v-for="supplier in filteredSuppliers">

    <Supplier
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
      />

  </div>

</template>

<style scoped>

</style>