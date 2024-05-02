<script>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import GenresNavbar from '@/content/components/popular-books/the-genre-navbar.component.vue'
import FantasyBooksCards from '@/content/components/popular-books/fantasy-book-card.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'

export default {
  name: 'the-fantasy-books',
  components: { FooterContent, FantasyBooksCards, GenresNavbar, NavbarContent }
}
</script>

<template>
  <navbar-content/>
  <genres-navbar class="my-5"/>
  <fantasy-books-cards/>
  <footer-content/>
</template>

<style scoped>

</style>