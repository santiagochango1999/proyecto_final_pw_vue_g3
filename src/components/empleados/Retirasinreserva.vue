<template>
  <div class="container">
    <div class="container2">
      <h1>Retirar Vehiculo Sin Reserva</h1>
      <label for="numeroReserva"
        >Ingrese el numero para retirar el vehiculo
      </label>
      <tr />
      <input type="text" id="numeroReserva" v-model="reserva" />
      <button @click="retirarSinReservaVehi()">Retirar</button>

      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Reservado</th>
          </tr>
        </thead>
        <tbody>
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ Reserva.estado }}</td>
          <td>{{ Reserva.fechaInicio }}</td>
          <td>{{ cliente.cedula }}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { retirarVehiculoSinReservaFachada } from "@/helpers/clienteReserva";

export default {
  data() {
    return {
      reserva: null,
      Reserva: {
        type: Object,
        required: false,
      },
      vehiculo: {
        type: Object,
        required: false,
      },
      cliente: {
        type: Object,
        required: false,
      },
    };
  },
  methods: {
    async retirarSinReservaVehi() {
      const reserva = this.reserva;
      try {
        this.Reserva = await retirarVehiculoSinReservaFachada(reserva);
        console.log(this.Reserva.fechaInicio);
        this.vehiculo = this.Reserva.vehiculo;
        this.cliente = this.Reserva.cliente;
      } catch (error) {
        console.log("Error ", error);
        this.error = "Error al retirar el vehiculo, numero no encontrado";
      }
    },
  },
};
</script>

<style scoped>
.container {
  /* par poner sobre las demas cosas position:relative */
  display: flex;
  align-content: center;
  justify-content: center;
  background: white;
  position: relative;
  margin: 40px;
  border-radius: 5px;
}
.container2 {
  border: solid;
  padding: 10px 20px;
  margin: 10px 0px;
}
table {
  margin: 10px 0px;
  border: none;
  background: black;
  color: white;
  padding: 10px;
}
th{
  padding: 0px 10px;
  border: 1px solid white;
  border-radius: 2px;
}
</style>