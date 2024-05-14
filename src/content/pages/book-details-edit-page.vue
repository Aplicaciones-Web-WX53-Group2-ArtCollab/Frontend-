<script setup>

import TheBookDetailsEditToolbar from '@/content/components/details-edit/the-book-details-edit-toolbar.component.vue'
import TheBookDetailsEditCover from '@/content/components/details-edit/the-book-details-edit-cover.component.vue'
import TheBookDetailsEditTabview from '@/content/components/details-edit/the-book-details-edit-tabview.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
</script>

<script>
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'

export default {
  name: 'book-details-edit-page-1',
  data() {
    return {
      book: new Book(),
      bookService: new BookInternalService(),
    }
  },
  created() {
    this.book.id = 1;
  },
  methods: {
    async updateBookDetailsAndRefresh() {
      try {
        await this.updateBookDetails();
      } catch (error) {
        console.error(error);
      }
    },
    updateBookDetails() {
      let updateObject = {
        imgUrl: this.book.imgUrl,
        title: this.book.title,
        description: this.book.description
      };
      return this.bookService.updateBook(this.book.id, updateObject)
        .catch(error => {
          console.error(error);
        });
    }
  },
}
</script>

<template>
  <navbar-content/>
  <the-book-details-edit-toolbar @save="updateBookDetailsAndRefresh" :book-title="book.title"/>
  <div class="flex flex-row flex-wrap justify-content-center gap-8 mb-7">
    <div class="flex justify-content-center align-items-center">
      <the-book-details-edit-cover @update:imageUrl="book.imgUrl = $event"/>
    </div>
    <div class="flex align-items-center justify-content-center shadow-1 p-5">
      <the-book-details-edit-tabview @update:title="book.title = $event" @update:description="book.description = $event"/>
    </div>
  </div>
  <footer-content/>
</template>

<style scoped>

</style>