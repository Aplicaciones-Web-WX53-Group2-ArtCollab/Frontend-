<template>
  <div>
    <div class="header">
      <h1 class="main-title">Mis historias</h1>
      <button class="new-story-button">Historia nueva</button>
    </div>
    <div class="container">
      <h2 class="sub-title">Todas las historias</h2>
      <hr class="divider">
      <div class="book-list">
        <div v-for="(book, index) in books" :key="index" class="book-row">
          <img :src="book.imgUrl" alt="Book cover" class="book-image">
          <div class="book-info">
            <h3 class="book-title">{{ book._title }}</h3>
            <p class="book-update">Actualizada abr.02,2024 10:11 AM</p>
            <div class="book-stats">
              <i class="pi pi-eye"> 33M</i>
              <i class="pi pi-heart-fill" > 15M</i>
            </div>
          </div>
          <button class="edit-button">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { Book } from '@/shared/models/book.entity.js'
import { BookService } from '@/shared/services/book.service.js'

export default {
  name: 'the-user-books-historial',
  data() {
    return {
      books: [],
      bookApiFake:new BookService()
    };
  },
  created() {
    this.bookApiFake.getBook().then((response) => {
        this.books = response.data.map(bookData => new Book(bookData.name,'','','','', bookData.image));
        console.log(this.books);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 100px;
}

.main-title {
  font-weight: bold;
}

.new-story-button, .edit-button {
  padding: 10px 20px;
  background-color: #0994A3;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

.container {
  padding: 20px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.sub-title {
  margin-bottom: 5px;
}

.divider {
  margin-bottom: 20px;
}

.book-list {
  width: 100%;
}

.book-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.book-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
}

.book-info {
  flex-grow: 1;
  margin-left: 20px;
}

.book-title {
  margin: 0;
  text-align: left;
}

.book-update {
  font-size: 12px;
  color: gray;
  margin: 5px 0;
}

.book-stats {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.pi {
  margin-right: 10px;
}
.pi-heart-fill{
  margin-left: 10px;
}
</style>

