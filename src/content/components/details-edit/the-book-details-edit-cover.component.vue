<script >
import { Book } from '@/content/models/book.entity.js'
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { ref, defineEmits } from 'vue';

export default {
  name: 'book-details-edit-cover',
  data() {
    return {
      book: new Book(),
      bookPopular: new Book(),
      bookApiFake: new BookInternalService(),
      showDialog: ref(false),
      imageUrl: ref(''),
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
  },
  methods: {
    saveImageUrl() {
      this.showDialog = false;
      this.book.imgUrl = this.imageUrl;
      this.$emit('update:imageUrl', this.imageUrl);
    },
  }
}
</script>

<template>
  <div class="edit-cover relative w-19rem h-21rem mx-3 my-3 md:my-0 border-round" :aria-label="$t('editCover')">
    <img :src="book.imgUrl" class="w-10 h-auto relative" :alt="$t('coverImage')">
    <div
      class="pencil-icon absolute border-circle w-2rem h-2rem bg-cyan-500 text-white-alpha-90 flex align-items-center justify-content-center bottom-0 left-0 ml-3"
      aria-label="Edit cover icon">
      <i class="pi pi-pencil" @click="showDialog = true" />
    </div>

    <pv-dialog v-model:visible="showDialog" :header="$t('uploadImageUrl')">
      <div class="p-field">
        <label for="imageUrl">{{$t('imageUrl')}}</label>
        <input id="imageUrl" type="text" v-model="imageUrl" class="p-inputtext p-component" />
      </div>
      <div class="p-field">
        <pv-button :label="$t('cancel')" @click="showDialog = false" class="p-button-danger" />
        <pv-button :label="$t('save')" @click="saveImageUrl" class="p-button-success" />
      </div>
    </pv-dialog>
  </div>
</template>

<style scoped>

</style>