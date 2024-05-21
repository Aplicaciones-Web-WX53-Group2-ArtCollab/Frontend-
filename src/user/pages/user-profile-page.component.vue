<script setup>
  import NavbarContent from '@/public/components/navbar-content.component.vue'
  import theUserProfileComponent from '@/user/components/the-user-profile.component.vue'
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
  <theUserProfileComponent/>

</template>

<style scoped>

</style>