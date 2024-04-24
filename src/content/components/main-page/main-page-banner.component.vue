<script setup>
import { ref } from 'vue'

const images = ref([
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]);
/*TODO:
  - Cambiar las imágenes por carátulas de libros sacadas de la api
*/
</script>

<template>
  <div class="banner">
    <pv-carousel :value="images" circular :autoplayInterval="30000" >
      <template #item="slotProps">
        <div class="image-container">
          <img :src="slotProps.data" alt="Carousel image" />
        </div>
      </template>
    </pv-carousel>
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  position: relative;
}

.banner::after {
  content: "";
  background-image: url('src/assets/images/banner-background.png');
  background-size: cover;
  background-position: center;
  opacity: 0.5; /* Ajusta esto al nivel de opacidad que prefieras */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.banner img {
  max-width: 100%;
  height: auto;
  margin:auto;
}

</style>