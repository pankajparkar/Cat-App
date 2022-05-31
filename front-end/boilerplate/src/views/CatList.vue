<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloI18n.vue';
import catServices from '../services/cats.services';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    async fetchData() {
      // Will be implemented next
      const breeds = await catServices.GetAllBreeds();
      console.log(breeds);
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
