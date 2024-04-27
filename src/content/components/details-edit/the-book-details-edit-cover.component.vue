<script setup>
import { ref } from 'vue';

const fileInput = ref(null);

const onIconClick = () => {
  fileInput.value.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];

  // Verificar si el archivo es una imagen
  if (!file.type.startsWith('image/')) {
    console.error('El archivo seleccionado no es una imagen');
    return;
  }

  // Aquí puedes manejar la subida del archivo
  console.log(file);
};
</script>

<template>
  <div class="edit-cover relative w-11rem h-12rem mx-3 my-3 md:my-0 border-round">
    <img src="../../../assets/images/Boulevard-Cover.jpg" class="w-10 h-auto relative">
    <div class="pencil-icon absolute border-circle w-2rem h-2rem bg-cyan-500 text-white-alpha-90 flex align-items-center justify-content-center bottom-0 left-0">
      <i class="pi pi-pencil" @click="onIconClick"/>
    </div>
    <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" style="display: none" />
  </div>
</template>

<style scoped>

</style>