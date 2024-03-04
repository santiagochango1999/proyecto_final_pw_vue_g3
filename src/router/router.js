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
        component: () => import('../components/empleados/Crudempleado')
    },
    {
        path: '/Crudvehiculo',
        component: () => import('../components/empleados/Crudvehiculo')
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
        component: () => import('../components/reportes/Reportesreservas')
    },
    {
        path: '/:patMatch(.*)*',
        component: () => import('../page/NoFoundPage')
    }
    
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router