<script>

export default {
  name: 'footer-content',
}
</script>

<template>
  <footer>
     <div  aria-label="The footer content" class="bg-cyan-600 p-4 text-white flex justify-content-center align-items-center flex-column gap-3">
      <div class="flex justify-content-center align-content-center flex-column">
        <img src="../../assets/logo.png" alt="Logo" width="50" class="mx-4"/>
        <h2> ArtCollab </h2>
      </div>
       <div class="flex gap-3 ">
         <pv-inputicon class="pi pi-facebook text-2xl"   />
          <pv-inputicon class="pi pi-twitter text-2xl" />
          <pv-inputicon class="pi pi-instagram text-2xl" />
          <pv-inputicon class="pi pi-youtube text-2xl" />
       </div>
        <div class="flex gap-5">
          <p> Acerca de </p>
          <p> Géneros </p>
          <p> Populares </p>
          <p> Suscripción </p>
          <p> Monetización </p>
          <p> Artistas </p>
        </div>
       <div>
          <p> Copyright &copy; 2024 ArtCollab. All rights reserverd </p>
       </div>
    </div>
  </footer>
</template>

<style scoped></style>
