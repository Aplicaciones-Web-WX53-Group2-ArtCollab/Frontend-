<script>
import NavbarContent from '../../public/components/navbar-content.component.vue';
import FooterContent from '../../public/components/footer-content.component.vue';
import TheHeroMonetization from '@/monetization/components/the-hero-monetization.component.vue'
import TheStepsContent from '@/monetization/components/the-steps-content.component.vue'


export default {
  name: 'monetization-application',
  components: { TheStepsContent, TheHeroMonetization,  FooterContent, NavbarContent }
}
</script>

<template>
    <navbar-content/>
    <the-hero-monetization/>
    <the-steps-content/>
    <footer-content/>
</template>

<style scoped>

</style>