<template>
  <a-layout>
    <Navbar />
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AppVue',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
:root {
  --text-color: #2c3e50;
  --white: #ffffff;
  --bg-color: #cccccc;
  --highlight-color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}
</style>
