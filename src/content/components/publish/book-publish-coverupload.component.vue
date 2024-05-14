<script setup>
import { ref, defineEmits } from 'vue';

const showDialog = ref(false);
const imageUrl = ref('');

const emit = defineEmits(['update:imageUrl']);

const saveImageUrl = () => {
  showDialog.value = false;
  emit('update:imageUrl', imageUrl.value);
};
</script>

<template>
  <div class="cover-upload bg-gray-300 flex flex-column gap-3 w-12rem py-5">
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-upload text-xl" @click="showDialog = true" />
    </div>
    <div class="flex align-items-center justify-content-center">
      <p class="max-w-6rem text-center">{{ $tc('chooseImage', 1) }}</p>
    </div>
  </div>

  <div v-if="imageUrl" class="image-display">
    <img :src="imageUrl" :key="imageUrl" class="max-w-12rem h-auto" :alt="$t('coverImage')"/>
  </div>

  <pv-dialog v-model:visible="showDialog" header="Upload Image URL">
    <div class="p-field">
      <label for="imageUrl">Image URL</label>
      <input id="imageUrl" type="text" v-model="imageUrl" class="p-inputtext p-component" />
    </div>
    <div class="p-field">
      <pv-button label="Cancel" @click="showDialog = false" class="p-button-danger" />
      <pv-button label="Save" @click="saveImageUrl" class="p-button-success" />
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>