<script>
import MainPageCarousels from '@/public/components/main-page/main-page-carousels.component.vue'
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'

export default {
  name: 'the-main-page-recent-book',
  components: {
    MainPageCarousels
  },
  computed: {
    recentBooks() {
      return this.books
        .slice()
        .sort((a, b) => new Date(b._datePublish) - new Date(a._datePublish))
        .slice(6, 12).map(book => book.imgUrl);
    }
  },
  data() {
    return {
      bookApiFake: new BookInternalService(),
      books: [],
    }
  },

  async created() {
    this.bookApiFake.getAllBooks().then((response) => {
      response.data.forEach((bookData) => {
        const { title, description, datePublish, type, id, imgUrl, likes, views } = bookData;
        if (bookData.type === 'book') {
          this.book = new Book(title, description, datePublish, type, id, imgUrl, likes, views);
          this.books.push(this.book);
        }
      });
    }).catch((error) => {
      console.error('Error fetching books:', error);
    });
  }
}

</script>

<template>
  <div class="recent-books-container mt-5" aria-label="Sección de libros recientes">
    <main-page-carousels :title="$t('recent_books')" :image="recentBooks"/>
  </div>
</template>

<style scoped>

</style>