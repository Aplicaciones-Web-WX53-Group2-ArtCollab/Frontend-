<script>
import NavbarContent from '../../public/components/navbar-content.component.vue'
import FooterContent from '../../public/components/footer-content.component.vue'
import TheHeroSubscription from '@/monetization/components/the-hero-subscription.component.vue'
import TheCoinSection from '@/monetization/components/the-coin-section.component.vue'

export default {
  name: 'subscription-application',
  components: { TheCoinSection,  NavbarContent ,TheHeroSubscription, FooterContent}
}
</script>

<template aria-label="the subscription page content">
  <navbar-content aria-label="the navbar content"/>
  <div class="mt-1 my-4" aria-label="the subscription app section">
    <the-hero-subscription aria-label="the hero subscription content "/>
    <the-coin-section aria-label="the coin section content"/>
  </div>
  <footer-content aria-label="the footer content"/>
</template>

<style scoped>

</style>