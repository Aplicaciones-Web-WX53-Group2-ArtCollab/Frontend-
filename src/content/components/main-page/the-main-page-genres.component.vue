<script setup>
import { ref } from 'vue'
import MainPageCarousels from '@/content/components/main-page/main-page-carousels.component.vue'

const romance_covers = ref([
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]);

const fantasy_covers = ref([
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]);

//TODO: Cambiar las imágenes por carátulas de libros sacadas de la api

</script>

<template>
  <div class="title-container flex justify-content-center">
    <h3 class="title cursor-pointer">Genres ></h3>
  </div>

  <main-page-carousels title="Romance" :covers="romance_covers"/>

  <main-page-carousels title="Fantasy" :covers="fantasy_covers"/>


</template>

<style scoped>

.title {
  font-weight: bold;
}
</style>