<template>
  <div class="book-detail">
    <div class="book-header">
      <img src="https://fake-book-store-api.onrender.com/images/P1zL9oX.jpg" alt="Book cover" class="book-image">
      <div class="book-info">
        <h1 class="book-name">When the Moon Hatched</h1>
        <p class="author-name">Flor M. Salvador</p>
      </div>
    </div>
    <div class="book-content">
      <div class="chapter-container">
        <h3>Tabla de contenidos</h3>
        <ul>
          <li><span>Prólogo</span> <i class="pi pi-heart-fill"> 100k</i></li>
          <li v-for="n in 10" :key="n"><span>Capítulo {{ n }}</span> <i class="pi pi-lock"></i> <i class="pi pi-heart-fill"> 100k</i></li>
        </ul>
      </div>
      <div class="right-section">
        <div class="stats-container">
          <i class="pi pi-eye"> 33M</i>
          <i class="pi pi-heart-fill"> 15M</i>
        </div>
        <div class="description-container">
          <p>The Creators did not expect their beloved dragons to sail skyward upon their end. To curl into balls just beyond gravity’s grip, littering the sky with tombstones. With moons.</p>
        </div>
        <button class="chapter-button">Capítulo seleccionado <i class="pi pi-dollar"> 5</i> <i class="pi pi-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'book-profile',

}
</script>

<style scoped>
.book-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.book-header {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
  text-align: center;
}

.book-image {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px; /* Espacio entre la imagen y el texto */
  position: relative;
  z-index: 2;
}

.book-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.book-name, .author-name {
  justify-content: flex-start;
}

.book-name {
  margin: 0;
}

.author-name {
  margin-top: 10px;
  font-style: italic;
}

.book-content {
  z-index: 1;
  display: flex;
  height: 100%;
  width: 80%;
  background-color: rgba(176, 224, 230, 0.5); /* Light turquoise with increased transparency */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.right-section, .chapter-container {
  flex: 1;
  padding: 20px;

}

.chapter-container {
  background-color: rgba(0, 128, 128, 0.5); /* Dark turquoise with increased transparency */
  color: black; /* Changed text color to black */
}

.chapter-list h3 {
  margin-bottom: 10px; /* Space under the title */
}

.chapter-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.chapter-list li {
  margin-bottom: 100px; /* Increased space between chapters */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px
}

.description-container{
  margin: 50px;
}
.stats-container{
  margin-left: 50px;
}
.pi-lock{
  margin-left: 240px;
}

.chapter-button {
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px;
}

@media(width<=530px){
  .book-header{
    flex-direction: column;
  }
  .book-header img{
    margin: 0 auto;
  }
  .book-content{
    flex-direction: column;
  }
  .book-name{
    font-size: 1.5rem;
  }

}

</style>
