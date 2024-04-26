<script setup>
import { ref } from 'vue';
import FooterContent from '@/public/components/footer-content.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import UserLogin from '@/user/components/user-login.component.vue'
import UserLoginEmail from '@/user/components/user-login-email.component.vue'

const showLogin = ref(false);
const showEmailLogin = ref(false);

const toggleLogin = () => {
  showLogin.value = !showLogin.value;
};

const toggleEmailLogin = () => {
  showEmailLogin.value = !showEmailLogin.value;
};

</script>

<template>
  <navbar-content :showLogin="showLogin" :toggleLogin="toggleLogin" />
  <user-login :showLogin="showLogin" :toggleLogin="toggleLogin" @showEmailLogin="toggleEmailLogin"/>
  <user-login-email v-if="showEmailLogin" @back="toggleEmailLogin" />
  <user-recover-password/>
  <footer-content/>
</template>

<style scoped>

</style>