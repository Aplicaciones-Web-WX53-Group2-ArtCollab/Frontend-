<script setup>
import RomanceBooksCards from '@/content/components/popular-books/romance-book-card.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import GenresNavbar from '@/content/components/popular-books/the-genre-navbar.component.vue'
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
  <genres-navbar class="my-5"/>
  <romance-books-cards/>
</template>

<style scoped>

</style>