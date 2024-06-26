<script >
import { Book } from '@/content/models/book.entity.js'
import { BookInternalService } from '@/content/services/book-internal.service.js'


export default {
  name: 'fantasy-books-cards',
  data(){
    return{
      books: [],
      book: new Book(),
      bookApiFake:new BookInternalService()
    }
  },
  async created() {
    this.bookApiFake.getAllBooks().then((response) => {
       response.data.forEach((bookData) => {
        const { title, description,datePublish,type,id, imgUrl }= bookData;
        if(bookData.type === 'book'){
          this.book = new Book(title, description,datePublish,type,id, imgUrl);
          this.books.push(this.book);
        }
    });
      let randomIndex = Math.floor(Math.random() * this.books.length);
      this.books = this.books.slice(randomIndex, randomIndex + 6);
    }).catch((error) => {
      console.error('Error fetching animals:', error);
    });
  },
  methods:{
    increaseLikes(id,likes){
      this.bookApiFake.increaseLike(id,likes).then((response) => {
        const bookEdited = this.books.find(book => book.id === id);
        if (bookEdited) {
          bookEdited.likes = response.data.likes;
        }
      }).catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
  }

}
</script>


<template>
  <div class="flex justify-content-center align-content-center">
    <div class="fantasy-books-cards">
      <div v-for="(book, index) in books" :key="index">
        <pv-card class="card">
          <template #header>
            <img class="header" :src="book.imgUrl" alt="Book cover" />
          </template>
          <template #title>
            {{ book.title }}
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

.fantasy-books-cards {
  display: grid;
  grid-template-columns:  15rem 15rem 15rem ;
  gap: 50px;
  grid-auto-rows: auto;
  margin: 200px;
  margin-top: 100px;

}

.card {

  justify-content: space-around;

}

.header {

  background-color: #f1f1f1;
  width: 15rem;
  height: 20rem;
  object-fit: cover;
}
@media (max-width: 600px) {
  .fantasy-books-cards {
    margin: 50px;
    grid-template-columns: 1fr;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .fantasy-books-cards {
    grid-template-columns: repeat(2, 1fr);
    margin: 50px;
  }
}
</style>
