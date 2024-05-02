<script setup>
  import navbarContentComponent from '@/public/components/navbar-content.component.vue'
  import footerContentComponent from '@/public/components/footer-content.component.vue'
  import theUserConfigurationComponent from '../components/the-user-configuration.component.vue';
  export default {
    name: 'artistConfigurationPage',
  }
</script>

<template>
  <navbarContentComponent/>
  <theUserConfigurationComponent/>
  <footerContentComponent/>

</template>

<style scoped>

</style>