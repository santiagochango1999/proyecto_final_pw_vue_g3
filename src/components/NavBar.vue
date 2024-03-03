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
              to: "/clientes",
            },
            {
              label: "Reservar vehículo ",
              to: "",
            },
            {
              label: "Registrarse como cliente ",
              to: "",
            },
            {
              label: "Actualizar sus datos de cliente ",
              to: "",
            },
          ],
        },
        {
          label: "Empleados",
          items: [
            {
              label: "Registrar cliente",
              to: "",
            },
            {
              label: "Opciones cliente",
              items: [
                {
                  label: "Buscar",
                  to: "",
                },
                {
                  label: "actualizar",
                  to: "",
                },
                {
                  label: "eliminar cliente ",
                  to: "",
                },
              ],
            },
            {
              label: "Ingresar un vehículo",
              to: "",
            },
            {
              label: "Opciones cliente",
              items: [
                {
                  label: "Buscar",
                  to: "",
                },
                {
                  label: "actualizar",
                  to: "",
                },
                {
                  label: "eliminar vehiculo ",
                  to: "",
                },
              ],
            },
            {
              label: "Retirar un vehículo reservado ",
              to: "",
            },
            {
              label: "Retirar un vehículo sin reserva ",
              to: "",
            },
          ],
        },
        {
          label: "Reportes",
          items: [
            {
              label: "Reporte de Reservas",
              to: "/reportes/reservas",
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
a {
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  padding: 10px 30px;
  border: solid 1px rgb(0, 0, 0);
  margin: 10px 20px;
  background: white;
  border-radius: 6px;
  color: rgb(56, 119, 160);
  text-decoration: none;
  transition: transform 0.3s ease;
}
a:hover {
  transform: scale(1.05);
}
.p-menubar {
  background-color: #f80303; /* Fondo del Menubar */
  border: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
</style>