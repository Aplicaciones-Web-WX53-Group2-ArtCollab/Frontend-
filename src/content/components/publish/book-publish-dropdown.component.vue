<template>
  <div class="card flex justify-content-center" aria-label="Genres Dropdown">
    <pv-dropdown v-model="selectedGenre" :options="genres" filter optionLabel="name" placeholder="Seleccionar" class="w-full md:w-14rem" aria-label="Genre Selector" @update:modelValue="updateGenre">
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
import { ref, defineEmits } from "vue";


const selectedGenre = ref();
const genres = ref([
  { name: 'romance' },
  { name: 'fantasía' },
  { name: 'comedia' }
]);

const emit = defineEmits(['update:genre']);

const updateGenre = (newGenre) => {
  selectedGenre.value = newGenre;
  emit('update:genre', newGenre.name);
}
</script>


<style scoped>

</style>