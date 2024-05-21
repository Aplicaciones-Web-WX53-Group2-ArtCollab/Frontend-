<script>
export default {
  name: 'subscription-cards',
}
</script>

<template>
  <div class="cards-container" aria-label="Subscription cards container">
    <div class="flex flex-row flex-wrap justify-content-center align-content-center gap-7" aria-label="Subscription cards">
      <pv-card class=" w-20rem h-30rem" aria-label="Artist subscription card">
        <template #title>
          <div class="flex" aria-label="Subscription price">
            <h1> {{ $t('subscriptionCards.priceArtist') }}</h1>
            <h3 class="mt-3"> {{ $t('perMonth') }}</h3>
          </div>
        </template>
        <template #content>
          <h2 class="m-0 font-bold" aria-label="Subscription type"> {{ $t('subscriptionCards.artist') }}</h2>
          <hr>
          <div class="text-xs" aria-label="Subscription benefits">
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem font-bold flex align-items-center justify-content-center"  aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.profileHighlight') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-5rem h-2rem font-bold flex align-items-center justify-content-center" aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.priority') }}</h2>
            </div>
            <div class="mt-4">
              <pv-button class="w-100 px-8 py-2 bg-black-alpha-80 border-transparent" :label="$t('subscriptionCards.subscribe')" aria-label="Subscribe button" />
            </div>
            <div class="mx-5 mt-2">
              <h3> {{ $t('subscriptionCards.cancelAnytime') }}</h3>
            </div>
          </div>
        </template>
      </pv-card>
      <pv-card class="w-20rem h-30rem" aria-label="Artist subscription card">
        <template #title>
          <div class="flex" aria-label="Subscription price">
            <h1> {{ $t('subscriptionCards.priceReader') }}</h1>
            <h3 class="mt-3"> {{ $t('subscriptionCards.perMonth') }}</h3>
          </div>
        </template>
        <template #content>
          <h2 class="m-0 font-bold" aria-label="Subscription type"> {{ $t('subscriptionCards.reader') }}</h2>
          <hr>
          <div class="text-xs" aria-label="Subscription benefits">
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem font-bold flex align-items-center justify-content-center" aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.freeMonthlyPackage') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem font-bold flex align-items-center justify-content-center" aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.earlyAccess') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-2rem h-2rem font-bold flex align-items-center justify-content-center"  aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.noAds') }}</h2>
            </div>
            <div class="mt-4">
              <pv-button class="w-100 px-8 py-2 bg-black-alpha-80 border-transparent" :label="$t('subscribe')" aria-label="Subscribe button" />
            </div>
            <div class="mx-5 mt-2">
              <h3> {{ $t('subscriptionCards.cancelAnytime') }}</h3>
            </div>
          </div>
        </template>
      </pv-card>
      <pv-card class="w-20rem h-30rem" aria-label="Artist subscription card">
        <template #title>
          <div class="flex" aria-label="Subscription price">
            <h1> {{ $t('subscriptionCards.priceWriter') }}</h1>
            <h3 class="mt-3"> {{ $t('subscriptionCards.perMonth') }}</h3>
          </div>
        </template>
        <template #content>
          <h2 class="m-0 font-bold" aria-label="Subscription type"> {{ $t('subscriptionCards.writer') }}</h2>
          <hr>
          <div class="text-xs" aria-label="Subscription benefits">
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem font-bold flex align-items-center justify-content-center"  aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.storyHighlight') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-3rem h-2rem font-bold flex align-items-center justify-content-center" aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.storyAds') }}</h2>
            </div>
            <div class="flex gap-3">
              <i class="pi pi-check mt-2 bg-gray-300 border-circle w-4rem h-2rem font-bold flex align-items-center justify-content-center" aria-label="Check icon"></i>
              <h2> {{ $t('subscriptionCards.recommendedList') }}</h2>
            </div>
            <div class="mt-4">
              <pv-button class="w-100 px-8 py-2 bg-black-alpha-80 border-transparent" :label="$t('subscriptionCards.subscribe')" aria-label="Subscribe button" />
            </div>
            <div class="mx-5 mt-2">
              <h3> {{ $t('subscriptionCards.cancelAnytime') }}</h3>
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

@media (max-width: 768px) {
  .cards-container{
    width: 90%;
  }
}
</style>