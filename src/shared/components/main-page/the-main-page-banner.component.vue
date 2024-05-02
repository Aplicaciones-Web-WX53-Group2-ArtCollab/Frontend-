<script>
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'

export default {
  name: 'the-main-page-banner',
  data() {
    return {
      bookApiFake: new BookInternalService(),
      books: [],
    }
  },
  computed: {
    bookImages() {
      return this.books.slice(0, 5).map(book => book.imgUrl);
    }
  },
  async created() {
    this.bookApiFake.getAllBooks().then((response) => {
      response.data.forEach((bookData) => {
        const { title, description, datePublish, type, id, imgUrl, likes, views } = bookData;
        if (bookData.type === 'book') {
          this.book = new Book(title, description, datePublish, type, id, imgUrl, likes, views);
          this.books.push(this.book);
        }
      });
    }).catch((error) => {
      console.error('Error fetching books:', error);
    });
  }
}

/*TODO:
  - Cambiar las imágenes por carátulas de libros sacadas de la api
*/
</script>

<template>
  <div class="banner" aria-label="Banner de la página principal">
    <pv-galleria :value="bookImages" :numVisible="4" containerStyle="max-width: 640px"
              :showThumbnails="false" :showIndicators="true" :circular="true" :autoPlay="true" :transitionInterval="2000">
      <template #item="slotProps">
        <img :src="slotProps.item" alt="galleria image" class="w-full block banner-image cursor-pointer"  />
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

.banner-image{
  width: 300px; /* Cambia esto al ancho que desees */
  height: 500px; /* Cambia esto al alto que desees */
}

.banner::after {
  content: "";
  background-image: url('../../../assets/images/banner-background.png');
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
  height: 450px;

  margin:auto;
}

</style>