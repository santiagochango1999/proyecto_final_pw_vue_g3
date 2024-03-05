<template>
  <div class="container">
    <table class="tabla-avis">
      <thead class="fila-cabecera">
        <tr>
          <td>Placa</td>
          <td>Modelo</td>
          <td>Marca</td>
          <td>Estado</td>
          <td>Valor</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for:="dato in datos" :key="dato.id">
          <td>{{ dato.placa }}</td>
          <td>{{ dato.modelo }}</td>
          <td>{{ dato.marca }}</td>
          <td>{{ dato.estado }}</td>
          <td>{{ dato.valorDia }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarVehiculosDisponiblesFachada } from "@/helpers/clienteCliente";
import {
  eliminarDatosFachada,
  actualizarDatosVehiculoFachada
} from "@/helpers/clienteVehiculo";

export default {
  data() {
    return {
      datos: null
    };
  },
  methods: {
    async consultar() {
      this.datos = await consultarVehiculosDisponiblesFachada();
      console.log(this.datos);
    },
    async eliminar(id) {
      location.reload();
      console.log(id);
      await eliminarDatosFachada(id);
    },
    async actualizar(dato) {
      await actualizarDatosVehiculoFachada(dato, dato.id);
    }
  },
  beforeMount() {
    this.consultar();
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;

  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
/* General table styles */
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

th,
td {
  padding: 8px;
  text-align: left;
}

/* Table header (thead) */
th {
  background-color: #e5e5e5;
  color: #ffffff;
  font-weight: bold;
}

/* Specific styles for the "tabla-avis" class */
.tabla-avis {
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
}

.tabla-avis th {
  color: #fff; /* Corrected white text color for header */
}

.tabla-avis td {
  color: #070505;
}

.tabla-avis {
  background-color: #f9f9f9;
}

/* Additional styling for table elements */
.tabla-avis .fila-cabecera {
  /* Custom class for table header row */
  background-color: #ff7462; /* Avis red */
  color: #000000; /* Ensured white text color for header row */
  font-weight: bold;

  text-align: center;
}

.tabla-avis .celda-texto {
  /* Custom class for cell containing text */
  text-align: left;
  padding-left: 20px;
}

.tabla-avis .boton-accion {
  /* Custom class for buttons (Actualizar, Eliminar) */
  background-color: #b71c1c; /* Avis red */
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
}

.tabla-avis .boton-accion:hover {
  /* Optional: add hover effect for buttons */
  background-color: #a51b1b; /* Darken red on hover */
}

.tabla-avis tbody tr:hover {
  /* Optional: add hover effect for table rows */
  background-color: rgba(98, 255, 145, 0.842);
}
</style>