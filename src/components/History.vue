<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { auth, getCurrentUser } from '../firebase';

const userEmail = ref();

const doLogout = () => {
    auth.signOut();
}

onMounted(async () => {
    const user = await getCurrentUser();
    userEmail.value = user?.email;
})
</script>
<template>
    <body class="bg-gray-100 dark:bg-gray-900">
        <aside
            class="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
            <div>
                <div class="-mx-6 px-6 py-4">
                    <a href="#" title="home" class="relative flex items-center">
                        <img src="./img/final logo.png" class="w-20" alt="martes logo" />
                        <h1
                            class="text-xl group-hover:text-gray-700 dark:group-hover:text-gray-50 font-semibold text-sky-800 lg:block dark:text-gray-300">
                            MARTES</h1>
                    </a>
                </div>

                <div class="mt-8 text-center">
                    <img src="./img/hehe.jpg" alt="userdp"
                        class="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28" />
                        <h5 class="mt-4 hidden text-xl font-semibold text-sky-800 lg:block dark:text-gray-300">{{ userEmail }}
                    </h5>
                    <span class="hidden text-gray-400 lg:block">Employee</span>
                </div>
                <!--side bar options-->
                <ul class="mt-8 space-y-2 tracking-wide">
                    <li>
                        <router-link to="/dashboard"
                            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="transform: ;msFilter:;">
                                <path
                                    d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z">
                                </path>
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Dashboard</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/history"
                            class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-800 to-sky-400 px-4 py-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: white;transform: ;msFilter:;">
                                <path d="M12 8v5h5v-2h-3V8z"></path>
                                <path
                                    d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z">
                                </path>
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">History</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settings"
                            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                                <path
                                    d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z">
                                </path>
                                <path
                                    d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z">
                                </path>
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Settings</span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
                <button type="button" @click="doLogout" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span class="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
                </button>
            </div>
            <!--side bar options-->
        </aside> <!--Uppershits-->
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div class="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
                <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
                    <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">History</h5>
                    <button class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div class="flex space-x-4">
                        <!--search bar -->
                        <div hidden class="md:block">
                            <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                <span
                                    class="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                                    <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 fill-current"
                                        viewBox="0 0 35.997 36.004">
                                        <path id="Icon_awesome-search" data-name="search"
                                            d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z">
                                        </path>
                                    </svg>
                                </span>
                                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here"
                                    class="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700" />
                            </div>
                        </div>
                        <!--/search bar -->
                        <button aria-label="search"
                            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800">
                            <svg xmlns="http://ww50w3.org/2000/svg"
                                class="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                                viewBox="0 0 35.997 36.004">
                                <path id="Icon_awesome-search" data-name="search"
                                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-6 pt-6 2xl:container"> <!--CONTENT-->
                <div
                    class="h-screen space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div class="">
                        <h5 class="text-3xl text-gray-700 dark:text-gray-300">Browser History</h5>
                        <table class="mt-6 -mb-2 w-full text-gray-600">
                            <tbody>
                                <tr class="dark:text-gray-300">
                                    <td class="py-2">11:14</td>
                                    <td>
                                        <img src="./img/Spotify_logo_without_text.svg.png" class="w-5">
                                    </td>
                                    <td class="text-gray-500 font-bold">Spotify | Desktop</td>
                                    <td class="text-gray-500">https://open.spotify.com/desktop/auth/success</td>
                                    <td class="text-green-500">Low</td>
                                    <td class="text-green-600">Safe</td>
                                    <td>
                                        <button>
                                            <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1"
                                                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="dark:text-gray-300">
                                    <td class="py-2">11:14</td>
                                    <td>
                                        <img src="./img/myflixer.png" class="w-5 bg-blue-600">
                                    </td>
                                    <td class="text-gray-500 font-bold">MyFlixer - Watch</td>
                                    <td class="text-gray-500">https://myflixerz.to</td>
                                    <td class="text-yellow-500">Medium</td>
                                    <td class="text-red-600">Unsafe</td>
                                    <td>
                                        <button>
                                            <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1"
                                                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>