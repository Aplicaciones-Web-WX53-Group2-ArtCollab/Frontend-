<script setup>
import { ref } from 'vue';
import FooterContent from '@/public/components/footer-content.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import TheUserLogin from '@/user/components/the-user-login.component.vue'
import TheUserLoginEmail from '@/user/components/the-user-login-email.component.vue'
import TheArtistsOverview from '@/user/components/the-artists-overview.component.vue'

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
  <the-user-login :showLogin="showLogin" :toggleLogin="toggleLogin" @showEmailLogin="toggleEmailLogin"/>
  <the-user-login-email v-if="showEmailLogin" @back="toggleEmailLogin" />

  <the-artists-overview/>
  <footer-content/>
</template>

<style scoped>

</style>