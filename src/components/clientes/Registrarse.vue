<template>
  <div class="container">
    <form class="registro-cliente" @submit.prevent="registrar">
      <h1>Registro Cliente</h1>
      <p>Cédula</p>
      <input v-model="cid" type="text" pattern="\d{10}" required title="La cédula debe tener 10 dígitos"/>
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
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>


<script>
import { registrarseFachada } from "@/helpers/clienteCliente";
export default {
  data() {
    return {
      cid: null,
      name: null,
      lastname: null,
      fechan: null,
      gender: null,
      cliente: null,
      edad: null
    };
  },
  methods: {
    async registrar() {
      this.cliente = {
        cedula: this.cid,
        nombre: this.name,
        apellido: this.lastname,
        fechaNacimiento: this.fechan,
        genero: this.gender,
        edad: this.edad
      };
      console.log(this.cliente);
      await registrarseFachada(this.cliente);
      alert("Cliente registrado correctamente.");
      this.resetear();
    },
    resetear() {
      this.cid = null;
      this.name = null;
      this.lastname = null;
      this.fechan = null;
      this.gender = null;
      this.edad = null
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
</style>