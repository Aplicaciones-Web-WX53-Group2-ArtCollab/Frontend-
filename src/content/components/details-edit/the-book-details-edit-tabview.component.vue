<script setup>
import { ref } from 'vue';

const defaultValue = ref('Boulevard');
const defaultValue2 = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
</script>

<template>
  <div class="card">
    <pv-tabview id='tv'>
      <div class="flex flex-column">
        <pv-tabpanel header="Detalles de la historia">
          <div class="flex align-items-center justify-content-center mb-5">
            <div class="flex flex-column">
              <label class="text-2xl font-bold" for="titulo">Título</label>
              <pv-textarea v-model="defaultValue" rows="1" cols="50" />
            </div>
          </div>
          <div class="flex align-items-center justify-content-center mb-5">
            <div class="flex flex-column">
              <label class="text-2xl font-bold" for="titulo">Descripción</label>
              <pv-textarea v-model="defaultValue2" rows="9" cols="50" />
            </div>
          </div>
        </pv-tabpanel>
      </div>
      <pv-tabpanel header="Tabla de contenidos">
      </pv-tabpanel>
      <pv-tabpanel header="Ingresos obtenidos">
      </pv-tabpanel>
    </pv-tabview>
  </div>
</template>

<style scoped>


</style>