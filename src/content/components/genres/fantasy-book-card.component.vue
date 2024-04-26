<script >
import { BookApiFake } from '@/content/services/book-api-fake.services.js'
import { Book } from '@/content/models/book.entity.js'


export default {
  name: 'fantasy-books-cards',
  data(){
    return{
      books: [],
      bookApiFake:new BookApiFake()
    }
  },
  async created() {
    this.bookApiFake.getFantasyBooks().then((response) => {
      for (const bookData of response.data){
        const { name, image, author}= bookData;
        const book = new Book(name, image, author);
        this.books.push(book);
      }
    }).catch((error) => {
      console.error('Error fetching animals:', error);
    });

  }

}
</script>


<template>
  <div>
    <label>FantasyBooksCards</label>
    <div class="fantasy-books-cards">
      <div v-for="(book, index) in books" :key="index">
        <pv-card class="card">
          <template #header>
            <img class="header" :src="book.getImage()" alt="Book cover" />
          </template>
          <template #title>
            {{ book.getName() }}
          </template>
          <template #subtitle >
            {{ book.getAuthor() }}
          </template>
          <template #footer>
            <pv-rating class="rating" :cancel="false" :stars="1">
              <template #onicon>
                <i class="pi pi-heart-fill">13.8 M</i>
              </template>
              <template #officon>
                <i class="pi pi-heart">13.7 M</i>
              </template>
            </pv-rating>

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
    margin: 50px; /* Reduced margin for small devices */
    grid-template-columns: 1fr; /* Single column layout */
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .fantasy-books-cards {
    grid-template-columns: repeat(2, 1fr); /* Two column layout for tablets */
    margin: 50px; /* Adjusted margin for medium devices */
  }
}
</style>
