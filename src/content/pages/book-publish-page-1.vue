<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import BookPublishDropdown from '@/content/components/publish/book-publish-dropdown.component.vue'
import BookPublishFileupload from '@/content/components/publish/book-publish-fileupload.component.vue'
import BookInput from '@/content/components/publish/book-publish-input.component.vue'
import BookBanner from '@/content/components/publish/book-publish-banner.component.vue'

import { ref } from 'vue';

const titlePlaceholder = ref('Menos de 50 caracteres');
const summaryPlaceholder = ref('Menos de 500 caracteres');
const dynamicHeight = ref(400);

</script>

<template>
  <navbar-content/>
  <book-banner/>
  <div class="container flex justify-content-center align-items-center">
    <div class="flex flex-row">
      <div class="thumbnail-fileupload">
        <div class="flex flex-column gap-2">
          <label for="titulo">Miniatura</label>
          <book-publish-fileupload/>
        </div>
      </div>
      <div class="container2 flex flex-column gap-2">
        <div class="flex flex-row gap-2">
          <div class="genre1-dropdown">
            <label for="titulo">Género 1</label>
            <book-publish-dropdown/>
          </div>
          <div class="genre2-dropdown">
            <label for="titulo">Género 2</label> <small>(Opcional)</small>
            <book-publish-dropdown/>
          </div>
        </div>
        <div class="title-input">
          <label for="titulo">Titulo</label>
          <book-input :placeholder="titlePlaceholder"/>
        </div>
        <div class="summary-input">
          <label for="resumen">Resumen</label>
          <book-input :placeholder="summaryPlaceholder" :height="dynamicHeight" />
        </div>
        <div class="button">
          <pv-button class="bg-cyan-400 border-transparent flex justify-between items-center pl-4 rounded-lg">
            <span class="mr-4">Crear libro</span>
            <i class="pi pi-chevron-right"></i>
          </pv-button>
        </div>
      </div>
    </div>
  </div>
  <footer-content/>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 2rem 0;
}

.container2 {
  width: 40rem;
}

.flex.flex-row {
  display: flex;
  flex-direction: row;
}

.thumbnail-fileupload {
  margin-right: 8rem; /* Ajusta el margen derecho para separar de los otros elementos */
  max-width: 15rem;
}

.title-input {
  margin-bottom: 1rem; /* Añade un margen inferior */
}

.summary-input {
  margin-bottom: 1rem; /* Añade un margen inferior */
}

label {
  font-weight: bold;
}

small {
  color: #9CA3AF;
}

</style>