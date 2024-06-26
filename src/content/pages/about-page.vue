<script setup>

import TheAbout from '@/content/components/about/the-about.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
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
  <div class="flex align-content-center justify-content-center flex-wrap py-8 my-8">
    <the-about/>
  </div>
</template>

<style scoped>

</style>