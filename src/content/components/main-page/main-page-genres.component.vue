<script setup>
import { ref } from 'vue'

const images = ref([
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]);
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
</script>

<template>
  <div class="title-container flex justify-content-center">
    <h3 class="title cursor-pointer">Genres ></h3>
  </div>
    <div class="romance-container mt-5">
      <h3 class="title cursor-pointer">Romance ></h3>
      <pv-carousel :value="images" circular :autoplayInterval="3000" :num-visible="3" :num-scroll="1" :responsive-options="responsiveOptions">
        <template #item="slotProps" >
          <div class="image-container flex justify-content-center " >
            <img :src="slotProps.data" alt="Carousel image" />
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