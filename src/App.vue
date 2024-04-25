<script setup>

import GenresNavbar from '@/genres/components/the-navbar.component.vue'
import RomanceBooksCards from '@/genres/components/romance-book-card.component.vue'
import router from '@/router.js'
</script>

<template>

  <genres-navbar/>

  <main>
  <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
