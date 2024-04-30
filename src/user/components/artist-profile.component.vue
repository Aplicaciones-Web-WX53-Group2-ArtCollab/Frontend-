<script>
import { Portfolio } from '@/user/models/portfolio.entity.js'
import { PotfolioEndpoint } from '@/user/services/portfolio-endpoint.service.js'
export default {
  name: 'the-artist-profile',
  data() {
    return {
      social_media: 'Social Media',
      illustrated_books: 'Illustrated Books',
      portfolioImage1: '',
      portfolioImage2: '',
      portfolioImage3: '',
      portfolios: [],
      portfolio: new Portfolio(),
      portfolioApiFake: new PotfolioEndpoint()
    }
  },
  async created() {
    this.portfolioApiFake.getAllPortfolios().then((response) => {
      response.data.forEach((portfolioData) => {
        const { id, reader_id, create_at, title, description, quantity, images } = portfolioData;
        if (portfolioData.id === 3) {
          this.portfolio = new Portfolio(id, reader_id, create_at, title, description, quantity, images);
          this.portfolioImage1 = images.image_1;
          this.portfolioImage2 = images.image_2;
          this.portfolioImage3 = images.image_3;
        }
      });
    }).catch((error) => {
      console.error('Error fetching portfolios:', error);
    });
  }
}

</script>

<template>
  <div class="artist-profile" aria-label="Artist profile">
    <div class="banner" aria-label="Artist banner">
      <div class="banner-background"></div>
      <div class="profile-image">
        <img
          src="https://github.com/Aplicaciones-Web-WX53-Group2-ArtCollab/Frontend-/blob/bounded-context/content/src/assets/images/artist-profile-image.png?raw=true"
          width="496" alt="Artist profile image">
        <div class="text">Miriam Bonastre</div>
      </div>
    </div>
    <div class="flexbox-container" aria-label="Artist information container">
      <div class="flex-item" aria-label="Artist social media and books">
        <div class="social-media" aria-label="Artist social media">
          <div class="media-title">{{ $t('artistProfile.social_media') }}</div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/x-logo.png" alt="X logo">
            <a href="https://www.x.com/" target="_blank"><p> https://www.x.com/ </p></a>
          </div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/instagram-logo.png" alt="Instagram logo">
            <a href="https://www.instagram.com/" target="_blank"><p> https://www.instagram.com/</p></a>
          </div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/facebook-logo.png" alt="Facebook logo">
            <a href="https://www.facebook.com/" target="_blank"><p>https://www.facebook.com/</p></a>
          </div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/tiktok-logo.png" alt="Tiktok logo">
            <a href="https://www.tiktok.com/" target="_blank"><p>https://www.tiktok.com/</p></a>
          </div>
        </div>
        <div class="artist-books" aria-label="Artist books">
          <div class="artist-books-title">{{ $t('artistProfile.illustrated_books') }}</div>
          <div class="flex-container-2">
            <img class="normal-image"
                 src="https://github.com/Aplicaciones-Web-WX53-Group2-ArtCollab/Frontend-/blob/bounded-context/content/src/assets/images/marionetta-cover.png?raw=true"
                 alt="Book 1 image">
            <p>Marionetta</p>
          </div>
          <div class="flex-container-2">
            <img class="normal-image"
                 src="https://github.com/Aplicaciones-Web-WX53-Group2-ArtCollab/Frontend-/blob/bounded-context/content/src/assets/images/hooky-cover.png?raw=true"
                 alt="Book 2 image">
            <p>Hooky</p>
          </div>
        </div>
      </div>
      <div class="flex-item" aria-label="Artist biography and portfolio">
        <div class="bio" aria-label="Biography">
          <div class="bio-title" aria-label="Biography title">Bio</div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mauris ornare malesuada himenaeos eleifend morbi,
              vivamus nostra faucibus platea nisl nec lacinia hendrerit ultricies id maecenas diam. Eget vel aliquet nam
              penatibus vulputate felis dapibus magnis montes auctor ut, augue placerat praesent class condimentum
              litora eros sociis iaculis.</p>
          </div>
        </div>
        <div class="portfolio" aria-label="Artist portfolio">
          <div class="portfolio-title">{{ $t('artistProfile.portfolio') }}</div>
          <div class="flex-container">
            <img class="normal-image" :src="portfolioImage1" alt="Portfolio first image">
            <img class="normal-image" :src="portfolioImage2" alt="Portfolio first image">
            <img class="large-image" :src="portfolioImage3" alt="Portfolio first image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.banner {
  position: relative;
}

.banner-background {
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 40vh; /* Altura del 75% del viewport height */
  background-color: #f8cd7c;
  z-index: 1; /* z-index menor para que esté detrás del otro fondo */
}

.profile-image img {
  position: relative;
  z-index: 1; /* z-index menor para que la imagen esté detrás del texto */
}

.text {
  position: relative;
  color: black;
  font: bold 30px/30px Archivo, sans-serif;
  z-index: 2; /* z-index mayor para que el texto esté delante de la imagen */
  top: -10%;
}

.flexbox-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
}

/* Estilos para los elementos flex dentro del contenedor */
.flex-item {
  padding: 10px;
  max-width: 60vw;
  font: 20px/30px Archivo, sans-serif;
  color: black;
}

.profile-image {
  position: relative; /* Asegúrate de que .elemento tenga una posición que no sea 'static' para que z-index funcione */
  text-align: center;
  padding: 20px;
  z-index: 3; /* z-index aún mayor para que esté delante de ambos fondos */
}

.flex-container-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 20vw;
  margin: 15px 0 15px 0;
}

.flex-container img {
  margin-right: 10px; /* Espacio entre las cajas */
  margin-bottom: 10px; /* Espacio entre las cajas */
  margin-top: 10px; /* Espacio entre las cajas */
}

.small-image {
  width: 10%; /* Ajusta el ancho según tus necesidades */
  height: auto; /* Mantiene la proporción de la imagen */
  margin: 10px 10px 10px 0;
}

.normal-image {
  width: 25%; /* Ajusta el ancho según tus necesidades */
  height: auto; /* Mantiene la proporción de la imagen */
  margin: 10px 10px 10px 0;
}

.large-image {
  width: 30%; /* Ajusta el ancho según tus necesidades */
  height: auto; /* Mantiene la proporción de la imagen */
}

.bio {
  margin-top: 20px;
}

.bio-title {
  font-weight: 600; /* Semibold */
  margin-bottom: 10px;
}

.portfolio {
  margin-top: 20px;
}

.portfolio-title {
  font-weight: 600; /* Semibold */
}

.media-title {
  font-weight: 600; /* Semibold */
}

.artist-books {
  margin-top: 20px;
}

.artist-books-title {
  font-weight: 600; /* Semibold */
}

.flex-container p {
  display: flex;
  justify-content: center;
}

.flex-container-2 a {
  display: flex;
  justify-content: center;
  color: black;
  text-decoration: underline;
}

@media (width <= 540px) {
  .profile-image img {
    width: 350px;
  }

  .social-media p {
    font-size: 10px;
  }

  .bio p {
    font-size: 10px;
  }

  .banner-background {
    height: 35vh;
  }
}

@media (width <= 430px) {
  .profile-image img {
    width: 330px;
  }

  .social-media p {
    font-size: 8px;
  }

  .bio p {
    font-size: 10px;
  }

  .banner-background {
    height: 35vh;
    width: 450px;
  }
}

@media (width <= 375px) {
  .profile-image img {
    width: 320px;
  }

  .social-media p {
    font-size: 8px;
  }

  .bio p {
    font-size: 10px;
  }

  .banner-background {
    height: 45vh;
    width: 400px;
  }
}

@media (width <= 344px) {
  .profile-image img {
    width: 300px;
  }

  .social-media p {
    font-size: 8px;
  }

  .bio p {
    font-size: 10px;
  }

  .banner-background {
    height: 30vh;
    width: 350px;
  }
}
</style>