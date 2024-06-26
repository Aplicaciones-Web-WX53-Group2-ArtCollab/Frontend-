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
        const { title, description,datePublish,type,id, imgUrl  }= bookData;
        if(bookData.type === 'book'){
          this.book = new Book(title, description,datePublish,type,id, imgUrl);
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
      console.error('Error fetching books:', error);
    });
  }

}
</script>

<template>
<div class="flex justify-content-center align-content-center my-8">
  <div class="flex mx-5 flex-column lg:flex-row  gap-6">
    <div class="w-20rem flex flex-column gap-4">
      <div>
        <img class="w-10rem lg:w-20rem" :src="bookPopular.imgUrl" alt="Book cover" />
      </div>
      <div>
        <h3 class="text-xs lg:text-base">{{ bookPopular.title }}</h3>
        <p class="text-xs lg:text-base"> {{bookPopular.description}}</p>
      </div>
      </div>

    <div class="flex flex-column gap-4">
      <div v-for="(book, index) in books" :key="index" class="flex gap-4">
        <div>
            <img width="100" :src="book.imgUrl" alt="Book cover" />
          </div>
          <div class="flex gap-4 text-xs lg:text-base">
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
