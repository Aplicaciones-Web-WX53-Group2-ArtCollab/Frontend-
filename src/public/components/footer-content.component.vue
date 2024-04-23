<script>

export default {
  name: 'footer-content',
}
</script>

<template>
  <footer>
    <div  aria-label="The footer content" class="bg-cyan-600 p-4 text-white flex justify-content-center align-items-center flex-column gap-3">
      <div class="footer-logo flex flex-row align-items-center justify-content-center gap-3">
        <img src="../../assets/logo.png" alt="ArtCollab Logo" width="50" />
        <h2> ArtCollab </h2>
      </div>
       <div class="flex gap-3 ">
         <pv-inputicon class="pi pi-facebook text-2xl"   />
          <pv-inputicon class="pi pi-twitter text-2xl" />
          <pv-inputicon class="pi pi-instagram text-2xl" />
          <pv-inputicon class="pi pi-youtube text-2xl" />
       </div>
        <div class="flex gap-5 footer-links">
          <p> {{ $t('about') }} </p>
          <p> {{ $t('gender') }} </p>
          <p> {{ $t('popular') }} </p>
          <p> {{ $t('subscription') }} </p>
          <p> {{ $t('monetization') }} </p>
          <p> {{ $t('artists') }} </p>
        </div>
       <div>
          <p> Copyright &copy; 2024 ArtCollab. {{ $t('copyright') }} </p>
       </div>
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
</style>
