<script>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import {ChatRoom} from '@/collaboration/components/the-chat-room.component.vue'

export default {
  name: 'the-page-chat',
  components: {  FooterContent, NavbarContent, ChatRoom }
}
</script>

<template>
  <navbar-content/>
  <chat-room/>
  <footer-content/>
</template>

<style scoped>

</style>