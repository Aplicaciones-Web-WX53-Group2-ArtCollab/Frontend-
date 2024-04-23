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
    <pv-toolbar class="flex justify-content-center items-center" aria-label="the toolbar content">
      <template #start>
        <div class=" flex gap-7">
          <div class="flex flex-row text-xs gap-5 " aria-label="toolbar features content">
            <img src="../../assets/logo.png" width="40"/>
            <h2> Géneros </h2>
            <h2> Populares </h2>
            <h2> Suscripciones </h2>
            <h2> Monetización </h2>
            <h2 > Artistas </h2>
          </div>
          <div class="card flex flex-wrap justify-content-center gap-3" aria-label="search buttons content">
            <pv-iconfield icon-position="left" >
              <pv-inputicon class="pi pi-search text-black-alpha-90 text-2xl absolute mt-2 top-0"></pv-inputicon>
              <pv-inputtext  class="p-2" />
            </pv-iconfield>
          </div>
          <div arial-label="login button">
            <pv-button class=" bg-cyan-600" label="Iniciar Sesion"/>
          </div>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
 h2:hover{
    cursor:pointer;
    color: #00B4CC;
 }
</style>