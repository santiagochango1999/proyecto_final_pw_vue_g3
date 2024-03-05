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
      <td>{{ data.marca }}</td>
      <td>{{ data.placa }}</td>
      <td>{{ data.modelo }}</td>
      <td>{{ data.anioFabricacion }}</td>
      <td>{{ data.paisFabricacion }}</td>
      <td>{{ data.cilindraje }}</td>
      <td>{{ data.avaluo }}</td>
      <td>{{ data.valorDia }}</td>
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
      required: false,
    },
  },
  methods: {
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
  align-items: center;
}

h1 {
  color: #00268f;
  text-align: center;
}

table {
  width: 70%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: #ffcccc; /* Cambiado el color de fondo de la tabla */
  border-radius: 8px;
  box-shadow: 0 0 20px -5px #868181;
}

tr{
  background-color: rgba(241, 120, 120, 0.7); 
}

td {
  padding: 12px;
  text-align: center;
  border: 1px solid #5a5a5a; /* Añadido un borde a las celdas */
}

button {
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background: #ff6666;
  color: #ffffff;
  transition: background 0.3s ease;
}

button:hover {
  background: #ff3333;
}
</style>
