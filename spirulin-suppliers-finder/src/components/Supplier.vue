<script>
export default {
  name: "Supplier",
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
  },
  props: {
    name: String,
    status: Boolean,
    checkedAt: Date
  }
}

</script>

<template>


</template>

<style scoped>
</style>