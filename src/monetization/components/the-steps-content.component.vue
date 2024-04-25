<script>
export default {
  name: 'the-steps-content'
}
</script>

<template>
 <div class="p-9 my-2">
    <div class="mt-8">
      <h2 class="text-center font-bold text-sm lg:text-md"> Programa de reparto de ingresos publicitarios </h2>
    </div>
   <div class="mt-8">
     <h2 class="text-center font-semibold text-xs lg:text-md"> ¡Los creadores pueden ganar  50% por los anunciones mostrados en sus series!</h2>
     <h2 class="text-center font-semibold text-xs lg:text-md"> Sigue los siguientes pasos para  unirte al programa de reparto de ingresos publicitarios</h2>
   </div>

   <div class="flex flex-column lg:flex-row justify-content-center align-content-center mt-8">
     <div class="flex flex-wrap justify-content-center ">
       <div class="first-circle border-circle  w-20rem h-20rem m-2 border-2 font-bold flex align-items-center justify-content-center">
          <div class="flex flex-column my-0 w-6">
            <p class="text-center text-xl"> 1</p>
            <h1 class="text-base text-center font-bold"> Registrate con tu cuenta de escritor en el programa de reparto de ingresos publicitarios</h1>
          </div>
         </div>
     </div>
     <div class="flex flex-wrap justify-content-center ">
       <div class="first-circle border-circle  w-20rem h-20rem m-2 border-2 font-bold flex align-items-center justify-content-center">
         <div class="flex flex-column my-0 w-6">
           <p class="text-center text-xl"> 2</p>
           <h1 class="text-base text-center font-bold"> Alcanza los 20,000 me gusta y 40,000 vistas globales mensuales en tu libro</h1>
         </div>
       </div>
     </div>
     <div class="flex flex-wrap justify-content-center ">
       <div class="first-circle border-circle  w-20rem h-20rem m-2 border-2 font-bold flex align-items-center justify-content-center">
         <div class="flex flex-column my-0 w-6">
           <p class="text-center text-xl"> 3</p>
           <h1 class="text-base text-center font-bold"> Aplica para una revisión </h1>
         </div>
       </div>
     </div>
   </div>
 </div>
  <div class="flex justify-content-center align-content-center  my-7">
    <pv-button class="button-content p-4 px-5 text-xs md:text-md lg:text-xl border-none"> ¡Comienza a compartir tus historias ahora! </pv-button>
  </div>
</template>

<style scoped>
  .button-content{
    background-color: #13C3D7;
  }

</style>