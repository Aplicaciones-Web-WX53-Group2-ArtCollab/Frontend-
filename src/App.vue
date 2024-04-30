<script setup>
import FooterContent from '@/public/components/footer-content.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'

import TheArtistsOverview from '@/user/components/the-artists-overview.component.vue'
import { ref } from 'vue'
import TheUserRegister from '@/user/components/the-user-register.component.vue'

const showLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión
const showEmailLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión con correo electrónico

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showLogin
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showEmailLogin

</script>

<template>
  <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                  @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
  <the-user-register/>
  <footer-content/>
</template>

<style scoped>

</style>
