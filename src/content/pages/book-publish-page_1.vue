<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import BookPublishDropdown from '@/content/components/publish/book-publish-dropdown.component.vue'
import BookBanner from '@/content/components/publish/book-publish-banner.component.vue'
import BookPublishCoverUpload from '@/content/components/publish/book-publish-coverupload.component.vue'
</script>

<script>
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'
import router from '@/router/router.js'

export default {
  name: 'book-publish-page-1',
  setup() {
    return { router };
  },
  data() {
    return {
      book: new Book(),
      bookService: new BookInternalService(),
      title: '',
      description: '',
      genre1: '',
      genre2: '',
      imgUrl: ''
    }
  },
  methods: {
    async postTemplate() {
      try {
        const response = await this.bookService.getAllBooks();
        const templates = response.data.filter(book => book.type === 'template' && !isNaN(book.id));
        const lastTemplate = templates[templates.length - 1];

        let lastId;
        if (lastTemplate) {
          lastId = isNaN(lastTemplate.id) ? 0 : Number(lastTemplate.id);
        } else {
          lastId = 0;
        }

        const newId = (lastId + 1).toString();

        const genres = [this.genre1, this.genre2].filter(Boolean).join(', ');
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');

        const dateOnly = `${year}-${month}-${day}`;

        this.book = new Book(this.title, this.description, dateOnly, 'book', newId, this.imgUrl, 0, 0, genres);

        this.bookService.create(this.book).then(() => {
          router.push('/chapter-publish');
        }).catch((error) => {
          console.error('Error posting data:', error);
        });
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  }
}
</script>

<template>
  <navbar-content/>
  <book-banner/>
  <div class="container flex flex-column justify-content-center align-items-center h-full my-6">
    <div class="flex flex-row flex-wrap">
      <div class="prueba">
        <div class="thumbnail-fileupload">
          <div class="flex flex-column gap-2">
            <label for="titulo">{{ $t('thumbnail') }}</label>
            <book-publish-cover-upload @update:imageUrl="imgUrl = $event" />
          </div>
        </div>
      </div>
      <div class="container2 flex flex-column gap-2">
        <div class="flex flex-row gap-2 lg:mt-0 md:mt-5">
          <div class="genre1-dropdown">
            <label for="titulo">{{ $t('genre') }} 1</label>
            <book-publish-dropdown v-model="genre1" @update:genre="genre1 = $event"/>
          </div>
          <div class="genre2-dropdown">
            <label for="titulo">{{ $t('genre') }} 2</label> <small>(Opcional)</small>
            <book-publish-dropdown v-model="genre2" @update:genre="genre2 = $event"/>
          </div>
        </div>
        <div class="title-input flex flex-column mb-1">
          <label for="titulo">{{ $t('title') }}</label>
          <pv-inputtext v-model="title" type="text" placeholder="Menos de 50 caracteres" maxlength="50" />
        </div>
        <div class="summary-input flex flex-column mb-1">
          <label for="resumen">{{ $t('summary') }}</label>
          <pv-textarea v-model="description" placeholder="Menos de 500 caracteres" rows="14" cols="50" maxlength="500" />
        </div>
        <div class="button">
          <pv-button class="bg-cyan-400 border-transparent flex justify-between items-center pl-4 rounded-lg" @click="postTemplate">
            <span class="mr-4">{{ $t('createBook') }}</span>
            <i class="pi pi-chevron-right"></i>
          </pv-button>
        </div>
      </div>
    </div>
  </div>
  <footer-content/>
</template>

<style scoped>
.flex.flex-row {
  display: flex;
  flex-direction: row;
}

.thumbnail-fileupload {
  margin-right: 8rem; /* Ajusta el margen derecho para separar de los otros elementos */
  max-width: 15rem;
}

label {
  font-weight: bold;
}

small {
  color: #9CA3AF;
}

@media (max-width: 576px) {
  .title-input {
    max-width: 70%;
  }
  .summary-input {
    max-width: 70%;
  }
  .container2{
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }
  .thumbnail-fileupload{
    margin-left: 6rem;
  }
}

</style>