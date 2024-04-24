<script>
import NavbarContent from '../../public/components/navbar-content.component.vue'
import FooterContent from '../../public/components/footer-content.component.vue'
import TheHeroSubscription from '@/monetization/components/the-hero-subscription.component.vue'

export default {
  name: 'subscription-application',
  components: {  NavbarContent ,TheHeroSubscription, FooterContent}
}
</script>

<template>
  <navbar-content/>
  <the-hero-subscription/>
  <footer-content/>
</template>

<style scoped>

</style>