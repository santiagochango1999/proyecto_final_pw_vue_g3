import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/ActualizarDatosCliente',
        component: () => import('../components/clientes/Actualizar')
    },
    {
        path: '/BuscarVDisponible',
        component: () => import('../components/clientes/Buscar')
    },
    {
        path: '/RegistrarseCliente',
        component: () => import('../components/clientes/Registrarse')
    },
    {
        path: '/ReservarVehiculo',
        component: () => import('../components/clientes/Reservar')
    },
    {
        path: '/Crudempleado',
        component: () => import('../components/empleados/CRUDEmpleado')
    },
    {
        path: '/Crudvehiculo',
        component: () => import('../components/empleados/CRUDVehiculo')
    },
    {
        path: '/Retirarvehículoreservado',
        component: () => import('../components/empleados/Retirar')
    },
    {
        path: '/Retirarvehículosinreserva',
        component: () => import('../components/empleados/Retirasinreserva')
    },
    {
        path: '/Reportesreservas',
        component: () => import('../components/reportes/ReportesReservas')
    },
    {
        path: '/:patMatch(.*)*',
        component: () => import('../page/NoFoundPage')
    }
    
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router