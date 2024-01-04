import { createRouter, createWebHistory } from "vue-router";
import LogincomponentVue from "./components/Logincomponent.vue";
import Dashboardcomponent from "./components/Dashboard.vue";
import Historycomponent from "./components/History.vue";
import Settingscomponent from "./components/Settings.vue";
import Accountcomponent from "./components/account_settings.vue";
import Advancedcomponent from "./components/advanced_settings.vue";
import Termsconditions from "./components/terms_and_conditions.vue";
import SignUp from "./components/SignUp.vue";

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
        },
        {
            path: '/account_settings',
            name: 'Account Settings',
            component: Accountcomponent,
            meta: {
                auth: true
            }
        },
        {
            path: '/advanced_settings',
            name: 'Advanced Settings',
            component: Advancedcomponent,
            meta: {
                auth: true
            }
        },
        {
            path: '/terms_and_conditions',
            name: 'Terms & Conditions',
            component: Termsconditions,
            meta: {
                auth: true
            }
        },
        {
            path: '/signup',
            name: 'Sign Up',
            component: SignUp,
            meta: {
                auth: false
            }
        }
    ]
})

export default router