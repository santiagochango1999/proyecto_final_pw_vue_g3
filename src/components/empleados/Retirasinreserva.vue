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
  display: flex;
  align-content: center;
  justify-content: center;
  background: #ffbbbb;
  position: relative;
  margin: 40px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
}
.container2 {
  width: 90%;
  border: 1px solid #ff6666; /* Borde rojo claro */
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: rgba(241, 120, 120, 0.7);
  color: white;
  padding: 10px;
}
th,
td {
  padding: 10px;
  text-align: center;
  border: 1px solid white;
  border-radius: 2px;
}
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: stretch;
  }
  .container2 {
    width: 100%;
  }
}
button {
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background: #e66868;
  color: #ffffff;
  transition: background 0.3s ease;
  margin-right: 10px; /* Agregamos un margen a la derecha para separar el botón del input */
}
button:hover {
  background: #ff3333; 
}
input {
  flex: 1; 
  border-radius: 5px;
  border: 1px solid #78788c;
  background: #ffcccc;
  color: #5a5a5a;
  box-sizing: border-box; 
  padding: 10px; 
}
input:hover {
  border-bottom: 3px solid #d10707;
}
</style>