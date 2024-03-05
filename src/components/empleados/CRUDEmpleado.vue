<template>
  <div class="container">
    <div class="buscar">
      <input v-model="apellido" type="text" placeholder="Ingrese apellido" />
      <button @click="buscar">Buscar</button>
    </div>

    <div v-if="mostrar" class="consultar">
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

            <td><button @click="visualizar(cl.id)">Visualizar</button></td>
            <td><button @click="actualizar(cl.id)">Actualizar</button></td>
            <td><button @click="eliminar(cl.id)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  buscarApellidoFachada,
  eliminarFachada,
  buscarClientePorIdFachada,
} from "@/helpers/clienteCliente";

export default {
  data() {
    return {
      apellido: null,
      data: null,
      cliente: {
        required: false,
      },
      mostrar: false,
    };
  },
  methods: {
    async buscar() {
      console.log(this.apellido);
      this.cliente = await buscarApellidoFachada(this.apellido);
      this.mostrar = true;
    },

    async eliminar(id) {
      await eliminarFachada(id);
      this.cliente = this.cliente.filter((cl) => cl.id !== id);
    },
    async actualizar(id) {
      const variable1 = await buscarClientePorIdFachada(id);
      const variable2 = true;
      this.$emit("creep", { valor1: variable1, valor2: variable2 });
    },
    async visualizar(id) {
      const obtain = await buscarClientePorIdFachada(id);
      const tmp = true;
      this.$emit("visualizar", { valor1: obtain, valor2: tmp });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>