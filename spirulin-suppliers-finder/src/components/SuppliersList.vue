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

    <Supplier
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
      />

  </div>

</template>

<style scoped>

</style>