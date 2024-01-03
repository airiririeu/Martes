<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { auth, getCurrentUser } from './firebase';
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

const authListener = auth.onAuthStateChanged(user => {
  if (route.matched.some(r => r.meta.auth)) {
    if (!user) {
      router.push("/");
    }
  } else {
    if (user) {
      router.push("/dashboard");
    }
  }
})

router.beforeEach(async (to, from, next) => {
  console.log(from);
  if (to.matched.some(record => record.meta.auth)) {
    //if not logged in go to login
    if (!await getCurrentUser()) {
      //auth.signOut(); //refreshing current user
      next('/');
    }
    else {
      next();
    }
  } else {

    if (await getCurrentUser()) {
      next("/dashboard")
    }
    else {
      next()
    }
  }
})

onMounted(() => authListener);

</script>

<template>
  <router-view></router-view>
</template>