<script>
import FooterContent from '@/public/components/footer-content.component.vue'
import RomanceBooksCards from '@/content/components/popular-books/romance-book-card.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import GenresNavbar from '@/content/components/popular-books/the-genre-navbar.component.vue'

export default {
  name: 'the-romance-books',
  components: { GenresNavbar, NavbarContent, RomanceBooksCards, FooterContent }
}
</script>

<template>
  <navbar-content/>
  <genres-navbar class="my-5"/>
  <romance-books-cards/>
  <footer-content/>
</template>

<style scoped>

</style>