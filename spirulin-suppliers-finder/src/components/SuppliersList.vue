<script>
import Supplier from "@/components/Supplier.vue";
export default {
  name: "SuppliersList",
  components: {Supplier},
  data () {
    return {
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1 ",
          status: true,
          checkedAt: new Date()
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: new Date()
        }
      ]
    }
  }
}
</script>

<template>
  <h2>Liste des fournisseurs</h2>
  <p>Ceci est la liste des fournisseurs.</p>

  <div v-for="supplier in suppliers">

    <h2>{{supplier.name}}</h2>

    <span :class="{'isOK': supplier.status, 'isNotOk': !supplier.status}">
      <strong v-if="supplier.status">Stock OK :-)</strong>
      <strong v-else>Stock KO :-(</strong>
    </span>

    <p>Dernière mise à jour du stock : {{ formatedCheckedAt }}</p>

  </div>

</template>

<style scoped>

.isOK{
  color: green;
  font-weight: bold;
}

.isNotOk{
  color: red;
  font-weight: bold;
}

</style>