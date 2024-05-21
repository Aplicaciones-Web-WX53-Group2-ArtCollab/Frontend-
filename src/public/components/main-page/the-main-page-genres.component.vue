<script>
import { ref } from 'vue'
import MainPageCarousels from '@/public/components/main-page/main-page-carousels.component.vue'
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'

export default {
  name: 'the-main-page-genres',
  components: {
    MainPageCarousels
  },
  computed: {
    romanceBooks() {
      return this.books.filter(book => book._genre === 'drama').map(book => book.imgUrl);
    },

    fantasyBooks() {
      return this.books.filter(book => book._genre === 'fantasía').map(book => book.imgUrl);
    }
  },
  data() {
    return {
      bookApiFake: new BookInternalService(),
      books: [],
      selectedGenre : ref(),
    }
  },
  async created() {
    this.bookApiFake.getAllBooks().then((response) => {
      response.data.forEach((bookData) => {
        const { title, description, datePublish, type, id, imgUrl, likes, views, genre } = bookData;
        if (bookData.type === 'book') {
          this.book = new Book(title, description, datePublish, type, id, imgUrl, likes, views, genre);
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
  <div class="title-container flex justify-content-center mt-5 " aria-label="libros de los géneros drama y fantasía">
    <h3 class="title cursor-pointer">{{$t('genres')}} <i class="pi pi-angle-right"></i></h3>
  </div>

  <main-page-carousels title="Drama" :image="romanceBooks"/>

  <main-page-carousels :title="$t('fantasy')" :image="fantasyBooks"/>

</template>

<style scoped>

.title {
  font-weight: bold;
}
</style>