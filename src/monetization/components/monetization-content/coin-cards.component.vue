<script>
export default {
  name: 'coin-cards'
}
</script>

<template>
  <div class="flex justify-content-evenly flex-wrap gap-8">
    <div>
      <pv-card class="border-noround p-5 w-10rem lg:w-18rem">
        <template #content>
            <img class=" ml-2 lg:ml-6 w-10 lg:w-5rem" src="../../../assets/coin.png" alt="Coin image" aria-label="Coin image"/>
            <h3 class="text-center"> 10 </h3>
        </template>
      </pv-card>
      <div class="bg-gray-200 p-2 ">
        <p class="text-center font-bold "> {{ $t('coinCards.priceCoin10') }} </p>
      </div>
    </div>

    <div>
      <pv-card class="border-noround p-5 w-10rem lg:w-18rem">
        <template #content>
          <img class=" ml-2 lg:ml-6 w-10 lg:w-5rem" src="../../../assets/coin.png" width="80" alt="Coin image" aria-label="Coin image"/>
          <h3 class="text-center"> 50 </h3>
        </template>
      </pv-card>
      <div class="bg-gray-200 p-2 ">
        <p class="text-center font-bold "> {{ $t('coinCards.priceCoin50') }} </p>
      </div>
    </div>

    <div>
      <pv-card class="border-noround p-5 w-10rem lg:w-18rem">
        <template #content>
          <img class=" ml-2 lg:ml-6 w-10 lg:w-5rem" src="../../../assets/coin.png" width="80" alt="Coin image" aria-label="Coin image"/>
          <h3 class="text-center"> 125 </h3>
        </template>
      </pv-card>
      <div class="bg-gray-200 p-2 ">
        <p class="text-center font-bold "> {{ $t('coinCards.priceCoin125') }} </p>
      </div>
    </div>

    <div>
      <pv-card class="border-noround p-5 w-10rem lg:w-18rem">
        <template #content>
          <img class=" ml-2 lg:ml-6 w-10 lg:w-5rem" src="../../../assets/coin.png" width="80" alt="Coin image" aria-label="Coin image"/>
          <h3 class="text-center"> 500 </h3>
        </template>
      </pv-card>
      <div class="bg-gray-200 p-2 ">
        <p class="text-center font-bold "> {{ $t('coinCards.priceCoin500') }} </p>
      </div>
    </div>

    <div>
      <pv-card class="border-noround p-5 w-10rem lg:w-18rem">
        <template #content>
          <img class="ml-2 lg:ml-6 w-10 lg:w-5rem" src="../../../assets/coin.png" width="80" alt="Coin image" aria-label="Coin image"/>
          <h3 class="text-center"> 1000 </h3>
        </template>
      </pv-card>
      <div class="bg-gray-200 p-2 ">
        <p class="text-center font-bold "> {{ $t('coinCards.priceCoin1000') }} </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>