<script setup>

</script>

<template>
  <div class="card">
    <pv-toolbar class="mt-2 mb-6 border-none border-bottom-3 border-700 border-noround" aria-label="Book details edit toolbar">
      <template #start>
        <i class="pi pi-chevron-left" aria-label="Back"></i>
        <div class="flex flex-column ml-4">
          <small>{{ $t('editDetails.editDetails') }}</small>
          <label class="font-semibold text-xl">Boulevard</label>
        </div>
      </template>

      <template #end>
        <pv-button class="border-round-2xl bg-cyan-600 border-transparent px-4 mx-2" aria-label="Cancel">{{ $t('editDetails.cancel') }}</pv-button>
        <pv-button class="border-round-2xl bg-cyan-800 border-transparent px-4 mx-2" aria-label="Save">{{ $t('editDetails.save') }}</pv-button>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

</style>