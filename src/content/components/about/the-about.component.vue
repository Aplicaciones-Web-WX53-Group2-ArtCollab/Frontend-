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
  <div class="about mx-2 text-bluegray-900 text-center lg:text-justify" aria-label="About Section">
    <h1 class=" text-2xl lg:text-7xl font-bold" aria-label="About Title">{{ $t('footer.about') }}</h1>
    <p class="font-bold" aria-label="StartUp name">{{$t('about_title')}}</p>
    <p class="line-height-4 text-xs lg:text-xl" aria-label="About Description">
     {{$t('about_description')}}<br>
    </p>
    <div class="surface-overlay my-3" aria-label="Benefits">
      <ul class="list-disc text-xs lg:text-xl">
        <li aria-label="Free Access">{{$t('about_free_access')}}</li>
        <li aria-label="Community Interaction">{{$t('about_join')}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>