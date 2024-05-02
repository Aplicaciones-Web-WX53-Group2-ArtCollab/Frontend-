<script setup>

</script>

<template>
  <div class="container3 flex justify-content-center align-items-center bg-orange-300 mt-3 mb-5" aria-label="Banner">
    <div class="banner flex flex-row justify-content-center align-content-center text-white">
      <div class="banner-1 flex flex-row justify-content-center align-items-center" aria-label="Step 1">
        <p class="bg-cyan-600">1</p>
        <div>{{ $t('bookPublish.book') }}</div>
      </div>
      <div class="banner-2 flex flex-row justify-content-center align-items-center" aria-label="Step 2">
        <i class="pi pi-arrow-right"></i>
        <p class="bg-cyan-600">2</p>
        <div>{{ $t('bookPublish.chapters') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner p{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 2rem;
}

.banner-1 {
  margin-right: 8rem;
}

@media (max-width: 576px) {
  .banner-1 {
    margin-right: 0;
  }
}
</style>