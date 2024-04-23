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
    <pv-toolbar class="flex justify-content-center items-center">
      <template #start>
       <div class=" flex gap-7">
         <div class="flex flex-row text-xs gap-5 ">
           <img src="../../assets/logo.png" width="40" />
           <h2> Géneros </h2>
           <h2> Populares </h2>
           <h2> Suscripciones </h2>
           <h2> Monetización </h2>
           <h2> Artistas </h2>
         </div>
         <div>
           <pv-button class=" bg-cyan-600" label="Iniciar Sesion"/>
         </div>
       </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

</style>