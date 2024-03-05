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
        
          <button class="botR" @click="insertar">Ingresar</button>
       
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
        valorDia: this.valorDia,
      };

      await insertarVehiculoFachada(estuBody);
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

</style>
