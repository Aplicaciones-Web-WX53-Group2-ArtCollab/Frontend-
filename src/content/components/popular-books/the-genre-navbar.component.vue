<script >


export default {
  name:'genres-navbar',

}
</script>

<template>
  <div class="flex justify-content-center align-content-center"  aria-label="Toolbar content">
      <div class="flex flex-column lg:flex-row gap-4 lg:gap-8 ">
        <RouterLink class="hover:bg-white-alpha-10  "  to="/genre"> <h4 class="text-gray-500  hover:text-yellow-500 hover:underline"> Todos</h4> </RouterLink>
        <RouterLink class="hover:bg-white-alpha-10"  to="/genre/romance"> <h4 class="text-gray-500 hover:text-yellow-500 hover:underline"> Romance </h4> </RouterLink>
        <RouterLink class="hover:bg-white-alpha-10"  to="/genre/fantasy"> <h4 class="text-gray-500  hover:text-yellow-500 hover:underline"> Fantasía </h4> </RouterLink>
        <RouterLink class="hover:bg-white-alpha-10"  to="/genre/comedy"> <h4 class="text-gray-500  hover:text-yellow-500 hover:underline"> Comedia </h4></RouterLink>
      </div>
  </div>
</template>

<style scoped>
</style>
