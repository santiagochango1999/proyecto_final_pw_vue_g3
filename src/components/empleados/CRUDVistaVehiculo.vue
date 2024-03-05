<template>
  <div class="container">
    <h1>Vista dataculos</h1>

    <table>
      <tr>
        <td>Marca</td>
        <td>Placa</td>
        <td>Modelo</td>
        <td>Año de Fabricación</td>
        <td>Pais de Fabricación</td>
        <td>Cilindraje</td>
        <td>Avaluo</td>
        <td>Valor por día</td>
      </tr>
      <td>{{data.marca}}</td>
      <td>{{data.placa}}</td>
      <td>{{data.modelo}}</td>
      <td>{{data.anioFabricacion}}</td>
      <td>{{data.paisFabricacion}}</td>
      <td>{{data.cilindraje}}</td>
      <td>{{data.avaluo}}</td>
      <td>{{data.valorDia}}</td>
    </table>

    <div>
      <button @click="regresar()">Regresar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    regresar(){
        location.reload();
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>