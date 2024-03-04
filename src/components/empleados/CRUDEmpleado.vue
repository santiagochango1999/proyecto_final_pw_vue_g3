<template>
  <div class="container">
    
    <div v-if="!mostrar">
      <div v-if="cliente === null" class="buscar">
        <input v-model="lastname" type="text" placeholder="Ingrese apellido" />
        <button @click="buscar">Buscar</button>
      </div>

      <div v-if="cliente !== null">
        <table class="tabla-avis">
          <thead class="fila-cabecera">
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellido</th>

              <th>Visualizar</th>
              <th>Actualizar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for:="cl in cliente" :key="cl.id">
              <td>{{ cl.cedula }}</td>
              <td>{{ cl.nombre }}</td>
              <td>{{ cl.apellido }}</td>

              <td><button @click="visualizar">Visualizar</button></td>
              <!--<router-link to="/visualizar" @click="buscar">Visualizar</router-link>-->
              <!--<td><button @click="actualizar">Actualizar</button></td>-->
              <router-link to="/actualizar">Actualizar</router-link>
              <td><button @click="eliminar(cl.id)">Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="mostrar" class="container2">
      <h1>Empleado Comp</h1>
      <div>
        <table class="tabla-avis">
          <thead class="fila-cabecera">
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de Nacimiento</th>
              <th>Género</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for:="cl in cliente" :key="cl.id">
              <td>{{ cl.cedula }}</td>
              <td>{{ cl.nombre }}</td>
              <td>{{ cl.apellido }}</td>
              <td>{{ cl.fechaNacimiento }}</td>
              <td>{{ cl.genero }}</td>
              <td>{{ cl.edad }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import {
  buscarApellidoFachada,
  actualizarClienteFachada,
  eliminarFachada,
} from "@/helpers/clienteCliente";
// import VisualizarEmpleado from "./VisualizarEmpleado.vue";

export default {
  components: {
    VisualizarEmpleado,
  },
  data() {
    return {
      id: null,
      cid: null,
      name: null,
      lastname: null,
      fechan: null,
      gender: null,
      edad: null,
      cliente: null,
      mostrar: false,
    };
  },
  methods: {
    async buscar() {
      console.log(this.lastname);
      const data = await buscarApellidoFachada(this.lastname);
      this.cliente = data;
      console.log("CRUD buscar")
      console.log(data);
      this.cid = data.cedula;
      this.name = data.nombre;
      this.lastname = data.apellido;
      this.fechan = data.fechaNacimiento;
      this.gender = data.genero;
      this.edad = data.edad;
      //this.$emit("selecciono", data);
    },
    async visualizar() {
      console.log("met visualizar");
      console.log(this.cliente);
      this.mostrar = true;
      console.log(this.mostrar);
      //this.$emit("selecciono", data);
    },
    async actualizar() {
      this.cliente = {
        cedula: this.cid,
        nombre: this.name,
        apellido: this.lastname,
        fechaNac: this.fechan,
        genero: this.gender,
      };
      console.log("Cliente antes de actualizar");
      console.log(this.cliente);
      console.log(this.cliente.id);
      await actualizarClienteFachada(this.cliente, this.cliente.id);
      this.resetear();
    },
    async eliminar(id) {
      await eliminarFachada(id);
      this.cliente = this.cliente.filter((cl) => cl.id !== id);
      this.resetear();
    },
    resetear() {
      this.id = null;
      this.cid = null;
      this.name = null;
      this.lastname = null;
      this.fechan = null;
      this.gender = null;
    },
  },
};
</script>

<style>
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
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

.tabla-avis tr:nth-child(even) {
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