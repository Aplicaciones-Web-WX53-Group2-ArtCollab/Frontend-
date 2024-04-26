<script setup>

</script>

<template>
  <div class="container3 flex justify-content-center align-items-center bg-orange-300">
    <div class="banner">
      <div class="banner-1 flex flex-row justify-content-center align-items-center">
        <p class="bg-cyan-600">1</p>
        <div>Libros</div>
      </div>
      <div class="banner-2 flex flex-row justify-content-center align-items-center">
        <i class="pi pi-arrow-right"></i>
        <p class="bg-cyan-600">2</p>
        <div>Capitulos</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container3 {
  margin: 1rem 0 2rem 0;
}
.banner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color:white;
}

.banner p{
  width: 40px; /* Ajusta estos valores según tus necesidades */
  height: 40px;
  border-radius: 50%; /* Esto hace que el elemento sea completamente redondo */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 2rem; /* Ajusta los márgenes */
}

.banner-1 {
  margin-right: 8rem; /* Ajusta el margen derecho para separar de los otros elementos */
}
</style>