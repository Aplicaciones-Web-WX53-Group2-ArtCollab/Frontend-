<script setup>
  import navbarContentComponent from '@/public/components/navbar-content.component.vue'
  import theUserProfileComponent from '@/user/components/the-user-profile.component.vue'
  import footerContentComponent from '@/public/components/footer-content.component.vue'

  export default {
    name: 'UserProfilePage',
  }
</script>

<template>
  <navbarContentComponent/>
  <theUserProfileComponent/>
  <footerContentComponent/>

</template>

<style scoped>

</style>