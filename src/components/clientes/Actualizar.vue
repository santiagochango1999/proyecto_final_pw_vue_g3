<template>
  <div class="container">
    <div>
      <input v-model="valor" type="text" placeholder="Ingrese su cedula" />
      <button @click="buscar()">Buscar</button>
    </div>
    <br />
    <div v-if="cliente !== null" class="registro-cliente">
      <h1>Registro Cliente</h1>
      <p>Cédula</p>
      <input v-model="cid" type="text" disabled />
      <p>Nombre</p>
      <input v-model="name" type="text" />
      <p>Apellido</p>
      <input v-model="lastname" type="text" />
      <p>Fecha de Nacimiento</p>
      <input v-model="fechan" type="datetime-local" />
      <p>Género</p>
      <input v-model="gender" type="text" />
      <p>Edad</p>
      <input v-model="edad" type="text" />
      <button @click="actualizar()">Actualizar</button>
    </div>
  </div>
</template>

<script>
import {
  buscarCedulaFachada,
  actualizarClienteFachada,
} from "@/helpers/clienteCliente";
export default {
  data() {
    return {
      valor: null,
      id: null,
      cid: null,
      name: null,
      lastname: null,
      fechan: null,
      gender: null,
      edad: null,
      cliente: null,
    };
  },
  methods: {
    async actualizar() {
      this.cliente = {
        id: this.id,
        cedula: this.cid,
        nombre: this.name,
        apellido: this.lastname,
        fechaNac: this.fechan,
        genero: this.gender,
        edad: this.edad,
      };
      console.log("Cliente antes de actualiza");
      console.log(this.cliente);
      console.log(this.cliente.id);
      await actualizarClienteFachada(this.cliente, this.cliente.id);
      this.resetear();
    },
    resetear() {
      this.id = null;
      this.cid = null;
      this.name = null;
      this.lastname = null;
      this.fechan = null;
      this.gender = null;
      this.cliente = null;
      this.edad = null;
    },
    async buscar() {
      const data = await buscarCedulaFachada(this.valor);
      this.cliente = data;
      this.id = data.id;
      this.cid = data.cedula;
      this.name = data.nombre;
      this.lastname = data.apellido;
      this.fechan = data.fechaNac;
      this.gender = data.genero;
      this.edad = data.edad;
      console.log(this.cliente);
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
.registro-cliente {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-left: 31%;
  margin-right: 31%;
}

.registro-cliente p {
  font-weight: bold;
  margin-bottom: 5px;
}

.registro-cliente input {
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.registro-cliente input,
.registro-cliente button {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.registro-cliente button {
  background-color: #b71c1c;
  color: #fff;
  cursor: pointer;
}
</style>