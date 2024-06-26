<script setup>
import RomanceBooksCards from '@/content/components/popular-books/romance-book-card.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import GenresNavbar from '@/content/components/popular-books/the-genre-navbar.component.vue'
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
  <genres-navbar class="my-5"/>
  <romance-books-cards/>
</template>

<style scoped>

</style>