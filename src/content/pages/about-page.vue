<script setup>

import TheAbout from '@/content/components/about/the-about.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
</script>

<template>
  <navbar-content/>
  <div class="flex align-content-center justify-content-center flex-wrap py-8 my-8">
    <the-about/>
  </div>
  <footer-content/>
</template>

<style scoped>

</style>