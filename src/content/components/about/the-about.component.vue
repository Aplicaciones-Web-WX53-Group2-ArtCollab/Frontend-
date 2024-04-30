<script>
export default {
  name: 'the-about',
  data() {
    return {
      about: 'About'
    };
  }
};
</script>

<template>
  <div class="about text-bluegray-900">
    <h1 class="text-7xl font-bold">{{ $t('footer.about') }}</h1>
    <p class="font-bold">Somos ArtCollab.</p>
    <p class="line-height-4">
      Formamos una gran familia creativa en una plataforma abierta para todos los que tienen historias para compartir.<br>
      Nuestras historias son contadas por creadores autónomos de todo el mundo.<br>
      Descubre contenido de romance, comedia y fantasía.<br>
    </p>
    <div class="surface-overlay my-3">
      <ul class="list-disc">
        <li>Tienes acceso gratuito a nuevo contenido todas las semanas.</li>
        <li>Lee, comenta y comparte con tus amigos y con la comunidad.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>