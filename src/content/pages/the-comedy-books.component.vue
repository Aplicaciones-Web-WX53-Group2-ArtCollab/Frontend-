<script>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import GenresNavbar from '@/content/components/popular-books/the-genre-navbar.component.vue'
import ComedyBooksCards from '@/content/components/popular-books/comedy-books-card.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'

export default {
  name: 'the-comedy-books',
  components: { FooterContent, ComedyBooksCards, GenresNavbar, NavbarContent }
}
</script>

<template>
  <navbar-content/>
  <genres-navbar class="my-5"/>
  <comedy-books-cards/>
  <footer-content/>
</template>

<style scoped>

</style>