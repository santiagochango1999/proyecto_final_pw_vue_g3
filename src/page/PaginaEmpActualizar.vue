<template>
  <div class="container">
    <div v-if="get2">
      <CRUDEmpleado :txt-buton="buton" />
    </div>
    <div v-if="get0">
      <CRUDEmpleado2 @creep1="actualizarCRUD" @visualizar="verCliente" />
    </div>
    <div v-if="get1">
      <CRUDVistaEmpleado :data="data" />
    </div>
  </div>
</template>

<script>
import CRUDEmpleado from "../components/empleados/CRUDEmpleado.vue";
import CRUDEmpleado2 from "@/components/empleados/CRUDEmpleado2.vue";
import CRUDVistaEmpleado from "@/components/empleados/CRUDVistaEmpleado.vue";

export default {
  components: {
    CRUDEmpleado,
    CRUDEmpleado2,
    CRUDVistaEmpleado,
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
      console.log(this.get2);
      this.buton = valor1;
    },
    verCliente(valor) {
      const valor1 = valor.valor1;
      const valor2 = valor.valor2;
      console.log(valor1);
      console.log(valor2);
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