<!--Usage examples:-->
<!--<main-page-carousels title="Popular" :covers="popularCovers" />-->
<!--<main-page-carousels title="Romance" :covers="romanceCovers" />-->

<script setup>
import { ref } from 'vue'

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]);

defineProps({
  title: String,
  covers: Array
});
</script>

<template>
  <div class="genre-container mt-5">
    <h3 class="title cursor-pointer">{{ title }} ></h3>
    <pv-carousel :value="covers" circular :autoplayInterval="3000" :num-visible="3" :num-scroll="1" :responsive-options="responsiveOptions">
      <template #item="slotProps" >
        <div class="image-container flex justify-content-center " >
          <img :src="slotProps.data" alt="Carousel image" />
          <h3 class="alt-text">{{ slotProps.data.name }}</h3>
        </div>
      </template>
    </pv-carousel>
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
}
</style>