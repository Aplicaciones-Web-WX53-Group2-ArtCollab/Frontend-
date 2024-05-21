<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import BookBanner from '@/content/components/publish/book-publish-banner.component.vue'
import BookFileUpload from '@/content/components/publish/book-publish-fileupload.component.vue'
import BookPublishEditor from '@/content/components/publish/the-book-publish-editor.component.vue'
import { ref } from 'vue'
const showLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión
const showEmailLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión con correo electrónico

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showLogin
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showEmailLogin

</script>

<template>
  <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                  @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
  <book-banner/>
  <div class="buttons flex justify-content-end flex-wrap">
    <div class="px- gap-3">
      <router-link to="/book-profile">
        <pv-button class="border-round-2xl bg-cyan-800 border-transparent px-4 mx-2">{{ $t('publish') }}</pv-button>
      </router-link>
      <pv-button class="border-round-2xl bg-cyan-600 border-transparent px-4 mx-2">{{ $t('save') }}</pv-button>
      <router-link to="/chapter-preview">
        <pv-button class="border-round-2xl bg-cyan-600 border-transparent mx-2">{{ $t('preview') }}</pv-button>
      </router-link>
    </div>
  </div>
  <div class="input flex align-items-center justify-content-center">
    <div class="mt-2 w-10">
      <book-input class="text-xl" borderStyle="none" outlineStyle="none" placeholder="Capítulo sin título 1" placeholderStyle="text-align: center; width: 100%;" size="large" />
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
      <label for="titulo" class="text-center font-bold text-xl">{{ $t('uploadIllustrations') }}</label>
      <book-file-upload/>
    </div>
  </div>
</template>

<style scoped>

.custom-divider::before {
  border-top-width: 5px;
  border-top-color: #012840;
}

</style>