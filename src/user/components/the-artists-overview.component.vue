<script setup>
import { ref } from 'vue';

const artist_profile_banner = ref([
  { url: 'https://picsum.photos/1440/432', name: 'Nombre del Artista 1' },
  { url: 'https://picsum.photos/1440/432', name: 'Nombre del Artista 2' },
  { url: 'https://picsum.photos/1440/432', name: 'Nombre del Artista 3' },
  { url: 'https://picsum.photos/1440/432', name: 'Nombre del Artista 4' },
  { url: 'https://picsum.photos/1440/432', name: 'Nombre del Artista 5' },
  { url: 'https://picsum.photos/1440/432', name: 'Nombre del Artista 6' }
]);

const artist_profile_images = ref([
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/237/200/300'
]);

</script>

<template>
  <section class="w-full" aria-label="Artist Overview">
    <pv-galleria :value="artist_profile_banner" :numVisible="1" :circular="true" :auto-play="true" :transition-interval="3000" :showIndicators="true" :showItemNavigators="true" :showThumbnails="false">
      <template #item="slotProps">
        <img :src="slotProps.item.url" alt="Artist Profile Banner" class="w-full md:h-full object-cover h-15rem">
      </template>
      <template #caption="slotProps">
        <div class=" md:text-xl text-sm md:mb-2 font-bold">{{ slotProps.item.name }}</div>
      </template>

    </pv-galleria>

    <div class="artists flex flex-column justify-content-center align-items-center mb-5">
      <h3 class="text-2xl font-bold mt-5 mb-5">{{$t('artists')}}</h3>
      <div class="artist-profile-images flex flex-wrap justify-content-center gap-8">
        <div v-for="(image, index) in artist_profile_images" :key="index" class="image-container md:w-3 w-8 flex justify-content-center flex-column justify-content-center">
          <img :src="image" alt="Artist Profile Image" class="carousel-image cursor-pointer">
          <label class="text-center cursor-pointer">{{ artist_profile_banner[index].name }}</label>
        </div>
      </div>
    </div>

  </section>
</template>


<style scoped>
.image-container {
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
}



</style>