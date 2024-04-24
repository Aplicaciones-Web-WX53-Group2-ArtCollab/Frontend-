<script >
import PvToolbar from '@/main.js'
import PvButton from '@/main.js'

export default {
  name:'genres-navbar',
  components: { PvButton, PvToolbar }
}
</script>

<template>
  <pv-toolbar class="flex justify-content-center items-center w-full" aria-label="Toolbar content">
    <template #start>
      <div class="flex align-content-center gap-4">
        <pv-button label="romance-button" Romance aria-label="Romance"/>
        <pv-button label="fantasy-button" Fantasia aria-label="Fantasy"/>
        <pv-button label="comedy-button" Comedia aria-label="Comedy"/>
      </div>
    </template>
  <pv-toolbar/>
</template>

<style scoped>

</style>