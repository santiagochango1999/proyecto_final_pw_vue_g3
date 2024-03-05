<template>
  <div class="container">
    <h1>Ingrese la marca:</h1>
    <input type="text" v-model="marca" />
    <button @click="buscarPorMarca()">Buscar</button>
    <table>
      <tr>
        <td>Marca</td>
        <td>Placa</td>
        <td>Modelo</td>
        
        <td>Visualizar</td>
        <td>Actualizar</td>
        <td>Eliminar</td>
      </tr>

      <tr v-for:="vehi in vehiculo" :key="vehi.id">
        <td>{{vehi.marca}}</td>
        <td>{{vehi.placa}}</td>
        <td>{{vehi.modelo}}</td>
       
        <td>
          <button @click="visualizarDatosVehiculo(vehi.id)">Visualizar</button>
        </td>
        <td>
          <button @click="actualizarVehiculo(vehi.id)">Actualizar</button>
        </td>
        <td>
          <button @click="eliminarVehiculo(vehi.id)">Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { buscarVehiculoPorMarcaFachada } from "@/helpers/clienteReserva";
import {
  buscarVehiculoIdFachada,
  eliminarDatosFachada,
  buscarVehiculoOriginIdFachada
} from "@/helpers/clienteVehiculo";

export default {
  data() {
    return {
      data: null,
      vehiculo: {
        required: false
      }
    };
  },
  methods: {
    async buscarPorMarca() {
      console.log(this.marca);
      this.vehiculo = await buscarVehiculoPorMarcaFachada(this.marca);
    },

    async eliminarVehiculo(id) {
      // console.log(id);
      await eliminarDatosFachada(id);
      //      this.vehiculo = this.vehiculo.filter((vehi) => vehi.id !== id);
    },
    async actualizarVehiculo(id) {
      const variable1 = await buscarVehiculoIdFachada(id);
      // console.log(variable1);
      const variable2 = true;
      this.$emit("creep", { valor1: variable1, valor2: variable2 });
    },
    async visualizarDatosVehiculo(id) {
      const obtain = await buscarVehiculoOriginIdFachada(id);
      const tmp = true;
      this.$emit("visualizar", { valor1: obtain, valor2: tmp });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>