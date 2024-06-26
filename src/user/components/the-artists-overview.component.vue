<script>
import { UserEndpointService } from '@/shared/services/user-endpoint.service.js'
import { Reader } from '@/user/models/reader.entity.js'
import { IllustrationService } from '@/shared/services/illustration.service.js'
import { Book } from '@/shared/models/book.entity.js'

export default {
  name: 'the-artists-overview',
  data() {
    return {
      userServices: new UserEndpointService(),
      contentServices: new IllustrationService(),
      artists: [],
      illustrations: [],
    };
  },
  computed: {
    artist_profile_banner() {
      return this.illustrations.slice(0, 2);
    },
    artist_profile_images() {
      return this.artists.slice(0, 5);
    }
  },
  async created() {
    this.userServices.getUsers().then((response) => {
      response.data.forEach((userData) => {
        const { name, email, username, password, type, id, imgUrl, subscription_id} = userData;
        if (userData.type === 'ilustrator') {
          this.artist = new Reader(id, name,  username, email, password, type, imgUrl, subscription_id);
          this.artists.push(this.artist);
        }
      });
    }).catch((error) => {
      console.error('Error fetching artists:', error);
    });

    this.contentServices.getAllContent().then((response) => {
      response.data.forEach((illustrationData) => {
        const { title, description, date_publish, type, likes, views, imgUrl, id,} = illustrationData;
        if (illustrationData.type === 'illustration') {
          this.illustration = new Book(title, description, date_publish, type, id, imgUrl, likes, views);
          this.illustrations.push(this.illustration);
        }
      });
    }).catch((error) => {
      console.error('Error fetching illustrations:', error);
    });

  }

}

</script>

<template>
  <section class="w-full" aria-label="Artist Overview">
    <pv-galleria :value="artist_profile_banner" :numVisible="1" :circular="true" :auto-play="true" :transition-interval="3000" :showIndicators="true" :showItemNavigators="true" :showThumbnails="false">
      <template #item="slotProps">
        <img :src="slotProps.item._imgUrl" alt="Artist Profile Banner" class="w-full md:h-full object-cover h-15rem">
      </template>
      <template #caption="slotProps">
        <div class=" md:text-xl text-sm md:mb-2 font-bold">{{ slotProps.item._title }}</div>
      </template>

    </pv-galleria>

    <div class="artists flex flex-column justify-content-center align-items-center mb-5" aria-label="Artist Gallery">
      <h3 class="text-2xl font-bold mt-5 mb-5">{{$t('artists')}}</h3>
      <div class="artist-profile-images flex flex-wrap justify-content-center gap-8">
        <div v-for="(image, index) in artist_profile_images" :key="index" class="image-container md:w-3 w-8 flex justify-content-center flex-column justify-content-center">
              <router-link :to="`/illustrator-profile/${image._id}`">
                <img :src="image._imgURL" alt="Artist Profile Image" class="carousel-image cursor-pointer">
              </router-link>
          <label class="text-center cursor-pointer">{{ image._name }}</label>
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