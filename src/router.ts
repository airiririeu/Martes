import { createRouter, createWebHashHistory } from "vue-router";
import LogincomponentVue from "./components/Logincomponent.vue";
import Dashboardcomponent from "./components/Dashboard.vue";


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LogincomponentVue
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboardcomponent
        }
    ]
})

export default router