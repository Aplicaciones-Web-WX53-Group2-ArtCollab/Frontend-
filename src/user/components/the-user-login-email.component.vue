<script>
export default {
  name: 'the-user-login-email',
  props: ['showLogin', 'showEmailLogin'],
  data() {
    return {
      password: '',
    };
  },
  methods: {
    closeLogin() {
      this.$emit('update:showEmailLogin', false);
    },
    goBack() {
      this.$emit('back');
    },
  },
  emits: ['update:showEmailLogin'],
}

</script>

<template>
  <section v-if="showEmailLogin" class="user-login-email w-full flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card h-24rem w-20rem">
      <template #title>
        <h4 class="text-center font-bold"> {{ $t('login_email_title') }} </h4>
      </template>
      <template #content>
        <div class="card flex justify-content-center">
          <div class="flex flex-column gap-1">
            <label class="text-sm" for="email">{{ $t('login_email_header_1') }}</label>
            <pv-inputtext class="text-sm" id="email" :placeholder="$t('login_email_placeholder_1')" aria-label="Correo electrónico"/>

            <label class="text-sm" for="password">{{ $t('login_email_header_2') }}</label>

            <pv-password input-style="font-size: 0.875rem" class="text-sm" id="password" toggle-mask v-model="password" :placeholder="$t('login_email_placeholder_2')" aria-label="Contraseña"/>

            <div class="flex justify-content-center gap-2 mt-3">
              <pv-button class="w-full bg-white text-sm" :label="$t('login_email_button_1')" plain text @click="goBack" aria-label="Cerrar inicio de sesión"/>
              <pv-button class="w-full bg-white text-sm" :label="$t('login_email_button_2')" plain text aria-label="Iniciar sesión"/>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center flex-column">
          <h5 class="text-center cursor-pointer" v-html="$t('login_email_footer_1')"/>
          <div class="flex justify-content-center gap-2">
            <h5 class="text-center" v-html="$t('login_email_footer_2')"/>
            <h5 class="text-center cursor-pointer text-yellow-900" v-html="$t('login_email_footer_3')"/>
          </div>
        </div>
      </template>
    </pv-card>
  </section>
</template>

<style scoped>
.user-login-email {
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