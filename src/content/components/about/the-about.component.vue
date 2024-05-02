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
  <div class="about text-bluegray-900" aria-label="About Section">
    <h1 class="text-7xl font-bold" aria-label="About Title">{{ $t('footer.about') }}</h1>
    <p class="font-bold" aria-label="StartUp name">Somos ArtCollab.</p>
    <p class="line-height-4" aria-label="About Description">
      Formamos una gran familia creativa en una plataforma abierta para todos los que tienen historias para compartir.<br>
      Nuestras historias son contadas por creadores autónomos de todo el mundo.<br>
      Descubre contenido de romance, comedia y fantasía.<br>
    </p>
    <div class="surface-overlay my-3" aria-label="Benefits">
      <ul class="list-disc">
        <li aria-label="Free Access">Tienes acceso gratuito a nuevo contenido todas las semanas.</li>
        <li aria-label="Community Interaction">Lee, comenta y comparte con tus amigos y con la comunidad.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>