<script setup>
import { ref, defineEmits } from 'vue';

const showDialog = ref(false);
const imageUrl = ref([]);

const emit = defineEmits(['update:imageUrl']);

const newImageUrl = ref('');

const saveImageUrl = () => {
  showDialog.value = false;
  imageUrl.value.push(newImageUrl.value);
  emit('update:imageUrl', imageUrl.value);
  newImageUrl.value = '';
};
</script>

<template>
  <div class="parent-container flex justify-content-center align-items-center flex-column gap-2">
    <div class="illustrations-upload bg-gray-300 flex flex-column gap-3 w-20rem py-5">
      <div class="flex align-items-center justify-content-center">
        <i class="pi pi-upload text-xl" @click="showDialog = true" />
      </div>
      <div class="flex align-items-center justify-content-center">
        <p class="max-w-10rem text-center">{{ $tc('chooseImage', 2) }}</p>
      </div>
    </div>

    <div class="illustrations-container flex lg:flex-row gap-2">
      <div v-for="(url, index) in imageUrl" :key="index" class="image-display">
        <img :src="url" class="max-w-12rem h-auto" :alt="$tc('illustration')"/>
      </div>
    </div>
  </div>

  <pv-dialog v-model:visible="showDialog" header="Upload Image URL">
    <div class="p-field">
      <label for="imageUrl">Image URL</label>
      <input id="imageUrl" type="text" v-model="newImageUrl" class="p-inputtext p-component" />
    </div>
    <div class="p-field">
      <pv-button label="Cancel" @click="showDialog = false" class="p-button-danger" />
      <pv-button label="Save" @click="saveImageUrl" class="p-button-success" />
    </div>
  </pv-dialog>
</template>

<style scoped>
@media (max-width: 768px) {
  .illustrations-container {
    flex-direction: column;
  }
}
</style>