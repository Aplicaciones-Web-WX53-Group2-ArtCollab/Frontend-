<script>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import ArtistRoom from '@/collaboration/components/the-artist-room.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'

export default {
  name: 'the-page-room',
  components: { FooterContent, ArtistRoom, NavbarContent }
}
</script>

<template>
  <navbar-content/>
  <artist-room/>
  <footer-content/>

</template>

<style scoped>

</style>