<template>
  <div class="container">
    <h1>Componente Vehiculo</h1>
    <div class="formulario">
      <div class="insertar">
        <p type="Marca: ">
          <input v-model="marca" type="text" placeholder="Marca" />
        </p>
        <p type="Placa: ">
          <input v-model="placa" type="text" placeholder="Placa" />
        </p>
        <p type="Modelo: ">
          <input v-model="modelo" type="text" placeholder="Modelo" />
        </p>
        <p type="Año de Fabricación: ">
          <input
            v-model="anioFabricacion"
            type="text"
            placeholder="Año de Fabricación:"
          />
        </p>
        <p type="País de Fabricación: ">
          <input
            v-model="paisFabricacion"
            type="text"
            placeholder="País de Fabricación"
          />
        </p>
        <p type="Cilindraje: ">
          <input v-model="cilindraje" type="text" placeholder="Cilindraje" />
        </p>
        <p type="Avaluo: ">
          <input v-model="avaluo" type="text" placeholder="Avalúo" />
        </p>
        <p type="Valor por día: ">
          <input v-model="valorDia" type="text" placeholder="Valor por día" />
        </p>

        <button @click="insertar">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { insertarVehiculoFachada } from "@/helpers/clienteReserva";

export default {
    data() {
    return {
      id: null,
      placa: null,
      modelo: null,
      marca: null,
      anioFabricacion: null,
      paisFabricacion: null,
      cilindraje: null,
      avaluo: null,
      valorDia: null,
    };
  },
  methods: {
    async insertar() {
      const estuBody = {
        placa: this.placa,
        modelo: this.modelo,
        marca: this.marca,
        anioFabricacion: this.anioFabricacion,
        paisFabricacion: this.paisFabricacion,
        cilindraje: this.cilindraje,
        avaluo: this.avaluo,
        valorDia: this.valorDia
      };

      await insertarVehiculoFachada(estuBody);
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}
.formulario {
  display: flex;
  flex-direction: column;
}
body {
  background-color: #0091ffb0;
}

.form {
  width: 340px;
  height: 450px;
  background-color: #ffe6e6;
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
  justify-content: left;
  align-items: left;
}

input {
  width: 100%;
  border-radius: 5px;
  border-bottom: 1px #ffffff;
  background: rgb(255, 233, 233);
  color: rgb(0, 0, 0);
}

input:focus {
  border-bottom: 3px solid #78788c;
}
label {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
button {
  border-radius: 5px;
  padding: 7px;
  font-size: 14px;
  background: #8bb5dd;
  margin-top: 10px;
}
h1 {
  padding-bottom: 15px;
  color: #00268f;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.boton {
  text-align: center;
}
</style>