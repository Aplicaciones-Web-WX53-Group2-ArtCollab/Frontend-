<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import BookBanner from '@/content/components/publish/book-publish-banner.component.vue'
import BookInput from '@/content/components/publish/book-publish-input.component.vue'
import BookFileUpload from '@/content/components/publish/book-publish-fileupload.component.vue'
</script>

<template>
  <navbar-content/>
  <book-banner/>
  <div class="container">
    <div class="input">
      <book-input borderStyle="none" outlineStyle="none" style="width: 80%" placeholder="Capítulo sin titulo" placeholderStyle="text-align: center; width: 100%;" size="large" />
    </div>
    <div class="divider">
      <pv-divider style="width: 80%"  class="custom-divider" />
    </div>
    <div class="image-fileupload flex flex-column gap-2">
      <label for="titulo" class="text-center">Subir ilustraciones</label>
      <book-file-upload/>
    </div>
  </div>
  <footer-content/>
</template>

<style scoped>
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.container {
  margin-bottom:6.7rem;
}

.divider {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-divider::before {
  border-top-width: 5px;
  border-top-color: #012840;
}

.image-fileupload {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

label {
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

</style>