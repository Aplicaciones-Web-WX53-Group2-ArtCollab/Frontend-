<script>
export default {
  name: 'user-login',
  props: ['showLogin', 'toggleLogin'],
  methods: {
    closeLogin() {
      this.toggleLogin();
    },
    showEmailLogin() {
      this.$emit('showEmailLogin');
    },
  },
}

</script>

<template>
  <the-user-login-email v-if="showEmailLogin" @back="showEmailLogin = false" />
  <section v-if="showLogin" class="user-login w-full flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card h-24rem w-20rem">
      <template #title>
        <h4 class="text-center font-bold"> {{ $t('login_card_title') }} </h4>
      </template>
      <template #content>
        <h5 class="text-center">
          {{ $t('login_card_subtitle') }}
        </h5>
        <div class ="mt-3 login-buttons flex flex-column gap-3">
          <pv-button class="w-full bg-white" icon="pi pi-envelope" :label="$t('login_email_button')" plain text @click="showEmailLogin"/>
          <pv-button class="w-full bg-white" icon="pi pi-google" :label="$t('login_google_button')" plain text/>
          <pv-button class="w-full bg-white" icon="pi pi-facebook" :label="$t('login_facebook_button')" plain text/>
          <pv-button class="w-full bg-white" icon="pi pi-twitter" :label="$t('login_twitter_button')" plain text/>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center">
          <h5 class="text-center" v-html="$t('login_card_footer')"/>
        </div>
      </template>
    </pv-card>
  </section>
</template>

<style scoped>
.user-login {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
}

.login-card{
  background-color: #7ac8d0;
}

</style>