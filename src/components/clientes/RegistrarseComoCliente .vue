<template>
    <div class="registro-cliente">
        <h1>Registro Cliente</h1>
        <p>Cédula</p>
        <input v-model="cid" type="text">
        <p>Nombre</p>
        <input v-model="name" type="text">
        <p>Apellido</p>
        <input v-model="lastname" type="text">
        <p>Fecha de Nacimiento</p>
        <input v-model="fechan" type="date">
        <p>Género</p>
        <input v-model="gender" type="text">
        <button @click="registrar">Registrarse</button>
    </div>
</template>


<script>
import { registrarseFachada } from '../helper/clientCliente'
export default {
    data() {
        return {
            cid: null,
            name: null,
            lastname: null,
            fechan: null,
            gender: null,
            cliente: null
        }
    },
    methods: {
        async registrar() {
            this.cliente = {
                cedula: this.cid,
                nombre: this.name,
                apellido: this.lastname,
                fechaNac: this.fechan,
                genero: this.gender
            }
            console.log(this.cliente);
            await registrarseFachada(this.cliente)
            this.resetear()
        },
        resetear() {
            this.cid = null
            this.name = null
            this.lastname = null
            this.fechan = null
            this.gender = null
        }
    }
}
</script>

<style>
.registro-cliente {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    margin-left: 31%;
    margin-right: 31%;
}

.registro-cliente p {
    font-weight: bold;
    margin-bottom: 5px;
}

.registro-cliente input {
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
}

.registro-cliente input,
.registro-cliente button {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
}

.registro-cliente button {
    background-color: #b71c1c;
    color: #fff;
    cursor: pointer;
}
</style>