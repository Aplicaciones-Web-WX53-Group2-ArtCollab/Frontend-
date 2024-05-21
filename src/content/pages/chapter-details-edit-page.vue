<script setup>

import NavbarContent from '@/public/components/navbar-content.component.vue'
import BookFileUpload from '@/content/components/publish/book-publish-fileupload.component.vue'

import { ref } from 'vue';

const defaultValue1 = ref('Capitulo 1');
const defaultValue2 = ref('Lorem ipsum dolor sit amet consectetur adipiscing elit mauris ornare malesuada himenaeos eleifend morbi, vivamus nostra faucibus platea nisl nec lacinia hendrerit ultricies id maecenas diam. Eget vel aliquet nam penatibus vulputate felis dapibus magnis montes auctor ut, augue placerat praesent class condimentum litora eros sociis iaculis. ');
</script>

<template>
  <navbar-content/>
  <div class="buttons flex justify-content-end flex-wrap">
    <div class="px-6">
      <pv-button class="border-round-2xl bg-cyan-800 border-transparent px-4 mx-2">{{ $t('publish') }}</pv-button>
      <pv-button class="border-round-2xl bg-cyan-600 border-transparent px-4 mx-2">{{ $t('save') }}</pv-button>
      <pv-button class="border-round-2xl bg-cyan-600 border-transparent mx-2">{{ $t('preview') }}</pv-button>
    </div>
  </div>
  <div class="input flex align-items-center justify-content-center">
    <div class="mt-2 w-10">
      <pv-inputtext v-model="defaultValue1" id="username" aria-describedby="username-help" aria-label="Username Input" :style="{ width: '100%', borderStyle: 'none', outlineStyle: 'none', textAlign: 'center', fontSize: '20px' }" />
    </div>
  </div>
  <div class="divider flex align-items-center justify-content-center">
    <div class="mt-2 w-10">
      <pv-divider class="custom-divider" />
    </div>
  </div>
  <div class="flex align-items-center justify-content-center">
    <div class="input m-5">
      <pv-textarea v-model="defaultValue2" rows="14" cols="200" class="details-textarea lg:max-w-full" aria-label="Description" />
    </div>
  </div>
  <div class="flex align-items-center justify-content-center">
    <div class="image-fileupload flex flex-column gap-2 m-5">
      <label for="titulo" class="text-center font-bold text-xl">{{ $t('uploadIllustrations') }}</label>
      <book-file-upload/>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 576px) {
  .details-textarea {
    max-width: 10rem;
  }
}
</style>