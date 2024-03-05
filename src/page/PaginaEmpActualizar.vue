<template>
  <div class="container">
    <div v-if="get2">
      <ActualizarClienteEmp :txtButon="buton" />
    </div>
    <div v-if="get0">
      <CRUDEmpleado @creep="actualizarCRUD" @visualizar="verCliente" />
    </div>
    <div v-if="get1">
      <VisualizarClienteEmp :data="data" />
    </div>
  </div>
</template>

<script>
import ActualizarClienteEmp from "../components/empleados/ActualizarClienteEmp.vue";
import CRUDEmpleado from "@/components/empleados/CRUDEmpleado.vue";
import VisualizarClienteEmp from "@/components/empleados/VisualizarClienteEmp.vue";

export default {
  components: {
    ActualizarClienteEmp,
    CRUDEmpleado,
    VisualizarClienteEmp,
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
    verCliente(valor) {
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