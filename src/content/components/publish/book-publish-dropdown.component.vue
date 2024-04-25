<template>
  <div class="card flex justify-content-center">
    <pv-dropdown v-model="selectedGenre" :options="genres" filter optionLabel="name" placeholder="Seleccionar" class="w-full md:w-14rem">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
                    {{ slotProps.placeholder }}
                </span>
      </template>
    </pv-dropdown>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedGenre = ref();
const genres = ref([
  { name: 'Romance' },
  { name: 'Fantasy' },
  { name: 'Comedy' }
]);
</script>


<style scoped>

</style>