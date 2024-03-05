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
  width: 50%;
  border: 1px solid #78788c;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
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

th,
td {
  padding: 10px;
  text-align: center;
}

/* Agregado estilo para las filas impares */
tr:nth-child(odd) {
  background-color: #ffe6e6; /* Cambiado el color de fondo de las filas impares */
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