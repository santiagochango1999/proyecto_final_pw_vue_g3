<template>
  <div class="container">
    <h1>Vista data Clie-Empleados</h1>

    <table class="tabla-avis">
      <thead class="fila-cabecera">
        <tr>
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Género</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ data.cedula }}</td>
          <td>{{ data.nombre }}</td>
          <td>{{ data.apellido }}</td>
          <td>{{ data.fechaNacimiento }}</td>
          <td>{{ data.genero }}</td>
          <td>{{ data.edad }}</td>
        </tr>
      </tbody>
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
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>