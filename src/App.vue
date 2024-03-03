<template>
  <paginaPrincipal />
  <router-view />
</template>

<script>
import paginaPrincipal from "./page/PaginaPrincipal.vue";
export default {
  name: "App",
  components: {
    paginaPrincipal,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
