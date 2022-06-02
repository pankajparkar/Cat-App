<template>
    <a-layout-header class="navbar">
        <span class="app-name">
            <router-link to="/">The Cat App</router-link>
        </span>
        <div id="nav">
            <router-link to="/">Breeds</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </a-layout-header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
    display: flex;
    padding: 0 20px;
    .app-name {
        font-size: 20px;
        font-weight: bold;
    }
    #nav {
        display: flex;
        margin-left: 20px;
        a {
            font-weight: bold;
            color: #2c3e50;
            padding: 0 10px;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}

</style>
