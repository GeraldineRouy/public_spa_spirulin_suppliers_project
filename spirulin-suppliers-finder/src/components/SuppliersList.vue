<script>
import Supplier from "@/components/Supplier.vue";
export default {
  name: "SuppliersList",
  components: {Supplier},
  data () {
    return {
      name: 'John Doe',
      status: false,
      checkedAt: new Date(),
    }
  }
}
</script>

<template>
  <h2>Liste des fournisseurs</h2>
  <p>Ceci est la liste des fournisseurs.</p>
  <div>
    <h2>{{name}}</h2>
    <p v-if="status">Stock OK :-)</p>
    <p v-else>Stock KO :-(</p>
    <p>Dernière mise à jour du stock : {{ formatedCheckedAt }}</p>
  </div>

</template>

<style scoped>

</style>