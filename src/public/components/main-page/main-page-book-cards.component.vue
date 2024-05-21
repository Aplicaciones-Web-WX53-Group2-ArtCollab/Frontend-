<script>
export default {
  props: {
    bookCover: {
      type: String,
      required: true
    },
    position: {
      type: Number,
      required: true
    },
    bookGenre: {
      type: String,
      required: false
    },
    bookTitle: {
      type: String,
      required: true
    },
    bookWriter: {
      type: String,
      required: true
    },
    bookIllustrator: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="book-card grid gap-5 align-items-center justify-content-between w-full" aria-label="Tarjeta de libros">
    <div class="col">
      <img :src="bookCover" :alt="'Portada del libro ' + bookTitle" class="cursor-pointer" height="300px" width="200px"/>
    </div>
    <h1 class="col position">{{ position }}</h1>
    <div class="col book-info flex flex-column md:align-content-center">
      <p class="book-genre cursor-pointer capitalize">{{ bookGenre }}</p>
      <p class="book-title font-bold cursor-pointer">{{ bookTitle }}</p>
      <p class="book-authors" :aria-label="'Escritor del libro: ' + bookWriter + ', Ilustrador del libro: ' + bookIllustrator">{{ bookWriter }} / {{bookIllustrator}}</p>
    </div>
  </div>
</template>

<style scoped>
.book-genre{
  color:gray;
}
</style>