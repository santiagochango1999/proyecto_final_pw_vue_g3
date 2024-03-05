<template>
  <div class="container">
    <h1>Componente Empleado</h1>
    <form class="formulario" @submit.prevent="actualizar">
      <div class="insertar">
        <p type="Cédula: ">
          <input v-model="cedula" type="text" pattern="\d{10}" required title="La cédula debe tener 10 dígitos"/>
        </p>
        <p type="Nombre: ">
          <input v-model="nombre" type="text" />
        </p>
        <p type="Apellido: ">
          <input v-model="apellido" type="text" />
        </p>
        <p type="Fecha de Nacimiento: ">
          <input v-model="fechaNacimiento" type="datetime-local" />
        </p>
        <p type="Género: ">
          <input v-model="genero" type="text" />
        </p>
        <p type="Edad: ">
          <input v-model="edad" type="text" />
        </p>

        

        <div class="botonesGA">
          <button type="submit">Actualizar</button>
          <button @click="regresar()">Regresar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { actualizarClienteEmpFachada } from "@/helpers/clienteCliente";

export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      genero: null,
      edad: null,
    };
  },
  props: {
    txtButon: {
      type: Object,
      require: true,
    },
  },
  mounted() {
    this.cedula = this.txtButon.cedula;
    this.nombre = this.txtButon.nombre;
    this.apellido = this.txtButon.apellido;
    this.fechaNacimiento = this.txtButon.fechaNacimiento;
    this.genero = this.txtButon.genero;
    this.edad = this.txtButon.edad;
  },
  methods: {
    async actualizar() {
      this.txtButon.cedula = this.cedula;
      this.txtButon.nombre = this.nombre;
      this.txtButon.apellido = this.apellido;
      this.txtButon.fechaNacimiento = this.fechaNacimiento;
      this.txtButon.genero = this.genero;
      this.txtButon.edad = this.edad;

      await actualizarClienteEmpFachada(this.txtButon);
    },
    regresar() {
      location.reload();
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
  justify-content: center;
  align-items: center;
  font-family: monospace;
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.formulario {
  display: flex;
  flex-direction: column;
}

body {
  background-color: #ffe6e6;
  margin: 0;
}

.insertar {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffcccc;
  border-radius: 8px;
  padding: 20px 30px;
  box-shadow: 0 0 40px -10px #868181;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 14px;
  color: #5a5a5a;
}

input {
  width: 100%;
  border-radius: 5px;
  border-bottom: 1px solid #78788c;
  background: #ffcccc;
  color: #5a5a5a;
  box-sizing: border-box; /* para incluir el padding en el ancho total */
}

input:focus {
  border-bottom: 3px solid #ff6666;
}

button {
  border-radius: 5px;
  padding: 7px;
  font-size: 14px;
  margin-top: 10px;
  color: #ffffff;
  background: #ff6666;
  transition: background 0.3s ease; /* para suavizar el cambio de color */
}

button:hover {
  background: #ff3333;
}

h1 {
  padding-bottom: 15px;
  color: #ff3333;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

@media (max-width: 480px) {
  .insertar {
    padding: 20px; /* Reducir el padding en pantallas más pequeñas */
  }
}
.botonesGA {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>