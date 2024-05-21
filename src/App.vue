<script setup>
import FooterContent from '@/public/components/footer-content.component.vue'
</script>

<template>
  <div class="flex flex-column gap-8">
    <router-view/>
    <footer-content/>
  </div>
</template>

<style scoped></style>
