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
      ],
      visible:false,
    };
  }
};
</script>

<template>
  <pv-toolbar class="flex justify-content-center items-center toolbar" aria-label="Toolbar content">
    <template #start>
      <div class=" flex flex-row gap-7 justify-content-center" aria-label="Main navigation section">
        <img class="md:block hidden" src="../../assets/logo.png" width="40" height="40" alt="ArtCollab Logo"/>
        <div class="flex justify-content-center">
          <div  class=" block lg:hidden card flex justify-content-center" aria-label="toolbar features content">
            <pv-sidebar   v-model:visible="visible" header="Artcollab">
              <img class="md:hidden" src="../../assets/logo.png" width="40" height="40" alt="ArtCollab Logo"/>
              <h2> {{ $t('navbar.gender') }} </h2>
              <h2> {{ $t('navbar.popular')}} </h2>
              <h2> {{ $t('navbar.subscription') }} </h2>
              <h2> {{ $t('navbar.monetization') }} </h2>
              <h2 > {{ $t('navbar.artists') }} </h2>
              <pv-button class="md:hidden bg-cyan-600" label="Iniciar Sesion"> {{ $t('navbar.login') }} </pv-button>
            </pv-sidebar>
            <pv-button class="bg-transparent ml-7 lg:ml-0 text-black-alpha-80 border-transparent text-2xl hover:text-cyan-600"  icon="pi pi-bars"  @click="visible = true" aria-label="Menu" />
          </div>
          <div  class=" hidden  text-center lg:flex lg:flex-row text-xs gap-5 align-items-center navbar-links " aria-label="toolbar features content" >
            <h2> {{ $t('navbar.gender') }} </h2>
            <h2> {{ $t('navbar.popular')}} </h2>
            <h2> {{ $t('navbar.subscription') }} </h2>
            <h2> {{ $t('navbar.monetization') }} </h2>
            <h2 > {{ $t('navbar.artists') }} </h2>
          </div>
        </div>
        <div class="card flex flex-wrap justify-content-center gap-3" aria-label="search buttons content">
          <pv-iconfield icon-position="left" >
            <pv-inputicon class="pi pi-search text-black-alpha-90 text-xl mx-2 absolute mt-2 top-2"></pv-inputicon>
            <pv-inputtext  class="pl-6" />
          </pv-iconfield>
        </div>
        <div aria-label="login button">
          <pv-button class="md:block hidden bg-cyan-600" label="Iniciar Sesion"> {{ $t('navbar.login') }} </pv-button>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar{
  border-radius:0;
}
h2:hover{
  cursor:pointer;
  color: #00B4CC;
}
h2{
  color:black;
  font-size: 1rem;
  font-weight: bold;
}
.navbar-links img {
  cursor: pointer;
}
</style>