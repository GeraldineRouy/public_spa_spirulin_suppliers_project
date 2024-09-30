<script>
import Supplier from "@/components/Supplier.vue";
import axios from "axios";

export default {
  name: "SuppliersList",
  components: {Supplier},
  data () {
    return {
      suppliers: [],
      loading: false,
      error: null,
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
    }
  }
}
</script>

<template>
  <h2>Liste des fournisseurs</h2>
  <p>Ceci est la liste des fournisseurs.</p>

  <p v-if="loading">Veuillez patienter, je recherche la liste des fournisseurs...</p>

  <p v-if="error" style="color:red">{{ error }}</p>

  <div v-if="!loading && !error" v-for="supplier in suppliers">

    <Supplier
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
      />

  </div>

</template>

<style scoped>

</style>