<template>
  <div class="containerOpcion">
    <img
      src="https://1000marcas.net/wp-content/uploads/2022/05/Avis-Logo.png"
      alt="no se encontro"
    />
    <div class="container2">
      <Menubar :model="items" />
    </div>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
export default {
  components: {
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: "Clientes",
          items: [
            {
              label: "Buscar vehículos disponibles",
              command: () => {
                this.$router.push("/BuscarVDisponible");
              },
            },
            {
              label: "Reservar vehículo ",
              command: () => {
                this.$router.push("/ReservarVehiculo");
              },
            },
            {
              label: "Registrarse como cliente ",
              command: () => {
                this.$router.push("/RegistrarseCliente");
              },
            },
            {
              label: "Actualizar sus datos de cliente ",
              command: () => {
                this.$router.push("/ActualizarDatosCliente");
              },
            },
          ],
        },
        {
          label: "Empleados",
          items: [
            {
              label: "Registrar cliente",
              command: () => {
                this.$router.push("/registrarEmp");
              },
            },
            {
              label: "Opciones cliente",
              command: () => {
                this.$router.push("/opcionesEmpleado");
              },
            },
            {
              label: "Ingresar un vehículo",
              command: () => {
                this.$router.push("/ingresarVehiculo");
              },
            },
            {
              label: "Opciones vehículo",
              command: () => {
                this.$router.push("/opcionesVehiculo");
              },
            },
            {
              label: "Retirar un vehículo reservado ",
              command: () => {
                this.$router.push("/Retirarvehículoreservado");
              },
            },
            {
              label: "Retirar un vehículo sin reserva ",
              command: () => {
                this.$router.push("/Retirarvehículosinreserva");
              },
            },
          ],
        },
        {
          label: "Reportes",
          items: [
            {
              label: "Reporte de Reservas",
              command: () => {
                this.$router.push("/Reportesreservas");
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.icon = this.menuOpen ? "pi pi-bars" : "pi pi-times";
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.containerOpcion {
  display: grid;
  text-align: center;
  grid-template-columns: 20% 80%;
  background: rgb(249, 0, 0);
}
img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80px;
  background: white;
}
.container2 {
  display: flex;
  justify-content: center;
}

.p-menubar {
  margin: 10px;
  padding: 0px 40px;
  background-color: #ffffff; /* Fondo del Menubar */
  border: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
</style>