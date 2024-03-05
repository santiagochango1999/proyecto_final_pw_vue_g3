<template>
  <div class="container">
    <div v-if="get2">
      <ActualizarVehiculo :txtButon="buton" />
    </div>
    <div v-if="get0">
      <CRUDVehiculo @creep="actualizarCRUD" @visualizar="verVehiculo" />
    </div>
    <div v-if="get1">
      <VisualizarVehiculo :data="data" />
    </div>
  </div>
</template>

<script>
import CRUDVehiculo from "@/components/empleados/CRUDVehiculo.vue";
import ActualizarVehiculo from "../components/empleados/ActualizarVehiculo.vue";
import VisualizarVehiculo from "@/components/empleados/VisualizarVehiculo.vue";

export default {
  components: {
    ActualizarVehiculo,
    CRUDVehiculo,
    VisualizarVehiculo,
  },
  data() {
    return {
      buton: {
        type: Object,
        required: false,
      },
      data: {
        type: Object,
        required: false,
      },
      get1: false,
      get0: true,
      get2: false,
    };
  },
  methods: {
    actualizarCRUD(valores) {
      const valor1 = valores.valor1;
      const valor2 = valores.valor2;
      this.get2 = valor2;
      this.get1 = false;
      this.get0 = false;
      this.buton = valor1;
    },
    verVehiculo(valor) {
      const valor1 = valor.valor1;
      const valor2 = valor.valor2;
      this.get1 = valor2;
      this.get2 = false;
      this.get0 = false;
      this.data = valor1;
    },
  },
};
</script>

<style scoped>
.container {
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>
