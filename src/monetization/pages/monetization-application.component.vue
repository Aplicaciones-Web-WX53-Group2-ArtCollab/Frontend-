<script setup>
import NavbarContent from '../../public/components/navbar-content.component.vue';
import TheHeroMonetization from '@/monetization/components/monetization-content/the-hero-monetization.component.vue'
import TheStepsContent from '@/monetization/components/monetization-content/the-steps-content.component.vue'
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
      <the-hero-monetization/>
      <the-steps-content/>
</template>

<style scoped>


</style>