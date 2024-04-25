<script setup>
import { ref } from 'vue'
import MainPageBookCards from '@/content/components/main-page/main-page-book-cards.component.vue'

const genres = ref([
  { id: 1, name: 'Romance' },
  { id: 2, name: 'Fantasy' },
  { id: 3, name: 'Science Fiction' },
  { id: 4, name: 'Mystery' },
  { id: 5, name: 'Horror' },
  { id: 6, name: 'Thriller' }
]);

const selectedGenre = ref();

const onGenreChange = () => {
  console.log(selectedGenre.value);
}
</script>

<template>
  <div class="popularity-container flex flex-column md:flex-row gap-5">
    <div class="popular-per-genre">
      <h3 class="title flex flex-column md:flex-row md:justify-content-between">
        <span class="font-bold flex md:align-self-center align-self-start ">Popular per genre</span>
        <pv-dropdown v-model="selectedGenre" :options="genres" placeholder="Select a genre" optionLabel="name" optionValue="id" @onChange="onGenreChange" class="border-0 pv-dropdown  w-14rem md:w-auto" />
      </h3>
      <div class="books flex flex-column gap-5">
        <main-page-book-cards
          v-for="book in 3"
          :key="book"
          book-cover="https://picsum.photos/id/237/200/300"
          :position="book"
          book-title="Book Title"
          book-writer="Writer"
          book-illustrator="Illustrator"
        />
      </div>
    </div>

    <div class="top-3 flex flex-column justify-content-center">
      <h3 class="title flex flex-column md:flex-row md:justify-content-between">
        <span class="font-bold flex md:align-self-center">Top 3 of today</span>
      </h3>
      <div class="books flex flex-column gap-5">
        <main-page-book-cards
          v-for="book in 3"
          :key="book"
          book-cover="https://picsum.photos/id/237/200/300"
          :position="book"
          book-genre="Genre"
          book-title="Book Title"
          book-writer="Writer"
          book-illustrator="Illustrator"
        />
      </div>
    </div>
  </div>

</template>

<style scoped>

.popular-per-genre{
  width:50%;
}

</style>