<template>
  <div class="container">
    <div class="formulario">
      <div class="registro-vehiculo">
        <h1>Reservar Vehiculo</h1>

        <label for>Placa</label>
        <input type="text" v-model="placa" />

        <label for>Cedula</label>
        <input type="text" v-model="cedula" />

        <label for>Fecha Inicio</label>
        <input type="datetime" v-model="fechaInicio" />

        <label for>Fecha Fin</label>
        <input type="datetime" v-model="fechaFin" />

        <button @click="validacionPlaca()">Generar</button>

        <div v-if="verificacion" class="boxTarget">
          <label for>Numero Tarjeta</label>
          <input type="text" v-model="numeroTarget" />
          <button @click="generarReserva()">Pagar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  busvarVehiculoPorPlacaFachada,
  reservarVehiculoCompletoFachada,
  buscarCedulaFachada
} from "@/helpers/clienteCliente";

import {
  reportesClienteVehiculoFachada,
  obtainReservaUltimateNumberFachada
} from "@/helpers/clienteReserva";

export default {
  data() {
    return {
      cliente: {
        type: Object,
        required: false
      },
      cedula: null,
      vehiculo: {
        type: Object,
        required: false
      },
      reserva: {
        type: Object,
        required: false
      },
      numeroTarget: null,
      placa: null,
      fechaInicio: null,
      fechaFin: null,
      verificacion: false,
      reservaNumero: false,
      total: {
        required: false
      }
    };
  },
  methods: {
    async validacionPlaca() {
      this.vehiculo = await busvarVehiculoPorPlacaFachada(this.placa);
      console.log("vehiculo ", this.vehiculo);
      if (this.vehiculo !== null) {
        this.cliente = await buscarCedulaFachada(this.cedula);
        console.log("cliente ", this.cliente);
        if (this.cliente !== null) {
          console.log(this.fechaInicio);
          console.log(this.fechaFin);
          const tmp = await reportesClienteVehiculoFachada(
            this.fechaInicio,
            this.fechaFin
          );
          if (
            tmp.fechaInicio != this.fechaInicio &&
            tmp.fechaFin != this.fechaFin
          ) {
            this.reserva = await reportesClienteVehiculoFachada(
              this.fechaInicio,
              this.fechaFin
            );
          }
          console.log("reserva ", this.reserva);
          if (this.reserva != null) {
            this.verificacion = true;
            console.log("verificacion exitosa");
          } else {
            alert("Fechas Reservadas, escoga otra fecha");
          }
        } else {
          alert("Cliente No encontrado, Ingrese otra cedula.");
        }
      } else {
        alert("Vehiculo No Encontrado, Ingrese otro Vehiculo.");
      }
    },
    async generarReserva() {
      console.log("generar reserva");
      const body = {
        vehiculo: this.vehiculo,
        cliente: this.cliente
      };
      console.log(body);
      await reservarVehiculoCompletoFachada(
        body,
        this.numeroTarget,
        this.fechaInicio,
        this.fechaFin
      );
      this.total = await obtainReservaUltimateNumberFachada();
      console.log("data -> ",this.total);
      alert(`Se genero el pago, su numero de reserva es ${this.total[0].id}`);
    }
  }
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

.registro-vehiculo {
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
  color: #837575;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

@media (max-width: 480px) {
  .insertar {
    padding: 20px; /* Reducir el padding en pantallas más pequeñas */
  }
}
.botR {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>