<template>
  <div class="container">
    <h1>Retirar sin reserva</h1>
    <Buscar v-if="opcion1" />
    <button v-if="opcion1" @click="administrarComponent">Siguiente</button>
    <Reservar v-if="opcion2" />
    <button v-if="opcion2" @click="administrarComponent2">Siguiente</button>
    <Retirar v-if="opcion3" />
  </div>
</template>

<script>
import Buscar from "@/components/clientes/Buscar.vue";
import Reservar from "@/components/clientes/Reservar.vue";
import Retirar from "../components/empleados/Retirar.vue";

export default {
  components: {
    Reservar,
    Buscar,
    Retirar,
  },
  data() {
    return {
      opcion1: true,
      opcion2: false,
      opcion3: false,
    };
  },

  methods: {
    administrarComponent() {
      this.opcion1 = false;
      this.opcion2 = true;
    },

    administrarComponent2() {
      this.opcion2 = false;
      this.opcion3 = true;
    },
    administrarComponent2volver() {
      this.opcion2 = false;
      this.opcion1 = true;
    },
    administrarComponent3() {
      this.opcion3 = false;
      this.opcion2 = true;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>