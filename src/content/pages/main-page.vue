<script setup>
import TheMainPageBanner from '@/content/components/main-page/the-main-page-banner.component.vue'
import TheMainPageGenres from '@/content/components/main-page/the-main-page-genres.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import TheMainPagePopularity from '@/content/components/main-page/the-main-page-popularity.component.vue'
import TheMainPageRecentBook from '@/content/components/main-page/the-main-page-recent-book.component.vue'
import TheMainPagePopularArtist from '@/content/components/main-page/the-main-page-popular-artist.component.vue'
</script>

<template>
  <section class="main-page">
    <navbar-content/>
    <the-main-page-banner/>
    <the-main-page-genres/>
    <the-main-page-popularity/>
    <the-main-page-recent-book/>
    <the-main-page-popular-artist/>
    <footer-content/>
  </section>
</template>

<style scoped>

</style>

<!--TODO: i18n for main page-->