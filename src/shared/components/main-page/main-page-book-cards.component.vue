<!--Usage examples:-->
<!--<main-page-book-cards
  v-for="(book, index) in books"
  :key="index"
  :book-cover="book.cover"
  :position="index + 1"
  :book-genre="book.genre"
  :book-title="book.title"
  :book-writer="book.writer"
  :book-illustrator="book.illustrator"
/>-->
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
  <div class="book-card flex flex-row gap-5 align-items-center">
    <img :src="bookCover" alt="Book cover" class="cursor-pointer" height="300px" width="200px"/>
    <h1 class="position">{{ position }}</h1>
    <div class="book-info flex flex-column md:align-content-center">
      <p class="book-genre cursor-pointer">{{ bookGenre }}</p>
      <p class="book-title font-bold cursor-pointer">{{ bookTitle }}</p>
      <p class="book-authors">{{ bookWriter }} / {{bookIllustrator}}</p>
    </div>
  </div>
</template>

<style scoped>
.book-genre{
  color:gray;
}
</style>