<script>
export default {
  name: 'subscription-cards',
}
</script>

<template>
  <div class=" cards-container " aria-label="the cards container">
    <div class="flex flex-row flex-wrap  justify-content-center align-content-center gap-7">
      <pv-card class="w-20rem h-30rem">
        <template #title>
          <div class="flex">
            <h1> {{ $t('price') }}</h1>
            <h3 class="mt-3"> {{ $t('perMonth') }}</h3>
          </div>
        </template>
        <template #content>
          <h2 class="m-0 font-bold"> {{ $t('artist') }}</h2>
          <hr>
          <div class="text-xs">
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('profileHighlight') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2  bg-gray-300 border-circle w-5rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('priority') }}</h2>
            </div>
            <div class="mt-4">
              <pv-button class="w-100 px-8 py-2 bg-black-alpha-80 border-transparent" :label="$t('subscribe')" />
            </div>
            <div class=" mx-5 mt-2">
              <h3> {{ $t('cancelAnytime') }}</h3>
            </div>
          </div>
        </template>
      </pv-card>
      <pv-card class="w-20rem h-30rem">
        <template #title>
          <div class="flex">
            <h1> {{ $t('price') }}</h1>
            <h3 class="mt-3"> {{ $t('perMonth') }}</h3>
          </div>
        </template>
        <template #content>
          <h2 class="m-0 font-bold"> {{ $t('artist') }}</h2>
          <hr>
          <div class="text-xs">
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('freeMonthlyPackage') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2  bg-gray-300 border-circle w-3rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('earlyAccess') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2  bg-gray-300 border-circle w-2rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('noAds') }}</h2>
            </div>
            <div class="mt-4">
              <pv-button class="w-100 px-8 py-2 bg-black-alpha-80 border-transparent" :label="$t('subscribe')" />
            </div>
            <div class=" mx-5 mt-2">
              <h3> {{ $t('cancelAnytime') }}</h3>
            </div>
          </div>
        </template>
      </pv-card>
      <pv-card class="w-20rem h-30rem">
        <template #title>
          <div class="flex">
            <h1> {{ $t('price') }}</h1>
            <h3 class="mt-3"> {{ $t('perMonth') }}</h3>
          </div>
        </template>
        <template #content>
          <h2 class="m-0 font-bold"> {{ $t('artist') }}</h2>
          <hr>
          <div class="text-xs">
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('storyHighlight') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2  bg-gray-300 border-circle w-3rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('storyAds') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2  bg-gray-300 border-circle w-4rem h-2rem  font-bold flex align-items-center justify-content-center" style="font-size: 1rem"></i>
              <h2> {{ $t('recommendedList') }}</h2>
            </div>
            <div class="mt-4">
              <pv-button class="w-100 px-8 py-2 bg-black-alpha-80 border-transparent" :label="$t('subscribe')" />
            </div>
            <div class=" mx-5 mt-2">
              <h3> {{ $t('cancelAnytime') }}</h3>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.cards-container{
  background-color: rgba(0, 206, 209, 0.4);
  padding: 2rem;
  width:70%;
  margin: 0 auto;
}
</style>