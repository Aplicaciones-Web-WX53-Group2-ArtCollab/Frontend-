<script >

import GenresNavbar from '@/content/components/popular-books/the-genre-navbar.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import AllBooksCards from '@/content/components/popular-books/all-book-card.component.vue'
export default {
  name:'genres-application',
  components:{ AllBooksCards, NavbarContent,GenresNavbar,FooterContent }
}
</script>

<template>
  <navbar-content/>
  <genres-navbar class="my-5"/>
  <main>
    <router-view></router-view>
  </main>
  <all-books-cards/>
  <footer-content/>
</template>

<style scoped>

</style>