<template>
  <div class="container">
    <CRUDVistaEmpleado @visualizar="verCliente" />
  </div>
</template>

<script>
import CRUDVistaEmpleado from "@/components/empleados/CRUDVistaEmpleado.vue";

export default {
  components: {
    CRUDVistaEmpleado,
  },
  data() {
    return {
      button: {
        type: Object,
        required: false,
      },
    };
  },
  methods: {
    verCliente(valor) {
      const valor1 = valor.valor1;
      this.button = valor1;
      console.log("verCliente")
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