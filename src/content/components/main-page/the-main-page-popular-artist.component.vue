<script setup>
import { computed, ref } from 'vue'
import MainPageCarousels from '@/content/components/main-page/main-page-carousels.component.vue'

const popularArtists = ref([
  { id: 1, name: 'Artist 1', image: 'https://picsum.photos/id/237/200/300' },
  { id: 2, name: 'Artist 2', image: 'https://picsum.photos/id/237/200/300' },
  { id: 3, name: 'Artist 3', image: 'https://picsum.photos/id/237/200/300' },
  { id: 4, name: 'Artist 4', image: 'https://picsum.photos/id/237/200/300' },
  { id: 5, name: 'Artist 5', image: 'https://picsum.photos/id/237/200/300' },
  { id: 6, name: 'Artist 6', image: 'https://picsum.photos/id/237/200/300' }
]);

const artistImages = computed(() => popularArtists.value.map(artist => artist.image));
const artistNames = computed(() => popularArtists.value.map(artist => artist.name));

</script>

<template>
  <div class="recent-books-container mt-7">
    <main-page-carousels title="Popular Artists" :image="artistImages" :name="artistNames"/>
  </div>
</template>

<style scoped>

</style>