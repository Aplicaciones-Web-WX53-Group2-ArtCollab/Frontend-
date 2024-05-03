<script>

export default {
  name: 'footer-content',
}
</script>

<template>
  <footer class="bg-cyan-600 p-4 text-white">
    <div  aria-label="The footer content" class="flex flex-row justify-content-center align-items-center md:flex-column md:gap-3 gap-5">
      <div aria-label="Company logo and name" class="footer-logo flex md:flex-row flex-column md:align-items-center align-items-start justify-content-center gap-3 ">
        <img src="../../assets/logo.png" alt="ArtCollab Logo" width="50" />
        <h2> ArtCollab </h2>
      </div>
      <div class="flex gap-3 flex md:flex-row flex-column md:align-items-center align-items-start" aria-label="Social media links" >
        <pv-inputicon class="pi pi-facebook text-2xl" aria-label="Link to Facebook"  />
        <pv-inputicon class="pi pi-twitter text-2xl" aria-label="Link to Twitter" />
        <pv-inputicon class="pi pi-instagram text-2xl" aria-label="Link to Instagram"/>
        <pv-inputicon class="pi pi-youtube text-2xl" aria-label="Link to Youtube" />
      </div>
      <div aria-label="Footer navigation links" class="flex md:gap-5 gap-3 footer-links flex md:flex-row flex-column md:align-items-center align-items-start">
       <router-link to="/about"> <p> {{ $t('footer.about') }} </p></router-link>
       <router-link to="/genre"> <p> {{ $t('footer.gender') }} </p></router-link>
       <router-link to="/populars"> <p> {{ $t('footer.popular') }} </p></router-link>
       <router-link to="/subscription"> <p> {{ $t('footer.subscription') }} </p></router-link>
       <router-link to="/monetization"> <p> {{ $t('footer.monetization') }} </p></router-link>
       <router-link to="artist"> <p> {{ $t('footer.artists') }} </p> </router-link>
      </div>
    </div>
    <div  class="copyright mt-3" aria-label="Copyright Information">
      <p> Copyright &copy; 2024 ArtCollab. {{ $t('footer.copyright') }} </p>
    </div>
  </footer>
</template>

<style scoped>
.pi{
  cursor:pointer;
}
.footer-links p{
  cursor:pointer;
}
.footer-logo {
  font-size: 0.9rem;
}
.footer-logo{
  cursor:pointer;
}
.copyright p{
  text-align:center;
}
</style>