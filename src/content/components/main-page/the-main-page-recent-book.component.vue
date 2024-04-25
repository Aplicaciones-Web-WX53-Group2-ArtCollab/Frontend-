<script setup>
import { ref } from 'vue'
import MainPageCarousels from '@/content/components/main-page/main-page-carousels.component.vue'

const recentBooks = ref([
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]);
</script>

<template>
  <div class="recent-books-container mt-5">
    <main-page-carousels title="Recent Books" :image="recentBooks"/>
  </div>
</template>

<style scoped>

</style>