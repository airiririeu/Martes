<script setup lang="ts">
import { ref } from 'vue';
import { register } from "../services/RegistrationService"
import Swal from 'sweetalert2';
import { AuthErrorMessages } from '../firebase';

const email = ref("");
const password = ref("");

const doSignUp = () => {
    register(email.value, password.value).then(data => {
        if(data) {
            Swal.fire("Success", "Registration Success", "success");
        }
    }).catch(err => {
        Swal.fire("Error", AuthErrorMessages(err.code), "error")
    })
}

</script>
<template>
    <div class="bg-sky-100">
        <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
            <div class="mx-auto h-full sm:w-max">
                <div class="m-auto  py-12">
                    <div class="px-5 relative flex items-center">
                        <router-link to="/" class="grid grid-cols-2">
                            <img src="./img/final logo.png" class="w-20 dark:hidden" alt="martes logo" />
                            <img src="./img/final logo.png" class="w-20 hidden dark:block" alt="martes logo" />
                            <h1
                                class="mt-3 text-3xl group-hover:text-gray-700 dark:group-hover:text-gray-50 font-semibold text-sky-800 lg:block dark:text-gray-300">
                                MARTES
                            </h1>
                        </router-link>
                    </div>
                    <div
                        class="mt-12 rounded-3xl border bg-white dark:border-gray-700 dark:bg-gray-800 -mx-6 p-8">
                        <h3 class="text-center text-2xl font-semibold text-sky-900 dark:text-white">Sign Up</h3>
                        <div class="mt-10 space-y-8 dark:text-white">
                            <div class="px-0 md:px-72">
                                <div
                                    class="mt-6 before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-600 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="email" placeholder="Email" v-model="email"
                                        class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <div
                                    class="mt-6 before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-600 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="password" placeholder="Password" v-model="password"
                                        class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                            </div>
                            <div class="">
                                <div class="text-black font-bold py-10">
                                    <h1 class="text-4xl text-center">Terms and Conditions</h1>
                                </div>
                                <div class="">
                                    <h1 class="mb-8 text-center">
                                        These Terms and Conditions govern your use of the "Martes" browser-based threat
                                        detection plugin extension provided by OTiS Philippines Inc..<br> By installing,
                                        accessing, or using the Extension, you agree to be bound by these Terms. If you
                                        do not agree with any part of these Terms, do not use the Extension.
                                    </h1>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Extension License and Use
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        <span class="font-bold">a. License Grant:</span> We grant you a limited,
                                        non-exclusive, non-transferable, revocable license to download, install, and use
                                        the Extension for personal, <br>non-commercial use in accordance with these Terms.
                                        <br><br><span class="font-bold">b. Restrictions:</span> You agree not to reverse
                                        engineer, modify, distribute, sublicense, sell, or exploit the Extension for any
                                        unauthorized purposes.
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Privacy and Data Collection
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        <span class="font-bold">a. Privacy Policy:</span> Your use of the Extension is
                                        subject to our Privacy Policy, which outlines how we collect, use, and protect your
                                        personal information. <br>By using the Extension, you consent to the collection and
                                        use
                                        of your data as described in our Privacy Policy.
                                        <br><br><span class="font-bold">b. Data Security:</span> We employ reasonable
                                        security measures to protect your data; however, we cannot guarantee absolute
                                        security.<br> You understand and acknowledge the inherent risks of transmitting data
                                        over the internet.
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Threat Detection and Limitations
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        <span class="font-bold">a. Threat Detection:</span> The Extension aims to detect and
                                        mitigate certain threats while browsing. However, it may not detect all threats,
                                        <br>and
                                        we do not guarantee that the Extension is error-free or that it will identify all
                                        potential risks.
                                        <br><br><span class="font-bold">b. Limitation of Liability:</span> To the maximum
                                        extent permitted by law, we shall not be liable for any direct, indirect,
                                        incidental, special, consequential, <br>or punitive damages arising from your use or
                                        inability to use the Extension, including but not limited to loss of data, revenue,
                                        or profits.
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Updates and Modifications
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        <span class="font-bold">a. Updates:</span> We may update, modify, or discontinue the
                                        Extension at any time without prior notice. Updates may include new features, bug
                                        fixes, <br>or changes in functionality.
                                        <br><br><span class="font-bold">b. Continued Use:</span> Your continued use of the
                                        Extension following any modifications constitutes your acceptance of such changes.
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Termination
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        <span class="font-bold">a. Termination by User:</span> You may uninstall the
                                        Extension at any time. Upon termination, these Terms will also terminate.
                                        <br><br><span class="font-bold">b. Termination by Us:</span> We reserve the right to
                                        terminate or suspend your access to the Extension at our discretion, without prior
                                        notice, <br>if we believe you have violated these Terms or for any other reason.
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Governing Law
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        These Terms shall be governed by and construed following the law, without regard to its conflict of law provisions.
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Contact Information
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        If you have any questions or concerns regarding these Terms or the system, please contact us at <span class="font-bold">martes.pr21@gmail.com</span>
                                    </div>
                                    <h2 class="text-2xl text-sky-600 font-bold">
                                        Entire Agreement
                                    </h2>
                                    <div class="text-base mx-7 my-4">
                                        These Terms constitute the entire agreement between you and us regarding the Extension and supersede any prior agreements or understandings.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="button" @click="doSignUp"
                                    class="w-full mt-2 rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 transition ease-out duration-700">
                                    <span class="text-base font-semibold text-white dark:text-gray-900">Sign up</span>
                                </button>
                            </div>
                        </div>
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
</div></template>