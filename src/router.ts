import { createRouter, createWebHashHistory } from "vue-router";
import LogincomponentVue from "./components/Logincomponent.vue";
import Dashboardcomponent from "./components/Dashboard.vue";
import Historycomponent from "./components/History.vue";
import Settingscomponent from "./components/Settings.vue";
import Accountcomponent from "./components/account_settings.vue";
import Advancedcomponent from "./components/advanced_settings.vue";
import Termsconditions from "./components/terms_and_conditions.vue";

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
        },
        {
            path: '/account_settings',
            name: 'Account Settings',
            component: Accountcomponent
        },
        {
            path: '/advanced_settings',
            name: 'Advanced Settings',
            component: Advancedcomponent
        },
        {
            path: '/terms_and_conditions',
            name: 'Terms & Conditions',
            component: Termsconditions
        }
    ]
})

export default router