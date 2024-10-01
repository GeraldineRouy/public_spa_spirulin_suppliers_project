<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      suppliers: [],
      loading: false,
      error: null,
      zoom: 5,
      center: [48.8566, 2.3522],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }
  },
  created() {
    this.fetchSuppliers();
    this.getUserLocation();
  },
  methods: {
    async fetchSuppliers() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers');
        this.suppliers = response.data.data;
        console.log(this.suppliers);
      } catch (error) {
        this.error = "Désolé, je n'arrive pas à récupérer les coordonnées des fournisseurs :-(";
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
               const { latitude, longitude } = position.coords;
               this.center = [latitude, longitude]
              console.log("coordonnées de l'utilisateur récupérées : ", this.center);
            },
            error => {
              console.log("Erreur je n'arrive pas à récupérer la géolocalisation : ", error);
            }
        );
      } else {
        console.log("Géolocalisation pas supportée par ce navigateur.")
      }
    }
  }
};
</script>

<template>
  <div class="map">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <l-marker v-if="!loading && !error" v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"></l-marker>
    </LMap>
    <p v-if="loading">Veuillez patienter, je charge les données...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
  .map{
    height: 600px;
    width: 800px;
  }
</style>