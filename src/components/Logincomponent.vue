<script setup lang="ts">
import { ref } from 'vue';
import { login } from "../services/LoginService";
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref("");
const password = ref("");

const doLogin = () => {
    login(email.value, password.value, (s, e) => {
        if (!s) {
            Swal.fire("Error", e, "error");
        }
        else {
            router.push('/dashboard');
        }
    })
}

</script>
<template>
    <div class="bg-sky-100 h-full">
        <div class="w-full xl:container px-12 sm:px-0 mx-auto my-auto">
            <div class="mx-auto h-full sm:w-max">
                <div class="m-auto  py-12">
                    <div class="px-5 relative">
                        <router-link to="/" class="grid grid-cols-2">
                        <img src="./img/final logo.png" class="w-20 dark:hidden" alt="martes logo" />
                        <img src="./img/final logo.png" class="w-20 hidden dark:block" alt="martes logo" />
                        <h1
                            class="justify mt-3 text-3xl group-hover:text-gray-700 dark:group-hover:text-gray-50 font-semibold text-sky-800 lg:block dark:text-gray-300">
                            MARTES
                        </h1>
                        </router-link>
                    </div>
                    <div
                        class="mt-12 rounded-3xl border bg-white dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                        <h3 class="text-2xl font-semibold text-sky-900 dark:text-white">Login to your account</h3>
                        <div class="mt-10 space-y-8 dark:text-white">
                            <div>
                                <div
                                    class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-600 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="email" placeholder="Email or user name" v-model="email"
                                        class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                            </div>

                            <div class="flex flex-col items-end">
                                <div
                                    class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-600 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="password" placeholder="Password" v-model="password"
                                        class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
                                </div>
                                <button type="reset" class="-mr-3 w-max p-3">
                                    <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password
                                        ?</span>
                                </button>
                            </div>

                            <div>
                                <button @click="doLogin"
                                    class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 transition ease-out duration-700">
                                    <span class="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                </button>
                                <ul>
                                    <li>
                                        <router-link to="/signup"
                                        class="mt-2 w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 transition ease-out duration-700">
                                        <span class="text-base font-semibold text-white dark:text-gray-900">Sign up</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="border-t pt-12 text-gray-500 dark:border-gray-800">
                        <div class="space-x-4 text-center">
                            <a href="https://www.otismanila.com" class="hover:text-sky-900 dark:hover:text-gray-300">&copy; OTis Philippines Inc.</a>
                            <a href="/terms_conditions" class="text-sm hover:text-sky-900 dark:hover:text-gray-300">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>