<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'

import { ref } from 'vue'
import TheUserRegister from '@/user/components/the-user-register.component.vue'

const showLogin = ref(false);
const showEmailLogin = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
};

</script>

<template>
  <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                  @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
  <the-user-register/>
</template>

<style scoped>

</style>
