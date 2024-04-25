<script>
import FooterContent from '@/public/components/footer-content.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import UserLogin from '@/user/user-login.component.vue'

export default {
  components: { FooterContent, NavbarContent, UserLogin },
  data() {
    return {
      showLogin: false,
    };
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>

<template>
  <navbar-content :showLogin="showLogin" :toggleLogin="toggleLogin" />
  <user-login :showLogin="showLogin" :toggleLogin="toggleLogin" />
  <footer-content/>
</template>

<style scoped>

</style>
