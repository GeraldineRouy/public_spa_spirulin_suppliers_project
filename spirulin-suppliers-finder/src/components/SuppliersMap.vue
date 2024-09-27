<script>
import Map from "@/components/Map.vue";
// import "leaflet/dist/leaflet.css";
// import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "SuppliersMap",
  components: {
    Map
  }
}
</script>

<template>
<h2>Carte des fournisseurs</h2>
  <p>Ici, la carte des fournisseurs.</p>

  <Map/>

</template>

<style scoped>


</style>