<script setup>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import BookBanner from '@/content/components/publish/book-publish-banner.component.vue'
import BookPublishEditor from '@/content/components/publish/the-book-publish-editor.component.vue'
import BookIllustrationsUpload from '@/content/components/publish/book-publish-illustrations-upload.component.vue'

</script>

<template>
  <navbar-content/>
  <book-banner/>
  <div class="buttons flex justify-content-end flex-wrap">
    <div class="px-6">
      <pv-button class="border-round-2xl bg-cyan-800 border-transparent px-4 mx-2">{{ $t('publish') }}</pv-button>
      <pv-button class="border-round-2xl bg-cyan-600 border-transparent px-4 mx-2">{{ $t('save') }}</pv-button>
      <pv-button class="border-round-2xl bg-cyan-600 border-transparent mx-2">{{ $t('preview') }}</pv-button>
    </div>
  </div>
  <div class="input flex align-items-center justify-content-center">
    <div class="mt-2 w-10">
      <pv-inputtext class="text-xl w-full border-transparent text-center" :placeholder="$t('untitledChapter')" />
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
      <book-illustrations-upload/>
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