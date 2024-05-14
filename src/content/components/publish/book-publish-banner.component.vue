<script setup>

</script>

<template>
  <div class="container3 flex justify-content-center align-items-center bg-orange-300 mt-3 mb-5" aria-label="Banner">
    <div class="banner flex flex-row justify-content-center align-content-center text-white">
      <div class="banner-1 flex flex-row justify-content-center align-items-center" aria-label="Step 1">
        <router-link to="/book-publish">
          <p class="bg-cyan-600">1</p>
        </router-link>
        <div>{{ $t('book') }}</div>
      </div>
      <div class="banner-2 flex flex-row justify-content-center align-items-center" aria-label="Step 2">
        <i class="pi pi-arrow-right"></i>
        <router-link to="/chapter-publish">
          <p class="bg-cyan-600">2</p>
        </router-link>
        <div>{{ $t('chapters') }}</div>
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

.router-link-exact-active,
.router-link-active {
  color: inherit;
}

.router-link-exact-active:hover,
.router-link-active:hover {
  background-color: transparent;
}

.router-link-exact-active p:hover,
.router-link-active p:hover {
  background-color: transparent;
}

@media (max-width: 576px) {
  .banner-1 {
    margin-right: 0;
  }
}
</style>