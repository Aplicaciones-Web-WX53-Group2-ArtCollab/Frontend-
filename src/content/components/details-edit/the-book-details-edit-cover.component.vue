<script >
import { Book } from '@/content/models/book.entity.js'
import { BookInternalService } from '@/content/services/book-internal.service.js'


export default {
  name: 'book-details-edit-cover',
  data(){
    return{
      book: new Book(),
      bookPopular: new Book(),
      bookApiFake:new BookInternalService()
    }
  },
  async created() {
    this.bookApiFake.getAllBooks().then((response) => {
      response.data.forEach((bookData) => {
        const { title, description, datePublish, type, id, imgUrl, likes, views } = bookData;
        if (bookData.type === 'book' && id === '1') {
          this.book = new Book(title, description, datePublish, type, id, imgUrl, likes, views);
        }
      });
    }).catch((error) => {
      console.error('Error fetching books:', error);
    });
  }

}
</script>

<script setup>
import { ref } from 'vue';

const fileInput = ref(null);

const onIconClick = () => {
  fileInput.value.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];

  // Verificar si el archivo es una imagen
  if (!file.type.startsWith('image/')) {
    console.error('El archivo seleccionado no es una imagen');
    return;
  }

  // Aquí puedes manejar la subida del archivo
  console.log(file);
};
</script>

<template>
  <div class="edit-cover relative w-19rem h-21rem mx-3 my-3 md:my-0 border-round" aria-label="Edit cover section">
    <img :src="book.imgUrl" class="w-10 h-auto relative" alt="Book cover image">
    <div class="pencil-icon absolute border-circle w-2rem h-2rem bg-cyan-500 text-white-alpha-90 flex align-items-center justify-content-center bottom-0 left-0 ml-3" aria-label="Edit cover icon">
      <i class="pi pi-pencil" @click="onIconClick" />
    </div>
    <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" style="display: none" aria-label="File input for image change" />
  </div>
</template>

<style scoped>

</style>