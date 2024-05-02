<script>
export default {
  name: 'artist-room'
}
</script>

<template>
  <div class="bg-white">
    <pv-card class="bg-yellow-300	border-noround mb-6">
  <template #content>
    <div class="flex justify-content-between" aria-label="Edit content between">
    <div class="align-content-center" aria-label="">
      <h1 class="text-4xl font-bold">{{ $t('room') }}</h1>
    </div>
    <div class="sm:flex">
      <div class="column">
        <img class="sm:w-auto" src="/src/assets/miriam.png" alt="Miriam" width="223" height="224"/>
        <p class="text-xl"> Miriam Bonastre</p>
      </div>
      <div class="column">
        <img class="sm:w-auto" src="/src/assets/flor.png" alt="Flor" width="223" height="224"/>
        <p class="text-xl">Flor M. Salvador</p>
      </div>
    </div>
    </div>
  </template>
</pv-card>
  <pv-card class="border-noround surface-100 mb-5">
    <template #content>
      <div class=" flex justify-content-end">
        <p>{{ $t('chat') }} <i class="pi pi-plus"></i></p>
      </div>
    </template>
  </pv-card>
  <pv-card class="border-noround surface-100 mb-8">
    <template #content>
      <div class=" flex justify-content-start">
          <img class="sm:w-auto" src="/src/assets/miriam.png" alt="Miriam" width="70" height="70"/>
         <div class="column">
           <p class="text-bold">{{ $t('newchat') }} Miriam</p>
           <p>{{ $t('text') }}</p>
         </div>
      </div>
      <div class=" flex justify-content-end text-center">
        <p>6:19pm</p>
      </div>
    </template>
  </pv-card>
  <pv-card class="border-noround text-red-500	">
    <template #content>
    <p>{{ $t('deleteroom') }}</p>
    </template>
  </pv-card>
  </div>
</template>

<style scoped>

</style>