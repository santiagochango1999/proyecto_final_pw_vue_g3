import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/ActualizarDatosCliente",
    component: () => import("../components/clientes/Actualizar"),
  },
  {
    path: "/BuscarVDisponible",
    component: () => import("../components/clientes/Buscar.vue"),
  },
  {
    path: "/RegistrarseCliente",
    component: () => import("../components/clientes/Registrarse"),
  },
  {
    path: "/ReservarVehiculo",
    component: () => import("../components/clientes/Reservar"),
  },
  // Empleado
  {
    path: "/registrarEmp",
    component: () => import("../components/empleados/RegistrarClienteEmp"),
  },
  {
    path: "/opcionesEmpleado",
    component: () => import("../page/PaginaEmpActualizar.vue"),
  },
  ////////
  // Vehiculo
  {
    path: "/ingresarVehiculo",
    component: () => import("../components/empleados/IngresarVehiculo.vue"),
  },
  {
    path: "/opcionesVehiculo",
    component: () => import("../page/PaginaVehiculoActualizar.vue"),
  },
  ///
  {
    path: "/Retirarvehículoreservado",
    component: () => import("../components/empleados/Retirar"),
  },
  {
    path: "/Retirarvehículosinreserva",
    component: () => import("../components/empleados/Retirasinreserva"),
  },
  //
  {
    path: "/RetirarSinReserva",
    component: () => import("../page/PaginaSinReserva"),
  },
  {
    path: "/Reportesreservas",
    component: () => import("../components/reportes/ReportesReservas"),
  },
  {
    path: "/:patMatch(.*)*",
    component: () => import("../page/NoFoundPage"),
  },
 
  // {
  //   path: "/crud2Vehiculo",
  //   component: () => import("../page/PaginaVehiculoBuscar.vue"),
  // }
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;