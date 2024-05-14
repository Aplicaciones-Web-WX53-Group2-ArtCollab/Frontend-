<script>
export default {
  name: 'the-book-details-edit-toolbar',
  props: ['bookTitle'],
  methods: {
    saveAndRefresh() {
      this.$emit('save');
    },
  },
};
</script>

<template>
  <div class="card">
    <pv-toolbar class="mt-2 mb-6 border-none border-bottom-3 border-700 border-noround">
      <template #start>
        <i class="pi pi-chevron-left" :aria-label="$t('goBack')"></i>
        <div class="flex flex-column ml-4">
          <small>{{ $t('editDetails') }}</small>
          <label class="font-semibold text-xl">{{ bookTitle }}</label>
        </div>
      </template>

      <template #end>
        <pv-button class="border-round-2xl bg-cyan-600 border-transparent px-4 mx-2" :aria-label="$t('cancel') ">{{ $t('cancel') }}</pv-button>
        <pv-button class="border-round-2xl bg-cyan-800 border-transparent px-4 mx-2" :aria-label="$t('save')" @click="saveAndRefresh">{{ $t('save') }}</pv-button>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

</style>