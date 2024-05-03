<script>
export default {
  name: 'the-user-recover-password'
}

</script>

<template>
  <section class="flex justify-content-center align-items-center">
    <div class="recover-container pt-7 pb-7 w-full">
      <h3 class="ml-5">{{ $t('recover_title') }}</h3>
      <div class="recover-form pt-4 flex flex-column justify-content-center align-items-center gap-5 text-center">
        <img src="../../assets/images/recover_image.png" alt="Recover Password Image" aria-label="Imagen de recuperación de contraseña">
        <h3>{{ $t('recover_password_subtitle') }}</h3>
        <h3 class="text-gray-500">{{ $t('recover_password_subtitle_2') }}</h3>
        <pv-inputtext class="input-text w-5" id="email" :placeholder="$t('recover_password_placeholder')" aria-label="Correo electrónico para recuperar contraseña"/>
        <pv-button class="recover-button w-full w-10rem bg-cyan-400" :label="$t('recover_button')" plain text aria-label="Botón de recuperación de contraseña"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.input-text{
  border: none;
  border-bottom: 1px solid #d1d1d1;
  width: 100%;
}

</style>