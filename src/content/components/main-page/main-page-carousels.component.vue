<!--Usage examples:-->
<!--<main-page-carousels title="Popular" :covers="popularCovers" />-->
<!--<main-page-carousels title="Romance" :covers="romanceCovers" />-->

<script>
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

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: Array,
      required: true
    },
    name: {
      type: Array,
      required: false
    }
  },
  setup() {
    return { responsiveOptions }
  }
}
</script>

<template>
  <div class="genre-container mt-7">
    <h3 class="title cursor-pointer">{{ title }} <i class="pi pi-angle-right"></i> </h3>
    <pv-carousel :value="image" circular :autoplayInterval="3000" :num-visible="3" :num-scroll="1" :responsive-options="responsiveOptions">
      <template #item="slotProps" >
        <div class="image-container flex justify-content-center " >
          <img :src="slotProps.data" alt="Carousel image" class="carousel-image"/>
        </div>
        <p v-if="name" class="alt-text flex justify-content-center">{{ name[slotProps.index] }}</p>
      </template>
    </pv-carousel>
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
}
</style>