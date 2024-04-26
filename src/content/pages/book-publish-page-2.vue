<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import BookBanner from '@/content/components/publish/book-publish-banner.component.vue'
import BookInput from '@/content/components/publish/book-publish-input.component.vue'
import BookFileUpload from '@/content/components/publish/book-publish-fileupload.component.vue'
import BookPublishEditor from '@/content/components/publish/the-book-publish-editor.component.vue'

</script>

<template>
  <navbar-content/>
  <book-banner/>
  <div class="input flex align-items-center justify-content-center">
    <div class="mt-2 w-10">
      <book-input class="text-xl" borderStyle="none" outlineStyle="none" placeholder="Capítulo sin titulo" placeholderStyle="text-align: center; width: 100%;" size="large" />
    </div>
  </div>
  <div class="divider flex align-items-center justify-content-center">
    <div class="mt-2 w-10">
      <pv-divider class="custom-divider" />
    </div>
  </div>
  <book-publish-editor/>
  <div class="flex align-items-center justify-content-center">
    <div class="image-fileupload flex flex-column gap-2 m-5">
      <label for="titulo" class="text-center font-bold text-xl">Subir ilustraciones</label>
      <book-file-upload/>
    </div>
  </div>
  <footer-content/>
</template>

<style scoped>

.custom-divider::before {
  border-top-width: 5px;
  border-top-color: #012840;
}

</style>