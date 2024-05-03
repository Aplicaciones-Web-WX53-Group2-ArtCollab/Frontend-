<script>
import { ref } from 'vue'
import MainPageBookCards from '@/shared/components/main-page/main-page-book-cards.component.vue'
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'

export default {
  name: 'the-main-page-popularity',
  components: {
    MainPageBookCards
  },
  computed: {
    booksPopularPerGenre() {
      return this.books.slice()
        .filter(book => book._genre === this.currentGenre)
        .sort((a, b) => b._views - a._views)
        .slice(0, 3)
    },

    booksTop3() {
    return this.books.slice()
        .sort((a, b) => b._views - a._views)
        .slice(0, 3);
    }
  },
  data() {
    return {
      bookApiFake: new BookInternalService(),
      currentGenre: 'drama',
      books: [],
      selectedGenre : ref(),
      genres : ref([
        { id: 'drama', name: 'Drama' },
        { id: 'fantasía', name: 'Fantasía' },
      ])
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
  },
  methods: {
    onGenreChange(){
      this.currentGenre = this.selectedGenre;
    }
  },

}

</script>

<template>
  <div class="popularity-container flex flex-column md:flex-row gap-5 mt-5" aria-label="Sección de libros populares">
    <div class="popular-per-genre">
      <h3 class="title flex flex-column md:flex-row md:justify-content-between h-4rem">
        <span class="font-bold flex md:align-self-center align-self-start ">{{$t('popular_per_genre')}}</span>
        <pv-dropdown v-model="selectedGenre" :options="genres" :placeholder="$t('select_genre')" optionLabel="name" optionValue="id" @change="onGenreChange" class="border-0 pv-dropdown  w-14rem md:w-auto" aria-label="Seleccionar género de libro"/>
      </h3>
      <div class="books flex flex-column gap-5">
        <main-page-book-cards
          v-for="(book, index) in booksPopularPerGenre"
          :key="book"
          :book-cover="book._imgUrl"
          :position="index+1"
          :book-title="book._title"
          book-writer="Writer"
          book-illustrator="Illustrator"
          aria-label="Tarjeta de libro popular por género"
        />
      </div>
    </div>

    <div class="top-3">
      <h3 class="title flex flex-column md:flex-row md:justify-content-between h-4rem">
        <span class="font-bold flex md:align-self-center">{{$t('top_3')}}</span>
      </h3>
      <div class="books flex flex-column gap-5">
        <main-page-book-cards
          v-for="(book, index) in booksTop3"
          :key="book"
          :book-cover="book._imgUrl"
          :position="index+1"
          :book-genre="book._genre"
          :book-title="book._title"
          book-writer="Writer"
          book-illustrator="Illustrator"
          aria-label="Tarjeta de libro popular"
        />
      </div>
    </div>
  </div>

</template>

<style scoped>

.pv-dropdown{
  height: 3rem;
}

.popular-per-genre{
  width:50%;
}

</style>