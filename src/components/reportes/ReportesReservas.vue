<template>
  <div class="container">
    <div class="container2">
      <h2>Reporte de Reservas</h2>
      <div class="form-group">
        <label for="fechaInicio">Fecha de inicio:</label>
        <tr />
        <input type="datetime-local" id="fechaInicio" v-model="fechaInicio" />
      </div>
      <div class="form-group">
        <label for="fechaFin">Fecha de fin:</label>
        <tr />
        <input type="datetime-local" id="fechaFin" v-model="fechaFin" />
      </div>

      <button @click="generarReporte">Generar reporte</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Placa</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reserv in Reserva" :key="reserv.id">
            <td>{{ reserv.id }}</td>
            <td>{{ reserv.nombre }}</td>
            <td>{{ reserv.apellido }}</td>
            <td>{{ reserv.estado }}</td>
            <td>{{ reserv.placa }}</td>
            <td>{{ reserv.modelo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

 <script>
import { reportesClienteVehiculoFachada } from "@/helpers/clienteReserva";

export default {
  data() {
    return {
      fechaInicio: "",
      fechaFin: "",
      Reserva: {
        type: Object,
        required: false,
      },
    };
  },
  methods: {
    async generarReporte() {
      try {
        console.log(this.fechaInicio);
        console.log(this.fechaFin);
        this.Reserva = await reportesClienteVehiculoFachada(
          this.fechaInicio,
          this.fechaFin
        );
        console.log(this.Reserva);
      } catch (error) {
        console.error("Error al obtener los reportes:", error);
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
button {
  margin: 20px;
  margin-left: 100px;
}
h2 {
  margin-left: 40px;
}
</style>