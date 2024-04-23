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
    };
  },
 };
</script>

<template>
  <div class="card">
    <pv-toolbar class="flex justify-center items-center">
      <template #start>
        <div class="flex flex-row text-xs gap-3 ">
          <img src="../../assets/logo.png" width="50" />
          <h1> Géneros </h1>
          <h1> Populares </h1>
          <h1> Suscripciones </h1>
          <h1> Monetización </h1>
          <h1> Artistas </h1>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

</style>