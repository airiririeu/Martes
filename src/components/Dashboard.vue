<script setup lang="ts">
import { auth } from '../firebase';


const doLogout = () => {
    auth.signOut();
}
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
                    <h5 class="mt-4 hidden text-xl font-semibold text-sky-800 lg:block dark:text-gray-300">airi
                    </h5>
                    <span class="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul class="mt-8 space-y-2 tracking-wide">
                    <li>
                        <router-link to="/dashboard"
                            class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-800 to-sky-400 px-4 py-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: white;transform: ;msFilter:;">
                                <path
                                    d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z">
                                </path>
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Dashboard</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/history"
                            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
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
        </aside>
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div class="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
                <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
                    <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
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
                        <button aria-label="chat"
                            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </button>
                        <button aria-label="notification"
                            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!--CONTENT-->
            <div class="px-6 pt-6 2xl:container">
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div class="md:col-span-2 lg:col-span-2"> <!--First Card-->
                        <div
                            class="h-screen space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div class="">
                                <h5 class="text-xl text-gray-700 dark:text-gray-300">Weekly Analytics</h5>
                                <div class="my-8">
                                    <h1 class="text-5xl font-bold text-gray-800 dark:text-white">40%</h1>
                                    <span class="text-gray-500 dark:text-gray-400">of visited sites are unsafe</span>
                                </div>
                                <svg class="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158"
                                        stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
                                    <path
                                        d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665"
                                        stroke="#4ade80" stroke-width="3" stroke-linecap="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244"
                                            y2="15" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4DFFDF" />
                                            <stop offset="1" stop-color="#4DA1FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362"
                                            y2="18.9795" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E323FF" />
                                            <stop offset="1" stop-color="#7517F8" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <table class="mt-6 -mb-2 w-full text-gray-600">
                                    <tbody>
                                        <tr class="dark:text-gray-300">
                                            <td class="py-2">Unsafe sites</td>
                                            <td class="text-gray-500">40%</td>
                                            <td>
                                                <svg class="ml-auto w-16" viewBox="0 0 68 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1"
                                                        fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1"
                                                        fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1"
                                                        fill="#e4e4f2" />
                                                    <path
                                                        d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                                                        stroke="#ef4444" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997"
                                                            x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#E323FF" />
                                                            <stop offset="1" stop-color="#7517F8" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr class="dark:text-gray-300">
                                            <td class="py-2">Safe Sites</td>
                                            <td class="text-gray-500">60%</td>
                                            <td>
                                                <svg class="ml-auto w-16" viewBox="0 0 68 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1"
                                                        fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1"
                                                        fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1"
                                                        fill="#e4e4f2" />
                                                    <path
                                                        d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                                                        stroke="#4ade80" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34"
                                                            y2="15.9524" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#8AFF6C" />
                                                            <stop offset="1" stop-color="#02C751" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div> <!--Second card-->
                        <div
                            class="h-full group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <svg class="m-auto w-40 opacity-75" viewBox="0 0 146 146" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M73.1866 5.7129C81.999 5.7129 90.725 7.44863 98.8666 10.821C107.008 14.1933 114.406 19.1363 120.637 25.3675C126.868 31.5988 131.811 38.9964 135.184 47.138C138.556 55.2796 140.292 64.0057 140.292 72.818C140.292 81.6304 138.556 90.3565 135.184 98.4981C131.811 106.64 126.868 114.037 120.637 120.269C114.406 126.5 107.008 131.443 98.8666 134.815C90.725 138.187 81.999 139.923 73.1866 139.923C64.3742 139.923 55.6481 138.187 47.5066 134.815C39.365 131.443 31.9674 126.5 25.7361 120.269C19.5048 114.037 14.5619 106.64 11.1895 98.4981C7.81717 90.3565 6.08144 81.6304 6.08144 72.818C6.08144 64.0057 7.81717 55.2796 11.1895 47.138C14.5619 38.9964 19.5048 31.5988 25.7361 25.3675C31.9674 19.1363 39.365 14.1933 47.5066 10.821C55.6481 7.44863 64.3742 5.7129 73.1866 5.7129L73.1866 5.7129Z"
                                    stroke="#e4e4f2" stroke-width="4.89873" />
                                <path
                                    d="M73 5.00001C84.365 5.00001 95.5488 7.84852 105.529 13.2852C115.509 18.7218 123.968 26.5732 130.131 36.1217C136.295 45.6702 139.967 56.6112 140.812 67.9448C141.657 79.2783 139.648 90.6429 134.968 101C130.288 111.357 123.087 120.375 114.023 127.232C104.96 134.088 94.3218 138.563 83.0824 140.248C71.8431 141.933 60.3606 140.775 49.6845 136.878C39.0085 132.981 29.4793 126.471 21.9681 117.942"
                                    stroke="#4ade80" stroke-width="10" stroke-linecap="round" />
                                <path
                                    d="M9.60279 97.5926C6.37325 89.2671 4.81515 80.3871 5.01745 71.4595C5.21975 62.5319 7.1785 53.7316 10.7818 45.561C14.3852 37.3904 19.5626 30.0095 26.0184 23.8398C32.4742 17.6701 40.082 12.8323 48.4075 9.6028"
                                    stroke="#ef4444" stroke-width="10" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_622:13617" x1="45.9997" y1="19" x2="46.0897"
                                        y2="124.308" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E323FF" />
                                        <stop offset="1" stop-color="#7517F8" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06"
                                        x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4DFFDF" />
                                        <stop offset="1" stop-color="#4DA1FF" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_622:13617" x1="36.4997" y1="5.07257e-06" x2="36.6213"
                                        y2="142.36" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFD422" />
                                        <stop offset="1" stop-color="#FF7D05" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06"
                                        x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4DFFDF" />
                                        <stop offset="1" stop-color="#4DA1FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="py-10">
                                <h5 class="text-center text-xl text-gray-600 dark:text-gray-300">Severity Overview</h5>
                                <div class="mt-2 flex justify-center gap-4">
                                    <h3 class="text-3xl font-bold text-gray-700 dark:text-white">Week</h3>
                                </div>
                            </div>
                            <table class="w-full text-gray-600 dark:text-gray-200">
                                <tbody>
                                    <tr>
                                        <td class="py-2">Low</td>
                                        <td class="text-gray-500">60%</td>
                                        <td>
                                            <svg class="ml-auto w-16" viewBox="0 0 68 21" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                <path
                                                    d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                                                    stroke="#4ade80" stroke-width="2" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34"
                                                        y2="15.9524" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#8AFF6C" />
                                                        <stop offset="1" stop-color="#02C751" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2">Medium</td>
                                        <td class="text-gray-500">0%</td>
                                        <td>
                                            <svg class="ml-auto w-16" viewBox="0 0 68 21" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                <path
                                                    d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                                                    stroke="#facc15" stroke-width="2" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34"
                                                        y2="15.9524" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#8AFF6C" />
                                                        <stop offset="1" stop-color="#02C751" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2">High</td>
                                        <td class="text-gray-500">40%</td>
                                        <td>
                                            <svg class="ml-auto w-16" viewBox="0 0 68 21" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                <path
                                                    d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                                                    stroke="#ef4444" stroke-width="2" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34"
                                                        y2="15.9524" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#8AFF6C" />
                                                        <stop offset="1" stop-color="#02C751" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>