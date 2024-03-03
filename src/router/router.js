import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/clientes',
        component: () => import('../page/PaginaCliente')
    },
    {
        path: '/empleados',
        component: () => import('../page/PaginaEmpleado')
    },
    {
        path: '/reportes',
        component: () => import('../page/PaginaReportes')
    },
    {
        path: '/:patMatch(.*)*',
        component: () => import('../page/NoFoundPage')
    }
    
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router