<script>


import SubscriptionCards from '@/monetization/components/subscription-cards.component.vue'

export default {
  name: 'the-hero-subscription',
  components: { SubscriptionCards }
}
</script>

<template>
  <div class="flex flex-column gap-5 mt-7" aria-label="the susbscription hero content">
    <h1 class="text-center font-bold text-xl" aria-label="Subscription plans">{{ $t('heroSubscription.subscriptionPlans') }} </h1>
    <subscription-cards/>
  </div>
</template>

<style scoped>

</style>