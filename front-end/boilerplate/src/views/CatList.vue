<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
        <th>Lifespan</th>
        <th>Origin</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="breed in breeds" v-bind:key="breed.id">
        <td>
          <router-link :to="{name: 'CatDetails', params: { id: breed.id }}">Edit</router-link> |
        </td>
        <td>{{ breed.id }}</td>
        <td>{{ breed.name }}</td>
        <td>{{ breed.image && breed.image.url }}</td>
        <td>{{ breed.life_span }}</td>
        <td>{{ breed.origin }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import catServices from '../services/cats.services';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      breeds: [],
    };
  },
  methods: {
    async fetchData() {
      const breeds = await catServices.GetAllBreeds();
      this.breeds = breeds.data;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
