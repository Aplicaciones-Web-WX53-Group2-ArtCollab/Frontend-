<script setup>

import TheBookDetailsEditToolbar from '@/content/components/details-edit/the-book-details-edit-toolbar.component.vue'
import TheBookDetailsEditCover from '@/content/components/details-edit/the-book-details-edit-cover.component.vue'
import TheBookDetailsEditTabview from '@/content/components/details-edit/the-book-details-edit-tabview.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
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
  <the-book-details-edit-toolbar/>
  <div class="flex flex-row flex-wrap justify-content-center gap-8 mb-7">
    <div class="flex justify-content-center align-items-center">
      <the-book-details-edit-cover/>
    </div>
    <div class="flex align-items-center justify-content-center shadow-1 p-5">
      <the-book-details-edit-tabview/>
    </div>
  </div>
  <footer-content/>
</template>

<style scoped>

</style>