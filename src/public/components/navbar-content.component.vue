<script>
export default {
  name: 'navbar-content',
  data() {
    return {
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="card">
    <pv-toolbar>
      <template #start>
        <h1>{{ $t('hello_world') }}</h1>
        <pv-button icon="pi pi-plus" class="mr-2" severity="secondary" />
        <pv-button icon="pi pi-print" class="mr-2" severity="secondary" />
        <pv-button icon="pi pi-upload" severity="secondary" />
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped></style>
