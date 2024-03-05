<template>
  <div class="container">
    <div class="registro-cliente">
      <h1>Registro Cliente</h1>
      <p>Cédula</p>
      <input v-model="cid" type="text" />
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

      <button @click="registrar">Registrarse</button>
    </div>
  </div>
</template>

<script>
import { registrarseEmpFachada } from "@/helpers/clienteCliente";

export default {
  data() {
    return {
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
    async registrar() {
      this.cliente = {
        cedula: this.cid,
        nombre: this.name,
        apellido: this.lastname,
        fechaNac: this.fechan,
        genero: this.gender,
        edad: this.edad,
      };
      console.log(this.cliente);
      await registrarseEmpFachada(this.cliente);
      this.resetear();
    },
    resetear() {
      this.cid = null;
      this.name = null;
      this.lastname = null;
      this.fechan = null;
      this.gender = null;
      this.edad = null;
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
</style>