<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null,
      suppliers: [
        {
          id: 1,
          latitude: 10,
          longitude: 10
        },
        {
          id: 2,
          latitude: 11,
          longitude: 9.6
        }
      ]
    }
  }
};
</script>

<template>
  <div class="map">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <l-marker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"></l-marker>
    </LMap>
  </div>
</template>

<style scoped>
  .map{
    height: 600px;
    width: 800px;
  }
</style>