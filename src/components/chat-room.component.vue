<script >
export default {
  name: 'chat-room',
}
</script>

<template>

  <pv-toolbar class="flex border-noround text-white-alpha-90 bg-white">
    <template #start class="flex justify-content-start">
      <div class="flex justify-content-start" aria-label="Navigation bar">
        <pv-button icon="pi pi-chevron-left" class="text-black-alpha-90 border-none bg-transparent"></pv-button>
        <div class="text-black-alpha-90">
          <p class="text-xl">{{$t('room')}}</p>
        </div>
      </div>
    </template>
    <hr/>
  </pv-toolbar>
  <div class="bg-white flex justify-content-between" aria-label="Main content area">
    <div aria-label="Chat area"><h1>Aqui va el chat</h1></div>
  <div class="cyan border-round-2xl" aria-label="User profile area">
    <div class="column-gap-0">
      <img class="ml-6" src="/src/assets/miriam.png" alt="Artistas" width="186" height="189" />
      <h1 class="text-black-alpha-90 ml-4">Miriam Bonastre</h1>
      <div class="flex mt-4" aria-label="User actions">
        <i class="pi pi-user mr-2 text-black-alpha-90 text-xl ml-8"></i>
        <i class="pi pi-search text-black-alpha-90 text-xl ml-6"></i>
      </div>
      <div class="flex" aria-label="Navigation links">
        <p class="text-black-alpha-90 text-lg ml-7">{{$t('profile')}}</p>
        <p class="text-black-alpha-90 text-lg ml-6">{{$t('search')}}</p>
      </div>
      <div class="flex mt-4" aria-label="Settings">
        <p class="text-black-alpha-90 text-lg">{{$t('settings')}}</p>
        <pv-button icon="pi pi-chevron-right" class="text-black-alpha-90 border-none bg-transparent"></pv-button>

      </div>
    </div>
    </div>
  </div>
</template>
<style >
.cyan{
  background-color: #11AEBF;
}
</style>