import { createRouter, createWebHashHistory } from "vue-router";
import LogincomponentVue from "./components/Logincomponent.vue";
import Dashboardcomponent from "./components/Dashboard.vue";
import Historycomponent from "./components/History.vue";
import Settingscomponent from "./components/Settings.vue";


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
        },
        {
            path: '/history',
            name: 'History',
            component: Historycomponent
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settingscomponent
        }
    ]
})

export default router