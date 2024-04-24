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
    <pv-galleria :value="images" :numVisible="4" containerStyle="max-width: 640px"
              :showThumbnails="false" :showIndicators="true" :circular="true" :autoPlay="true" :transitionInterval="2000">
      <template #item="slotProps">
        <img :src="slotProps.item" alt="galleria image" class="w-full block" />
      </template>
    </pv-galleria>
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
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
.banner img {
  max-width: 100%;
  height: auto;
  margin:auto;
}

</style>