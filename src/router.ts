import { createRouter, createWebHistory } from "vue-router";
import LogincomponentVue from "./components/Logincomponent.vue";
import Dashboardcomponent from "./components/Dashboard.vue";
import Historycomponent from "./components/History.vue";
import Settingscomponent from "./components/Settings.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LogincomponentVue,
            meta: {
                auth: false
            }
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboardcomponent,
            meta: {
                auth: true
            }
        },
        {
            path: '/history',
            name: 'History',
            component: Historycomponent,
            meta: {
                auth: true
            }
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settingscomponent,
            meta: {
                auth: true
            }
        }
    ]
})

export default router