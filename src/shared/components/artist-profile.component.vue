<script>
import { Reader } from '@/user/models/reader.entity.js'
import { UserEndpointService } from '@/user/services/user-endpoint.service.js'
import { IllustrationService } from '@/shared/services/illustration.service.js'
export default {
  name: 'the-artist-profile',
  data() {
    return {
      reader: new Reader(),
      illustrations: []
    }
  },
  created() {
    const userService = new UserEndpointService();
    userService.getUserById(3).then((response) => {
      this.reader._id = response.data.id;
      this.reader._name = response.data.name;
      this.reader._imgURL = response.data.imgUrl;
    }).catch((error) => {
      console.error('Error fetching user:', error);
    });
    const illustrationService = new IllustrationService();
    illustrationService.getAllContent().then((response) => {
      this.illustrations = response.data.filter(illustration => illustration.author_id === Number(this.reader._id));
    }).catch((error) => {
      console.error('Error fetching illustrations:', error);
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
          :src="reader._imgURL"
          width="496" alt="Artist profile image">
        <div class="connect-button">
          <pv-button class="bg-yellow-500 border-transparent px-6 py-2 lg:mr-8 md:mr-8">Conectar</pv-button>
        </div>
        <div class="text">{{ reader._name }}</div>
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
            <div class="illustrations-container">
              <img :class="index === illustrations.length - 1 ? 'large-image' : 'normal-image'" v-for="(illustration, index) in illustrations" :key="illustration.id" :src="illustration.imgUrl" alt="Illustration Image">
            </div>
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
  height: 40vh;
  background-color: #f8cd7c;
  z-index: 1;
}

.profile-image img {
  position: relative;
  z-index: 1;
}

.connect-button {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 30rem;
  z-index: 2;
}

.text {
  position: relative;
  color: black;
  font: bold 30px/30px Archivo, sans-serif;
  z-index: 2;
  top: -10%;
}

.flexbox-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
}

.flex-item {
  padding: 10px;
  max-width: 60vw;
  font: 20px/30px Archivo, sans-serif;
  color: black;
}

.profile-image {
  position: relative;
  text-align: center;
  padding: 20px;
  z-index: 3;
}

.flex-container-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 20vw;
  margin: 15px 0 15px 0;
}

.flex-container img {
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.small-image {
  width: 10%;
  height: auto;
  margin: 10px 10px 10px 0;
}

.normal-image {
  width: 25%;
  height: auto;
  margin: 10px 10px 10px 0;
}

.large-image {
  width: 30%;
  height: auto;
}

.bio {
  margin-top: 20px;
}

.bio-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.portfolio {
  margin-top: 20px;
}

.portfolio-title {
  font-weight: 600;
}

.media-title {
  font-weight: 600;
}

.artist-books {
  margin-top: 20px;
}

.artist-books-title {
  font-weight: 600;
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

.illustrations-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (min-width: 1024px) {
  .flex-container {
    flex-direction: row;
  }
}

@media (width <= 540px) {
  .profile-image img {
    width: 350px;
  }

  .social-media p {
    font-size: 10px;
    max-width: 2rem;
  }

  .bio p {
    font-size: 10px;
  }

  .banner-background {
    height: 35vh;
  }

  .connect-button {
    margin-top: 25rem;
    margin-right: 7rem;
  }

  .banner {
    margin-bottom: 2rem;
  }

  .small-image {
    width: 40%;
    height: auto;
  }

  .flex-container-2 {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-container-2 p {
    font-size: 10px;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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