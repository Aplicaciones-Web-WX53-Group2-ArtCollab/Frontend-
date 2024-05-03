<script>
import { UserEndpointService } from '@/shared/services/user-endpoint.service.js'

export default {
  name: 'the-user-login-email',
  props: ['showLogin', 'showEmailLogin'],
  data() {
    return {
      email: '',
      password: '',
      loginErrorMessage: '',
      userServices: new UserEndpointService(),
    };
  },
  methods: {
    closeLogin() {
      this.$emit('update:showEmailLogin', false);
    },

    goBack() {
      this.$emit('back');
    },

    login() {
      if (this.email==='flor-salvador01@gmail.com' || this.password==='flor123') {
        this.userServices.loginUser({
          email: this.email,
          password: this.password,
          username: 'flor_salvador_01',
          imgURL: 'https://github.com/Open-Source-SW54-Group-3-ArtCollab/Frontend/blob/c67583889d63d5be31314130243591969b6449a2/frontend/src/assets/images/flor-profile.png?raw=true',
          name: 'Flor M. Salvador',
          type: 'writer',
          subscription_id: '1',
        }
        );
      } else {
        this.loginErrorMessage = this.$t('login_email_error_message');
      }
    }
  },
  emits: ['update:showEmailLogin'],
}

</script>

<template>
  <section v-if="showEmailLogin" class="user-login-email w-full flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card h-27rem w-20rem ">
      <template #title>
        <h4 class="text-center font-bold"> {{ $t('login_email_title') }} </h4>
      </template>
      <template #content>
        <div class="card flex justify-content-center">
          <div class="flex flex-column gap-1 w-14rem">
            <label class="text-sm" for="email">{{ $t('login_email_header_1') }}</label>
            <pv-inputtext v-model="email" class="text-sm" id="email" :placeholder="$t('login_email_placeholder_1')" aria-label="Correo electrónico"/>

            <label class="text-sm" for="password">{{ $t('login_email_header_2') }}</label>

            <pv-password input-style="font-size: 0.875rem" class="text-sm" id="password" toggle-mask v-model="password" :placeholder="$t('login_email_placeholder_2')" aria-label="Contraseña"/>

            <p v-if="loginErrorMessage" class="text-red-500 login-error text-center w-8 align-self-center">{{ loginErrorMessage }}</p>

            <div class="flex justify-content-center gap-2 mt-3">
              <pv-button class="w-full bg-white text-sm" :label="$t('login_email_button_1')" plain text @click="goBack" aria-label="Volver a las opciones de inicio de sesión"/>
              <router-link to="/" class="w-full">
              <pv-button class="w-full bg-white text-sm" :label="$t('login_email_button_2')" plain text aria-label="Iniciar sesión" @click="login; closeLogin"/>
              </router-link>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center flex-column">
          <h5 class="text-center cursor-pointer" v-html="$t('login_email_footer_1')"/>
          <div class="flex justify-content-center gap-2">
            <h5 class="text-center" v-html="$t('login_email_footer_2')"/>
            <router-link to="/register"> <h5 class="text-center cursor-pointer text-yellow-900" v-html="$t('login_email_footer_3')"/></router-link>
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

.login-error{
  font-size: 0.75rem;
}

.login-card{
  background-color: #7ac8d0;
}


</style>