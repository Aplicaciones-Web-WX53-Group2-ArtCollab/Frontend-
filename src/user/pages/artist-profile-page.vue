<script setup>
import ArtistProfileComponent from '@/user/components/artist-profile.component.vue'
import TheUserLogin from '@/user/components/the-user-login.component.vue'
import TheUserLoginEmail from '@/user/components/the-user-login-email.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import { ref } from 'vue'

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
  <artist-profile-component/>
  <footer-content/>
</template>

<style scoped>

</style>