<script setup>
import TheMainPageBanner from '@/public/components/main-page/the-main-page-banner.component.vue'
import TheMainPageGenres from '@/public/components/main-page/the-main-page-genres.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import TheMainPagePopularity from '@/public/components/main-page/the-main-page-popularity.component.vue'
import TheMainPageRecentBook from '@/public/components/main-page/the-main-page-recent-book.component.vue'
import TheMainPagePopularArtist from '@/public/components/main-page/the-main-page-popular-artist.component.vue'
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
  <section class="main-page">
    <the-main-page-banner/>
    <the-main-page-genres/>
    <the-main-page-popularity/>
    <the-main-page-recent-book/>
    <the-main-page-popular-artist/>
  </section>
</template>

<style scoped>

</style>
