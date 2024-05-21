<script setup>

import NavbarContent from '@/public/components/navbar-content.component.vue'
import TheUserBooksHistorial from '@/user/components/the-user-books-historial.component.vue'
import { ref } from 'vue'

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
  <the-user-books-historial/>
</template>

<style scoped>

</style>