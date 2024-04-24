<script>
import CoinCards from '@/monetization/components/coin-cards.component.vue'

export default {
  name: 'the-coin-section',
  components: { CoinCards }
}
</script>

<template>
  <div>
    <h1 aria-label="Coin Packages"> {{ $t('coinPackages') }} </h1>
    <h3 class="my-3" aria-label="Unlock Chapters"> {{ $t('unlockChapters') }} </h3>
    <coin-cards/>
  </div>
</template>

<style scoped>
  div{
    width:70%;
    margin: 0 auto;
  }
</style>