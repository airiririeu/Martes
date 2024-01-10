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
                            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="transform: ;msFilter:;">
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
                            class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-800 to-sky-400 px-4 py-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                style="fill: white;transform: ;msFilter:;">
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
                <button type="button" @click="doLogout"
                    class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
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
                    <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">Settings</h5>
                    <button class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div class="flex space-x-4">
                    </div>
                </div>
            </div>
            <div class="px-6 pt-6 2xl:container"> <!--CONTENT-->
                <div
                    class="h-screen space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div class="grid grid-rows-3 grid-cols-4 gap-4">
                        <div class="w-40">
                            <ul class="mt-10 space-y-2 tracking-wide">
                                <li>
                                    <router-link to="/account_settings"
                                        class="relative flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                        <span class="text-black dark:group-hover:text-gray-50">Account</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="grid grid-rows-subgrid gap-4 row-span-3 col-span-3"> <!--SUBSPANNN!!!-->
                            <form action="" class="space-y-8 dark:text-white">
                                <div class="mr-20">
                                    <div class="text-black font-bold py-10">
                                        <h1 class="text-4xl">Terms and Conditions</h1>
                                    </div>
                                    <div>
                                        <h1 class="mb-8">
                                            These Terms and Conditions govern your use of the "Martes" browser-based threat
                                            detection plugin extension provided by OTiS Philippines Inc.. By installing,
                                            accessing, or using the Extension, you agree to be bound by these Terms. If you
                                            do not agree with any part of these Terms, do not use the Extension.
                                        </h1>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Extension License and Use
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            <span class="font-bold">a. License Grant:</span> We grant you a limited,
                                            non-exclusive, non-transferable, revocable license to download, install, and use
                                            the Extension for personal, non-commercial use in accordance with these Terms.
                                            <br><br><span class="font-bold">b. Restrictions:</span> You agree not to reverse
                                            engineer, modify, distribute, sublicense, sell, or exploit the Extension for any
                                            unauthorized purposes.
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Privacy and Data Collection
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            <span class="font-bold">a. Privacy Policy:</span> Your use of the Extension is
                                            subject to our Privacy Policy, which outlines how we collect, use, and protect
                                            your
                                            personal information. <br>By using the Extension, you consent to the collection
                                            and
                                            use
                                            of your data as described in our Privacy Policy.
                                            <br><br><span class="font-bold">b. Data Security:</span> We employ reasonable
                                            security measures to protect your data; however, we cannot guarantee absolute
                                            security.<br> You understand and acknowledge the inherent risks of transmitting
                                            data
                                            over the internet.
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Threat Detection and Limitations
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            <span class="font-bold">a. Threat Detection:</span> The Extension aims to detect
                                            and
                                            mitigate certain threats while browsing. However, it may not detect all threats,
                                            <br>and
                                            we do not guarantee that the Extension is error-free or that it will identify
                                            all
                                            potential risks.
                                            <br><br><span class="font-bold">b. Limitation of Liability:</span> To the
                                            maximum
                                            extent permitted by law, we shall not be liable for any direct, indirect,
                                            incidental, special, consequential, <br>or punitive damages arising from your
                                            use or
                                            inability to use the Extension, including but not limited to loss of data,
                                            revenue,
                                            or profits.
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Updates and Modifications
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            <span class="font-bold">a. Updates:</span> We may update, modify, or discontinue
                                            the
                                            Extension at any time without prior notice. Updates may include new features,
                                            bug
                                            fixes, <br>or changes in functionality.
                                            <br><br><span class="font-bold">b. Continued Use:</span> Your continued use of
                                            the
                                            Extension following any modifications constitutes your acceptance of such
                                            changes.
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Termination
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            <span class="font-bold">a. Termination by User:</span> You may uninstall the
                                            Extension at any time. Upon termination, these Terms will also terminate.
                                            <br><br><span class="font-bold">b. Termination by Us:</span> We reserve the
                                            right to
                                            terminate or suspend your access to the Extension at our discretion, without
                                            prior
                                            notice, <br>if we believe you have violated these Terms or for any other reason.
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Governing Law
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            These Terms shall be governed by and construed following the law, without regard
                                            to its conflict of law provisions.
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Contact Information
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            If you have any questions or concerns regarding these Terms or the system,
                                            please contact us at <span class="font-bold">martes.pr21@gmail.com</span>
                                        </div>
                                        <h2 class="text-2xl text-sky-600 font-bold">
                                            Entire Agreement
                                        </h2>
                                        <div class="text-base mx-7 my-4">
                                            These Terms constitute the entire agreement between you and us regarding the
                                            Extension and supersede any prior agreements or understandings.
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="w-40">
                            <ul class="mt-5 space-y-2 tracking-wide">
                                <li>
                                    <router-link to="/advanced_settings"
                                        class="relative group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                        <span
                                            class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Advanced</span>
                                    </router-link>
                                </li>
                            </ul>
                    </div>
                    <div class="w-60">
                        <ul class="space-y-2 tracking-wide">
                            <li>
                                <router-link to="/terms_and_conditions"
                                    class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-800 to-sky-400 px-4 py-3 text-white">
                                    <span class="text-white dark:group-hover:text-gray-50 font-bold">Terms &
                                        Conditions</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body></template>