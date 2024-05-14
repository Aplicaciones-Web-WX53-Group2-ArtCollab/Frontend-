<script setup>
import { ref, watch } from 'vue';
import { BookInternalService } from '@/content/services/book-internal.service.js'

const bookService = new BookInternalService();

let defaultValue = ref('');
let defaultValue2 = ref('');

bookService.getBookById(1)
  .then(response => {
    defaultValue.value = response.data.title;
    defaultValue2.value = response.data.description;
  })
  .catch(error => {
    console.error(error);
  });

watch(defaultValue, (newTitle) => {
  emit('update:title', newTitle);
});

watch(defaultValue2, (newDescription) => {
  emit('update:description', newDescription);
});

const emit = defineEmits(['update:title', 'update:description']);
</script>

<template>
  <div class="card">
    <pv-tabview id='tv' class="details-tabview lg:max-w-full md:max-w-20rem">
      <div class="flex flex-column">
        <pv-tabpanel :header="$t('storyDetails')" :aria-label="$t('storyDetails')">
          <div class="flex align-items-center justify-content-center mb-5 mt-3">
            <div class="title flex flex-column">
              <label class="text-2xl font-bold" for="title">{{ $t('title') }}</label>
              <pv-textarea v-model="defaultValue" rows="1" cols="50" :placeholder="$t('title')" class="details-textarea lg:max-w-full md:max-w-20rem" :aria-label="$t('title')" />
            </div>
          </div>
          <div class="flex align-items-center justify-content-center mb-5">
            <div class="description flex flex-column">
              <label class="text-2xl font-bold" for="description">{{ $t('description') }}</label>
              <pv-textarea v-model="defaultValue2" rows="14" cols="50" :placeholder="$t('description')" class="details-textarea lg:max-w-full md:max-w-20rem" :aria-label="$t('description')" />
            </div>
          </div>
        </pv-tabpanel>
      </div>
      <pv-tabpanel :header="$t('contentTable')" :aria-label="$t('contentTable')">
        <pv-card class="shadow-none">
              <template #content>
                <div class="table-of-contents flex flex-row gap-8">
                  <div class="chapters flex flex-column pr-8 mr-6">
                    <p class="pb-2" :aria-label="$t('prologue')">{{ $t('prologue') }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 1 })">{{ $tc('chapter', { number: 1 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 2 })">{{ $tc('chapter', { number: 2 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 3 })">{{ $tc('chapter', { number: 3 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 4 })">{{ $tc('chapter', { number: 4 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 5 })">{{ $tc('chapter', { number: 5 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 6 })">{{ $tc('chapter', { number: 6 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 7 })">{{ $tc('chapter', { number: 7 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 8 })">{{ $tc('chapter', { number: 8 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 9 })">{{ $tc('chapter', { number: 9 }) }}</p>
                    <p class="pb-2" :aria-label="$tc('chapter', { number: 10 })">{{ $tc('chapter', { number: 10 }) }}</p>
                  </div>
                  <div class="flex flex-column pl-8 ml-6">
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>100 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>130 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>150 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>125 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>143 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>167 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p class="mr-2">80 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil "/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>101 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p class="mr-2">99 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>175 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>111 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
        </pv-card>
      </pv-tabpanel>
      <pv-tabpanel :header="$t('earned')" :aria-label="$t('earned')">
      </pv-tabpanel>
    </pv-tabview>
  </div>
</template>

<style scoped>
.custom-icon {
  width: 1.5rem;
  align-items:center;
  justify-content:center;
  display:flex;
}

@media (max-width: 576px) {
  .details-textarea {
    max-width: 15rem;
  }
  .details-tabview {
    max-width: 16rem;
  }
}
</style>