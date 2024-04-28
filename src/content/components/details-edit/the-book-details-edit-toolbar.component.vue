<script setup>

</script>

<template>
  <div class="card">
    <pv-toolbar class="mt-2 mb-6 border-none border-bottom-3 border-700 border-noround">
      <template #start>
        <i class="pi pi-chevron-left"></i>
        <div class="flex flex-column ml-4">
          <small>Editar detalles de la historia</small>
          <label class="font-semibold text-xl">Boulevard</label>
        </div>
      </template>

      <template #end>
        <pv-button class="border-round-2xl bg-cyan-600 border-transparent px-4 mx-2">Cancelar</pv-button>
        <pv-button class="border-round-2xl bg-cyan-800 border-transparent px-4 mx-2">Guardar</pv-button>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

</style>