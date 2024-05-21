<script setup>
import NavbarContent from '../../public/components/navbar-content.component.vue'
import TheHeroSubscription from '@/monetization/components/subscripton-content/the-hero-subscription.component.vue'
import TheCoinSection from '@/monetization/components/subscripton-content/the-coin-section.component.vue'
import { ref } from 'vue'


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
  <div class="mt-1 my-4" aria-label="the subscription app section">
    <the-hero-subscription aria-label="the hero subscription content "/>
    <the-coin-section aria-label="the coin section content"/>
  </div>
</template>

<style scoped>

</style>