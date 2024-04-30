<script>
import { UserEndpointService } from '@/user/services/user-endpoint.service.js'

export default {
  name: 'the-user-register',

  data() {
    return {
      userServices: new UserEndpointService(),
      email: '',
      username: '',
      password: '',
      confirm_password: '',
      artist: false,
      password_input_style: {
        border: 'none',
        borderBottom: '1px solid #d1d1d1',
        width: '100%',
      },
    };
  },

  computed: {
    //las propiedades Computed son funciones que se ejecutan cada vez que una de las propiedades que utiliza cambia. Lo que permite actualizar el estado de la aplicación en tiempo real.
    isEmailValid() {
      const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Expresión regular para validar el correo electrónico. Referencia: https://regexr.com/3e48o
      return re.test(this.email);
    },

    isPasswordValid() {
      return this.password.length >= 6 && this.password.length <= 16;
    },

    isConfirmPasswordValid() {
      return this.password === this.confirm_password;
    },

    isUsernameValid() {
      return this.username.length <= 20 && this.username.length >= 1;
    },

    isFormValid() {
      return this.isEmailValid && this.isPasswordValid && this.isConfirmPasswordValid && this.isUsernameValid;
    },
  },

  methods: {
    register() {
      if (this.isFormValid) {
        this.userServices.createUser({
          email: this.email,
          username: this.username,
          password: this.password,
          imgURL:'',
          name:'',
          type:this.artist ? 'artist' : 'reader',
          subscription_id: '',
        }
        // ).then(() => {
        //   this.$router.push({ name: 'home' });
        // }
        ).catch((error) => {
          console.error(error);
        });
      }
    },
  },
}

</script>

<template>
  <section class="flex justify-content-center align-items-center" aria-label="Registro de usuario">
    <div class="register-container pt-7 pb-7">
      <h4>{{ $t('register_title') }}</h4>
        <div class="register-form pl-6 pt-4">
          <div class="flex flex-column gap-3">
            <label class="uppercase" for="email">{{ $t('register_email') }} *</label>
            <pv-inputtext :invalid="!isEmailValid" v-model="email" class="input-text" id="email" :placeholder="$t('register_email_placeholder')" aria-label="Correo electrónico"/>
            <small v-if="!isEmailValid" class="text-red-500" aria-label="">{{ $t('register_email_invalid') }}</small>

            <label class="uppercase" for="password">{{ $t('register_password') }} *</label>
            <pv-password :input-style="password_input_style" :invalid="!isPasswordValid" id="password" toggle-mask :placeholder="$t('register_password_placeholder')" v-model="password"
            :prompt-label="$t('register_password_prompt')" :weak-label="$t('register_password_weak')" :medium-label="$t('register_password_medium')" :strong-label="$t('register_password_strong')" aria-label="Contraseña"/>
            <small v-if="!isPasswordValid" class="text-red-500">{{ $t('register_password_invalid') }}</small>

            <label class="uppercase" for="confirm-password">{{ $t('register_password_confirm') }} *</label>
            <pv-password :input-style="password_input_style" :invalid="!isConfirmPasswordValid" class="password" id="confirm-password" toggle-mask :placeholder="$t('register_password_confirm_placeholder')" v-model="confirm_password" :feedback="false" aria-label="Confirmar contraseña"/>
            <small v-if="!isConfirmPasswordValid" class="text-red-500">{{ $t('register_password_confirm_invalid') }}</small>

            <label class="uppercase" for="username">{{ $t('register_username') }} *</label>
            <pv-inputtext class="input-text" :invalid="!isUsernameValid" v-model="username" id="username" :placeholder="$t('register_username_placeholder')" aria-label="Nombre de usuario"/>
            <small v-if="!isUsernameValid" class="text-red-500">{{ $t('register_username_invalid') }}</small>

            <div class="flex align-items-center">
              <pv-checkbox v-model="artist" inputId="is_artist" :binary="true" aria-label="Artista"/>
              <label for="is_artist" class="ml-2"> {{ $t('register_checkbox') }}</label>
            </div>

            <h4>{{ $t('register_terms') }}</h4>
            <h4>{{ $t('register_data_policy') }}</h4>

            <div class="flex justify-content-center gap-2 mt-3 mb-3">
              <pv-button class="register-button w-full w-10rem" @click="register" :label="$t('register_button')" plain text aria-label="Botón de registro" :disabled="!isFormValid" />
            </div>
<!--            TODO: Configure route to main page-->

            <pv-divider align="center" type="solid" >
              <b>{{ $t('register_footer') }}</b>
            </pv-divider>

            <div class="flex justify-content-center gap-5">
              <i class="pi pi-google text-7xl cursor-pointer" aria-label="Google"></i>
              <i class="pi pi-facebook text-7xl cursor-pointer" aria-label="Facebook"></i>
              <i class="pi pi-twitter text-7xl cursor-pointer" aria-label="Twitter"></i>
            </div>

          </div>
        </div>
    </div>
  </section>
</template>

<style scoped>

.register-container {
  width: 80%;
}

.register-button{
  background-color: #88d7df;
}

.input-text{
  width: 100%;
  border: none;
  border-bottom: 1px solid #d1d1d1;
}


</style>