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
      visible:false
    };
  },
  methods:{
    toggle(){
       this.visible = !this.visible;
    }
  },
  mounted() {
    if (this.$mq === 'lg') {
      this.visible = true;
    }
  },
  watch: {
    '$mq': function(newVal) {
      this.visible = newVal === 'lg';
    }
  }
};
</script>

<template>
    <pv-toolbar class="flex justify-content-center items-center toolbar" aria-label="the toolbar content">
      <template #start>
        <div class=" flex gap-7">
          <img src="../../assets/logo.png" width="40" alt="ArtCollab Logo"/>
           <pv-inputicon class="pi pi-bars text-2xl mt-2 block lg:hidden hover:text-cyan-600 " @click="toggle" />
          <div v-show="visible" class=" lg:flex lg:flex-row text-xs gap-5 align-items-center navbar-links" aria-label="toolbar features content">
            <h2> {{ $t('gender') }} </h2>
            <h2> {{ $t('popular')}} </h2>
            <h2> {{ $t('subscription') }} </h2>
            <h2> {{ $t('monetization') }} </h2>
            <h2 > {{ $t('artists') }} </h2>
          </div>
          <div class="card flex flex-wrap justify-content-center gap-3" aria-label="search buttons content">
            <pv-iconfield icon-position="left" >
              <pv-inputicon class="pi pi-search text-black-alpha-90 text-2xl absolute mt-1 top-0"></pv-inputicon>
              <pv-inputtext  class="pl-6" />
            </pv-iconfield>
          </div>
          <div aria-label="login button">
            <pv-button class=" bg-cyan-600" label="Iniciar Sesion"> {{ $t('login') }} </pv-button>
          </div>
        </div>
      </template>
    </pv-toolbar>
</template>

<style scoped>
.toolbar{
  border-radius:0;
}
.navbar-links h2:hover{
    cursor:pointer;
    color: #00B4CC;
 }
 .navbar-links h2{
   color:black;
   font-size: 1rem;
   font-weight: bold;
 }
 .navbar-links img {
   cursor: pointer;
 }
</style>