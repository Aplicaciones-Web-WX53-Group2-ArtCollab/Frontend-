<script >


export default {
  name:'genres-navbar',

}
</script>

<template>
  <div class="flex justify-content-center align-content-center"  aria-label="Toolbar content">
      <div class="flex flex-column lg:flex-row gap-4 lg:gap-8 ">
        <RouterLink class="hover:bg-white-alpha-10  "  to="/genre"> <h4 class="text-gray-500  hover:text-yellow-500 hover:underline"> {{$t('all_types')}}</h4> </RouterLink>
        <RouterLink class="hover:bg-white-alpha-10"  to="/genre/romance"> <h4 class="text-gray-500 hover:text-yellow-500 hover:underline"> {{$t('romance_types')}} </h4> </RouterLink>
        <RouterLink class="hover:bg-white-alpha-10"  to="/genre/fantasy"> <h4 class="text-gray-500  hover:text-yellow-500 hover:underline"> {{$t('fantasy_types')}} </h4> </RouterLink>
        <RouterLink class="hover:bg-white-alpha-10"  to="/genre/comedy"> <h4 class="text-gray-500  hover:text-yellow-500 hover:underline"> {{$t('comedies_types')}} </h4></RouterLink>
      </div>
  </div>
</template>

<style scoped>
</style>
