<script>
import FooterContent from '@/public/components/footer-content.component.vue'
import NavbarContent from '@/public/components/navbar-content.component.vue'
import UserLogin from '@/user/user-login.component.vue'
import UserLoginEmail from '@/user/user-login-email.component.vue'

export default {
  components: { UserLoginEmail, FooterContent, NavbarContent, UserLogin },
  data() {
    return {
      showLogin: false,
      showEmailLogin: false,
    };
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
    toggleEmailLogin() {
      this.showEmailLogin = !this.showEmailLogin;
    },
  },
};
</script>

<template>
  <navbar-content :showLogin="showLogin" :toggleLogin="toggleLogin" />
  <user-login :showLogin="showLogin" :toggleLogin="toggleLogin" @showEmailLogin="toggleEmailLogin"/>
  <user-login-email v-if="showEmailLogin" @back="toggleEmailLogin" />
  <footer-content/>
</template>

<style scoped>

</style>
