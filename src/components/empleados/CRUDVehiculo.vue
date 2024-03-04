<template>
  <div class="container">
    <h1>Componente Vehiculo</h1>
    <div class="formulario">
      <div class="insertar" v-if="action === 'guardar' || action === 'actualizar'">
        <p type="Placa: ">
          <input v-model="placa" type="text" placeholder="Placa" />
        </p>
        <p type="Marca: ">
          <input v-model="marca" type="text" placeholder="Marca" />
        </p>
        <p type="Año de Fabricación: ">
          <input v-model="anioFabricacion" type="datetime-local" placeholder="Año de Fabricación:" />
        </p>
        <p type="País de Fabricación: ">
          <input v-model="paisFabricacion" type="text" placeholder="País de Fabricación" />
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

        <button @click="insertar" v-if="action == 'guardar'">GUARDAR</button>
        <button @click="verificar" v-if="action == 'actualizar'">ACTUALIZAR</button>
      </div>
    </div>
    <div class="consultar" v-if="action == 'buscar'">
      <input v-model="id" type="text" placeholder="Ingrese ID" />
      <button @click="consultarPorIdMarca">Consultar</button>
    </div>

    <div v-if="action == 'eliminar'">
      <label for>Ingrese el ID a eliminar</label>
      <input v-model="id" type="text" placeholder="Ingrese ID" />
      <button @click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import {
  insertarVehiculoFachada,
  buscarVehiculoFachada,
  actualizarVehiculoFachada,
  eliminarVehiculoFachada
} from "@/helpers/clienteReserva";

export default {
  data() {
    return {
      action: "",
      id: null,
      placa: null,
      modelo: null,
      marca: null,
      anioFabricacion: null,
      paisFabricacion: null,
      cilindraje: null,
      avaluo: null,
      valorDia: null,
      vari: false
    };
  },
  props: {
    txtButon: {
      type: String,
      require: true
    }
  },
  watch: {
    "$route.params.action"(newValue, oldValue) {
      this.action = newValue;
    }
  },

  mounted() {
    this.action = this.$route.params.action; // inicializar la variable action
  },
  methods: {
    async consultarPorIdMarca() {
      const data = await buscarVehiculoFachada(this.id);

      this.placa = data.placa;
      this.modelo = data.modelo;
      this.marca = data.marca;
      this.anioFabricacion = data.anioFabricacion;
      this.paisFabricacion = data.paisFabricacion;
      this.cilindraje = data.cilindraje;
      this.avaluo = data.avaluo;
      this.valorDia = data.valorDia;
    },
    async insertar() {
      const estuBody = {
        placa: this.placa,
        modelo: this.modelo,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        edad: this.edad,
        correo: this.correo,
        facultad: this.facultad,
        carrera: this.carrera
      };

      await insertarVehiculoFachada(estuBody);
    },
    async actualizar() {
      const body = {
        placa: this.placa,
        modelo: this.modelo,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        edad: this.edad,
        correo: this.correo,
        facultad: this.facultad,
        carrera: this.carrera
      };

      await actualizarVehiculoFachada(this.id, body);
    },
    async eliminar() {
      await eliminarVehiculoFachada(this.id);
    },
    async metodos() {
      if (this.txtButon === "Guardar") {
        await this.insertar();
      } else if (this.txtButon === "Actualizar") {
        await this.actualizar();
      } else if (this.txtButon === "Consultar") {
        await this.consultarPorIdMarca();
      }
    }
  }
};
</script>
<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
}
body {
  background-color: #0091ffb0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
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
  border-bottom: 2px solid #bebed2;
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
.container {
  margin-top: 40px;
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
</style>
