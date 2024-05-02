<script>
import NavbarContent from '@/public/components/navbar-content.component.vue'
import FooterContent from '@/public/components/footer-content.component.vue'
import TheChatRoom from '@/collaboration/components/the-chat-room.component.vue'

export default {
  name: 'the-page-chat',
  components: { TheChatRoom,  FooterContent, NavbarContent }
}
</script>

<template>
  <navbar-content/>
  <the-chat-room/>
  <footer-content/>
</template>

<style scoped>

</style>