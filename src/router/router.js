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
  {
    path: "/crudEmpleado",
    component: () => import("../components/empleados/CRUDEmpleado"),
  },
  {
    path: "/crud2Empleado",
    component: () => import("../page/PaginaEmpActualizar.vue"),
  },
  {
    path: "/Retirarvehículoreservado",
    component: () => import("../components/empleados/Retirar"),
  },
  {
    path: "/Retirarvehículosinreserva",
    component: () => import("../components/empleados/Retirasinreserva"),
  },
  {
    path: "/Reportesreservas",
    component: () => import("../components/reportes/ReportesReservas"),
  },
  {
    path: "/:patMatch(.*)*",
    component: () => import("../page/NoFoundPage"),
  },{
    path: "/crudVehiculo",
    component: () => import("../components/empleados/CRUDVehiculo"),
  },
  {
    path: "/crudVehiculo",
    component: () => import("../components/empleados/CRUDVehiculo.vue"),
  },
  {
    path: "/crud2Vehiculo",
    component: () => import("../page/PaginaVehiculoActualizar.vue"),
  },
  // {
  //   path: "/crud2Vehiculo",
  //   component: () => import("../page/PaginaVehiculoBuscar.vue"),
  // }
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;