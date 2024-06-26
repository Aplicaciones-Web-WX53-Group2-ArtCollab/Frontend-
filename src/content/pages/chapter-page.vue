<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import { ref } from 'vue'
import TheChapter from '@/content/components/chapter/the-chapter.component.vue'
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
  <navbar-content/>
    <the-chapter/>
</template>

<style scoped>

</style>