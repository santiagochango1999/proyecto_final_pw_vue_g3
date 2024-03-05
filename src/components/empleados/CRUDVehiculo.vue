<template>
  <div class="container">
    <h1>Ingrese la marca:</h1>
    <input type="text" v-model="marca" />
    <button @click="buscarPorMarca()">Buscar</button>

    <div v-if="mostrar" class="mostarTable">
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
          <td>{{ vehi.marca }}</td>
          <td>{{ vehi.placa }}</td>
          <td>{{ vehi.modelo }}</td>

          <td>
            <button @click="visualizarDatosVehiculo(vehi.id)">
              Visualizar
            </button>
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
  </div>
</template>

<script>
import { buscarVehiculoPorMarcaFachada } from "@/helpers/clienteReserva";
import {
  buscarVehiculoIdFachada,
  eliminarDatosFachada,
  buscarVehiculoOriginIdFachada,
} from "@/helpers/clienteVehiculo";

export default {
  data() {
    return {
      marca: null,
      data: null,
      vehiculo: {
        required: false,
      },
      mostrar: false,
    };
  },
  methods: {
    async buscarPorMarca() {
      console.log(this.marca);
      this.vehiculo = await buscarVehiculoPorMarcaFachada(this.marca);
      this.mostrar = true;
    },

    async eliminarVehiculo(id) {
      await eliminarDatosFachada(id);
      this.vehiculo = this.vehiculo.filter((vehi) => vehi.id !== id);
    },
    async actualizarVehiculo(id) {
      const variable1 = await buscarVehiculoOriginIdFachada(id);
      const variable2 = true;
      this.$emit("creep", { valor1: variable1, valor2: variable2 });
    },
    async visualizarDatosVehiculo(id) {
      const obtain = await buscarVehiculoOriginIdFachada(id);
      const tmp = true;
      this.$emit("visualizar", { valor1: obtain, valor2: tmp });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #e97c7c;
  text-align: center;
}

input {
  width: 30%;
  border: 1px solid #78788c;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  margin-top: 10px; /* Reducido el margen superior para evitar que se vea muy separado */
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  background: #ff6666;
  color: #ffffff;
  transition: background 0.3s ease;
}

button:hover {
  background: #ff3333;
}

button.clicked {
  background: #cc0000;
}

.mostarTable {
  background-color: #ffcccc; /* Cambiado el color de fondo */
  border-radius: 8px;
  padding: 20px 30px;
  box-shadow: 0 0 20px -5px #868181; /* Ajustada la sombra */
}

table {
  color: #00268f; /* Cambiado el color del texto a azul oscuro */
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: center;
}

/* Agregado estilo para las filas impares */
tr:nth-child(odd) {
  background-color: #ffe6e6; /* Cambiado el color de fondo de las filas impares */
}

@media (max-width: 500px) {
  input {
    width: 100%;
  }
}
</style>