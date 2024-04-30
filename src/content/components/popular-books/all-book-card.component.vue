<script >
import { Book } from '@/content/models/book.entity.js'
import { BookInternalService } from '@/content/services/book-internal.service.js'


export default {
  name: 'all-books-cards',
  data(){
    return{
      books: [],
      book: new Book(),
      bookPopular: new Book(),
      bookApiFake:new BookInternalService()
    }
  },
  async created() {
    this.bookApiFake.getAllBooks().then((response) => {
      response.data.forEach((bookData) => {
        const { title, description,datePublish,type,id, imgUrl,likes,views  }= bookData;
        if(bookData.type === 'book'){
          this.book = new Book(title, description,datePublish,type,id, imgUrl,likes,views);
          this.books.push(this.book);
          if(bookData.views > this.bookPopular.views){
            this.bookPopular = bookData;
          }
        }

      });
      this.books = this.books.filter(book => book.id !== this.bookPopular.id);
      let randomIndex = Math.floor(Math.random() * this.books.length);
      this.books = this.books.slice(randomIndex, randomIndex + 4);
    }).catch((error) => {
      console.error('Error fetching animals:', error);
    });
  }

}
</script>

<template>
<div class="flex justify-content-center align-content-center my-8">
  <div class="flex flex-column lg:flex-row  gap-6">
    <div class="w-20rem flex flex-column gap-4">
      <div>
        <img width="240" :src="bookPopular.imgUrl" alt="Book cover" />
      </div>
      <div>
        <h3>{{ bookPopular.title }}</h3>
        <p> {{bookPopular.description}}</p>
      </div>
      </div>

    <div class="flex flex-column gap-4">
      <div v-for="(book, index) in books" :key="index" class="flex gap-4">
        <div>
            <img width="100" :src="book.imgUrl" alt="Book cover" />
          </div>
          <div class="flex gap-4">
            <p class="font-bold"> {{index+2}}</p>
            <h3> {{ book.title }}</h3>
          </div>
      </div>
    </div>


  </div>
</div>
</template>

<style scoped>


</style>
