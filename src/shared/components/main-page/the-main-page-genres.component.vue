<script>
import { ref } from 'vue'
import MainPageCarousels from '@/shared/components/main-page/main-page-carousels.component.vue'
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'

export default {
  name: 'the-main-page-genres',
  components: {
    MainPageCarousels
  },
  computed: {
    romanceBooks() {
      return this.books.slice(6,10).map(book => book.imgUrl);
    },
    fantasyBooks() {
      return this.books.slice(2.6).map(book => book.imgUrl);
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
  <div class="title-container flex justify-content-center mt-5">
    <h3 class="title cursor-pointer">{{$t('genres')}} <i class="pi pi-angle-right"></i></h3>
  </div>

  <main-page-carousels title="Romance" :image="romanceBooks"/>

  <main-page-carousels :title="$t('fantasy')" :image="fantasyBooks"/>

</template>

<style scoped>

.title {
  font-weight: bold;
}
</style>