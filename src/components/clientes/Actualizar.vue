<template>
  <div class="container">
    <div>
      <input v-model="valor" type="text" placeholder="Ingrese su cedula" />
      <button @click="buscar()">Buscar</button>
    </div>
    <br />
    <form v-if="cliente !== null" class="registro-cliente" @submit.prevent="actualizar">
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
      <button type="submit">Actualizar</button>
    </form>
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
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 31%;
  margin-right: 31%;
  background: rgb(53, 51, 51);
}

.registro-cliente p {
  font-weight: bold;
  margin-bottom: 8px;
  color: white;
}

.registro-cliente input {
  font-weight: bold;
  margin: 5px solid black;
  text-align: center;
}

.registro-cliente input,
.registro-cliente button {
  width: 100%;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 4px;
  margin-bottom: 10px;
}

.registro-cliente button {
  background-color: #b71c1c;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
h1 {
  padding-left: 30%;
  color: white;
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