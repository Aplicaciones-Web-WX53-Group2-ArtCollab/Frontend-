<script>
import MainPageCarousels from '@/shared/components/main-page/main-page-carousels.component.vue'
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'
import { UserEndpointService } from '@/shared/services/user-endpoint.service.js'
import { Reader } from '@/shared/models/reader.entity.js'

export default {
  name: 'the-main-page-popular-artist',
  components: {
    MainPageCarousels
  },
  computed: {
    popularArtistsImages() {
      return this.artists.slice(0, 5).map(artist => artist._imgURL);
    },
    popularArtistsNames() {
      return this.artists.slice(0, 5).map(artist => artist._name);
    }
  },
  data() {
    return {
      userApiFake: new UserEndpointService(),
      artists: [],
    }
  },

  async created() {
    this.userApiFake.getUsers().then((response) => {
      response.data.forEach((userData) => {
        const { name, email, username, password, type, id, imgUrl, subscription_id} = userData;
        if (userData.type === 'artist') {
          this.artist = new Reader(id, name,  username, email, password, type, imgUrl, subscription_id);
          this.artists.push(this.artist);
          console.log(this.artists);
        }
      });
    }).catch((error) => {
      console.error('Error fetching artists:', error);
    });
  }
}

</script>

<template>
  <div class="recent-books-container mt-7">
    <main-page-carousels :title="$t('popular_artists')" :image="popularArtistsImages" :name="popularArtistsNames" height="300px" width="300px"/>
  </div>
</template>

<style scoped>

</style>