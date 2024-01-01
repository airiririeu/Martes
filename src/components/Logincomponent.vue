<template>
    <div class="bg-sky-100">
        <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
            <div class="mx-auto h-full sm:w-max">
                <div class="m-auto  py-12">
                    <div class="px-5 relative flex items-center">
                        <img src="./img/final logo.png" class="w-20 dark:hidden" alt="martes logo" />
                        <img src="./img/final logo.png" class="w-20 hidden dark:block" alt="martes logo" />
                        <h1
                            class="text-3xl group-hover:text-gray-700 dark:group-hover:text-gray-50 font-semibold text-sky-800 lg:block dark:text-gray-300">
                            MARTES
                        </h1>
                    </div>
                    <div
                        class="mt-12 rounded-3xl border bg-white dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                        <h3 class="text-2xl font-semibold text-sky-900 dark:text-white">Login to your account</h3>
                        <div class="mt-12 flex flex-wrap sm:grid gap-6">
                            <button
                                class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition ease-out duration-300 hover:bg-sky-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                                <div class="w-max mx-auto flex items-center justify-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: skyblue;transform: ;msFilter:;"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
                                    <span
                                        class="block w-max text-sm font-semibold tracking-wide text-sky-400 dark:text-white">With
                                        Google</span>
                                </div>
                            </button>

                        </div>

                        <form action="" class="mt-10 space-y-8 dark:text-white">
                            <div>
                                <div
                                    class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-600 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="email" placeholder="Email or user name"
                                        class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
                                </div>
                            </div>

                            <div class="flex flex-col items-end">
                                <div
                                    class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-600 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="password" placeholder="Password"
                                        class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
                                </div>
                                <button type="reset" class="-mr-3 w-max p-3">
                                    <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password
                                        ?</span>
                                </button>
                            </div>

                            <div>
                                <router-link to="/Dashboard"
                                    class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 transition ease-out duration-700">
                                    <span class="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                </router-link>
                                <button href="#" type="reset"
                                    class="mt-2 w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 transition ease-out duration-700">
                                    <span class="text-base font-semibold text-white dark:text-gray-900">Sign up</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="border-t pt-12 text-gray-500 dark:border-gray-800">
                        <div class="space-x-4 text-center">
                            <span>&copy; ICT1202-P Group 1</span>
                            <a href="#" class="text-sm hover:text-sky-900 dark:hover:text-gray-300">Privacy & Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>