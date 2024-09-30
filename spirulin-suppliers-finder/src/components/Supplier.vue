<script>
import {format} from "timeago.js";
export default {
  name: "Supplier",
  computed: {
    formatedCheckedAt() {
      return format(this.checkedAt);
    }
  },
  props: {
    name: String,
    status: Boolean,
    checkedAt: String
  }
}

</script>

<template>
  <div class="supplierCard">
    <h3>{{ name }}</h3>
    <p>Status:
      <span :class="{'isOK': status, 'isNotOk': !status}">{{ status ? 'Stock OK :-) ' : 'Stock KO :-( ' }}</span>
    </p>
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

.supplierCard{
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: #f9f9f9;
  transition: transform 0.2s ease-in-out;
}
.supplierCard:hover{
  transform: translateY(-5px);
}

</style>