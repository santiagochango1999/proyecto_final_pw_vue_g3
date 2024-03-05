<template>
  <div class="container">
    <div v-if="get2">
      <CRUDVehiculo :txt-buton="buton" />
    </div>
    <div v-if="get0">
      <CRUDVehiculo2 @creep="actualizarCRUD" @visualizar="verVehiculo" />
    </div>
    <div v-if="get1">
      <CRUDVistaVehiculo :data="data" />
    </div>
  </div>
</template>
  
  <script>
import CRUDVehiculo2 from "@/components/empleados/CRUDVehiculo2.vue";
import CRUDVehiculo from "../components/empleados/CRUDVehiculo.vue";
import CRUDVistaVehiculo from "@/components/empleados/CRUDVistaVehiculo.vue";

export default {
  components: {
    CRUDVehiculo,
    CRUDVehiculo2,
    CRUDVistaVehiculo
  },
  data() {
    return {
      buton: {
        type: Object,
        required: false
      },
      data: {
        type: Object,
        required: false
      },
      get1: false,
      get0: true,
      get2: false
    };
  },
  methods: {
    actualizarCRUD(valores) {
      // this.get = variable2;
      // console.log(variable1, variable2);
      // console.log(this.get);
      // console.log(variable1);
      // console.log(variable2);
      const valor1 = valores.valor1;
      const valor2 = valores.valor2;
      this.get2 = valor2;
      this.get1 = false;
      this.get0 = false;
      console.log(this.get2);
      this.buton = valor1;
    },
    verVehiculo(valor) {
      const valor1 = valor.valor1;
      const valor2 = valor.valor2;
      console.log(valor1);
      console.log(valor2);
      this.get1 = valor2;
      this.get2 = false;
      this.get0 = false;
      this.data = valor1;
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
  