<template>
  <div class="container">
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

    <div v-if="verificacion">
      <label for>Numero Tarjeta</label>
      <input type="text" v-model="numeroTarget" />
      <button @click="generarReserva()">Pagar</button>
    </div>
  </div>
</template>

<script>
import {
  busvarVehiculoPorPlacaFachada,
  reservarVehiculoCompletoFachada,
  buscarCedulaFachada
} from "@/helpers/clienteCliente";

import reportesClienteVehiculoFachada from "@/helpers/clienteReserva";

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
        requieed: false
      },
      data: {
        required: false
      },
      numeroTarget: null,
      placa: null,
      fechaInicio: null,
      fechaFin: null,
      verificacion: false
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
          // this.reserva = await reportesClienteVehiculoFachada(
          //   this.fechaInicio,
          //   this.fechaFin
          // );
          console.log("reserva ", this.reserva);
          if (this.reserva !== null) {
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
      this.data = await reservarVehiculoCompletoFachada(
        this.numeroTarget,
        this.fechaInicio,
        this.fechaFin
      );
      console.log(this.data);
      alert("Se genero el pago.");
    }
    // async generarProceso() {
    //   await this.validacionPlaca();
    // }
  }
};
</script>

<style scoped>
.container {
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>