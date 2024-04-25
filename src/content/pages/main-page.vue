<script setup>
import TheMainPageBanner from '@/content/components/main-page/the-main-page-banner.component.vue'
import TheMainPageGenres from '@/content/components/main-page/the-main-page-genres.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import TheMainPagePopularity from '@/content/components/main-page/the-main-page-popularity.component.vue'
</script>

<template>
  <navbar-content/>
  <the-main-page-banner/>
  <the-main-page-genres/>
  <the-main-page-popularity/>
  <footer-content/>
</template>

<style scoped>

</style>