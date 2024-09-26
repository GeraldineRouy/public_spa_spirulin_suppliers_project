<script>
export default {
  name: "Supplier",
  data () {
    return {
      name: 'John Doe',
      status: false,
      checkedAt: new Date(),
    }
  },
  computed: {
    formatedCheckedAt() {
      return this.checkedAt.toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
  }
}

</script>

<template>
  <div>
    <h2>{{name}}</h2>
    <p v-if="status">Stock OK :-)</p>
    <p v-else>Stock KO :-(</p>
    <p>Dernière mise à jour du stock : {{ formatedCheckedAt }}</p>
  </div>

</template>

<style scoped>
</style>