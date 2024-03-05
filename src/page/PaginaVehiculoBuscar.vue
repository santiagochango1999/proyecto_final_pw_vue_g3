<template>
  <div class="container">
    <!-- <h1>Pagina Consultar</h1> -->
    <!-- <CRUDVehiculo :txt-buton="buton" /> -->
    <CRUDVistaVehiculo @visualizar="verVehiculo" />
  </div>
</template>
  
  <script>
// import CRUDVehiculo from "../components/empleados/CRUDVehiculo.vue";
import CRUDVistaVehiculo from "@/components/empleados/VisualizarVehiculo.vue";

export default {
  components: {
    // CRUDVehiculo,
    CRUDVistaVehiculo
  },
  data() {
    return {
      buton: {
        type: Object,
        required: false
      },
    };
  },
  methods: {
    verVehiculo(valor) {
      const valor1 = valor.valor1;
      this.buton = valor1;
    }
  }
};
</script>
  
  <style scoped>
.container {
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>
  