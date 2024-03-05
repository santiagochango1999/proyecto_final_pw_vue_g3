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

      <table class="tableContenido">
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background: #ffbbbb;
  position: relative;
  margin: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container2 {
  border: 1px solid #ff6666;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  width: 90%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffcccc;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #e66868;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #cc4040;
}

h2 {
  margin-left: 10px;
  color: #cc4040;
}

.tableContenido {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: center;
  border: 1px solid white;
  border-radius: 2px;
  background-color: rgba(241, 120, 120, 0.7);
  color: white;
}
</style>