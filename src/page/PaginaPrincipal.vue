<template>
  <img
    src="https://cdn-3.expansion.mx/5c/9f/a90131784d8fa9e4dedd6b73af2a/avis-tesla.png"
    alt="no se encontro"
  />
  <div class="dark"></div>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.dark,
img {
  /* cuando queremos que ocupe el 100 porciento de nuestra pantalla medinate la sigla al final vh o vw*/
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  /* position : fixed =este estilo realiza como si estuviera flotando y no sobrepone a ningun elemento como una marca de agua */
  position: fixed;
  /* para garantizar que empieze desde los bordes toca poner top:0px y left:0px*/
  top: 0px;
  left: 0px;
}
.dark {
  background: rgba(0, 0, 0, 0.5);
}
.container {
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>