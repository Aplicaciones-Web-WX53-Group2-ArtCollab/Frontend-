<script>
export default {
  name: 'the-artist-room',
  data() {
    return {
      currentUsername: sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).username : '',
    };
  },
}
</script>

<template>
  <div class="bg-white" aria-label="Main content area">
    <pv-card class="bg-yellow-300	border-noround mb-6">
  <template #content>
    <div class="flex justify-content-between" aria-label="Room header">
    <div class="align-content-center" aria-label="Room title">
      <h1 class=" text-base md:text-4xl font-bold">{{ $t('artistroom.room') }}</h1>
    </div>
    <div class="sm:flex sm:gap-4" aria-label="Artists profiles">
      <div class="column" aria-label="Miriam profile">
        <img class="sm:w-auto" src="/src/assets/miriam.png" alt="Miriam" width="150" height="130"/>
        <p class="text-xl"> Miriam Bonastre</p>
      </div>
      <div class="column" aria-label="Flor profile">
        <img class="sm:w-auto" src="/src/assets/flor.png" alt="Flor" width="150" height="130"/>
        <p class="text-xl"> {{currentUsername}}</p>
      </div>
    </div>
    </div>
  </template>
</pv-card>
  <pv-card class="border-noround surface-100 mb-5">
    <template #content>
      <div class=" flex justify-content-end" aria-label="Chat creation">
        <p>{{ $t('artistroom.chat') }} <i class="pi pi-plus"></i></p>
      </div>
    </template>
  </pv-card>
  <pv-card class="border-noround surface-100 mb-8">
    <template #content>
      <div class=" flex justify-content-start"  aria-label="New chat message">
          <router-link to="/chat">
            <img class="sm:w-auto" src="/src/assets/miriam.png" alt="Miriam" width="70" height="70"/>
          </router-link>
         <div class="column">
           <p class="text-bold">{{ $t('artistroom.newchat') }} Miriam</p>
           <p>{{ $t('artistroom.text') }}</p>
         </div>
      </div>
      <div class=" flex justify-content-end text-center" aria-label="Message time">
        <p>6:19pm</p>
      </div>
    </template>
  </pv-card>
  <pv-card class="border-noround text-red-500	">
    <template #content>
    <p aria-label="Delete room option">{{ $t('artistroom.deleteroom') }}</p>
    </template>
  </pv-card>
  </div>
</template>

<style scoped>

</style>