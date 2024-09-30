<script setup>
import Home from "@/components/Home.vue";

</script>

<template>

  <main>
    <Home />
        <nav>
          <router-link :to= '{ name : "SuppliersList" }'>Afficher la liste des fournisseurs</router-link>
          <router-link to='/map'>Afficher la carte</router-link>
<!--          <router-link :to="{ name : 'Supplier' }">Afficher un fournisseur</router-link>-->
        </nav>
    <router-view></router-view>
  </main>

</template>

<style scoped>

</style>
