<script>
export default {
  name: 'user-register',

  data() {
    return {
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
}

</script>

<template>
  <section class="flex justify-content-center align-items-center">
    <div class="register-container pt-7 pb-7">
      <h4>{{ $t('register_title') }}</h4>
        <div class="register-form pl-6 pt-4">
          <div class="flex flex-column gap-3">
            <label class="uppercase" for="email">{{ $t('register_email') }} *</label>
            <pv-inputtext class="input-text" id="email" :placeholder="$t('register_email_placeholder')" />

            <label class="uppercase" for="password">{{ $t('register_password') }} *</label>
            <pv-password :input-style="password_input_style" id="password" toggle-mask :placeholder="$t('register_password_placeholder')" v-model="password"
            :prompt-label="$t('register_password_prompt')" :weak-label="$t('register_password_weak')" :medium-label="$t('register_password_medium')" :strong-label="$t('register_password_strong')" />

            <label class="uppercase" for="confirm-password">{{ $t('register_password_confirm') }} *</label>
            <pv-password :input-style="password_input_style" class="password" id="confirm-password" toggle-mask :placeholder="$t('register_password_confirm_placeholder')" v-model="confirm_password" :feedback="false"/>

            <label class="uppercase" for="username">{{ $t('register_username') }} *</label>
            <pv-inputtext class="input-text" id="username" :placeholder="$t('register_username_placeholder')" />

            <div class="flex align-items-center">
              <pv-checkbox v-model="artist" inputId="is_artist" :binary="true"/>
              <label for="is_artist" class="ml-2"> {{ $t('register_checkbox') }}</label>
            </div>

            <h4>{{ $t('register_terms') }}</h4>
            <h4>{{ $t('register_data_policy') }}</h4>

            <div class="flex justify-content-center gap-2 mt-3 mb-3">
              <pv-button class="register-button w-full w-10rem" :label="$t('register_button')" plain text/>
            </div>

            <pv-divider align="center" type="solid" >
              <b>{{ $t('register_footer') }}</b>
            </pv-divider>

            <div class="flex justify-content-center gap-5">
              <i class="pi pi-google text-7xl cursor-pointer" ></i>
              <i class="pi pi-facebook text-7xl cursor-pointer" ></i>
              <i class="pi pi-twitter text-7xl cursor-pointer"></i>
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