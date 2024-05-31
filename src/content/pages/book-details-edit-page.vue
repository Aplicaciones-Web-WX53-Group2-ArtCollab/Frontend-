<script>
import { BookInternalService } from '@/content/services/book-internal.service.js'
import { Book } from '@/content/models/book.entity.js'
import TheBookDetailsEditToolbar from '@/content/components/details-edit/the-book-details-edit-toolbar.component.vue'
import TheBookDetailsEditCover from '@/content/components/details-edit/the-book-details-edit-cover.component.vue'
import TheBookDetailsEditTabview from '@/content/components/details-edit/the-book-details-edit-tabview.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'

export default {
  name: 'book-details-edit-page',
  components: {
    TheBookDetailsEditToolbar,
    TheBookDetailsEditCover,
    TheBookDetailsEditTabview,
    NavbarContent
  },
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
    async updateBookDetails() {
      try {
        const existingBook = await this.bookService.getBookById(this.book.id);
        let updateObject = {
          title: this.book.title,
          description: this.book.description,
          date_publish: existingBook.data.date_publish,
          type: existingBook.data.type,
          likes: existingBook.data.likes,
          views: existingBook.data.views,
          templateState_id: existingBook.data.templateState_id,
          template_History_id: existingBook.data.template_History_id,
          imgUrl: this.book.imgUrl ? this.book.imgUrl : existingBook.data.imgUrl,
          id: existingBook.data.id,
          portfolio_id: existingBook.data.portfolio_id,
          genre: existingBook.data.genre
        };
        return this.bookService.updateBook(this.book.id, updateObject);
      } catch (error) {
        console.error(error);
      }
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
</template>

<style scoped>

</style>