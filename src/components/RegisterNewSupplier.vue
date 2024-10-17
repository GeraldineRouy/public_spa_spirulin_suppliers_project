<script>
import supplier from "@/components/Supplier.vue";

export default {
  name: "Register New Supplier",
  data() {
    return {
      supplier: {
        name: '',
        description: '',
        status: '0',
        latitude: null,
        longitude: null,
        updated_at: ''
      }
    };
  },
  methods: {
    submitForm() {
      fetch('https://suppliers.depembroke.fr/api/suppliers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.supplier)
      })
          .then(response => response.json())
          .then(data => {
            console.log('Fournisseur ajouté avec succès:', data);
            this.resetForm();
          })
          .catch(error => {
            console.error("Je n'arrive pas à ajouter un fournisseur : ", error);
          });
    },
    resetForm() {
      this.supplier = {
        name: '',
        description: '',
        status: '0',
        latitude: null,
        longitude: null,
        updated_at: ''
      };
    }
  }
}

</script>

<template>
  <div>

    <h2>Ajouter un nouveau fournisseur</h2>

    <form @submit.prevent="submitForm">

      <div>
        <label for="name">Nom du fournisseur : </label>
        <input type="text" id="name" v-model="supplier.name" required>
      </div>

      <div>
        <label for="description">Description : </label>
        <textarea id="description" v-model="supplier.description" required></textarea>
      </div>

      <div class="radioDiv">
        <label>Disponibilité du stock</label>
        <div class="radioOption">
          <input type="radio" id="in-stock" name="status" value=1 v-model="supplier.status">
          <label for="in-stock">Stock disponible</label>
        </div>
        <div class="radioOption">
          <input type="radio" id="no-stock" name="status" value=0 v-model="supplier.status">
          <label for="no-stock">Rupture de stock</label>
        </div>
      </div>

      <div>
        <label for="latitude">Latitude :</label>
        <input type="number" step="0.000001" id="latitude" v-model.number="supplier.latitude" required />
      </div>

      <div>
        <label for="longitude">Longitude:</label>
        <input type="number" step="0.000001" id="longitude" v-model.number="supplier.longitude" required />
      </div>

      <div>
        <label for="updated_at">Dernière mise à jour (fictive):</label>
        <input type="date" id="updated_at" v-model="supplier.checkedAt" required />
      </div>

      <button type="submit">Ajouter</button>

    </form>

  </div>

</template>

<style scoped>

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

.radioDiv {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.radioOption {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

input[type="radio"] {
  margin-right: 0.5rem;
}

div label {
  margin-right: 1rem;
}

</style>