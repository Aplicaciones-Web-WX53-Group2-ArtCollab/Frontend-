<script>
export default {
  name: 'the-steps-content'
}
</script>

<template>
  <div class="p-9 my-2">
    <div class="mt-8">
      <h2 class="text-center font-bold text-sm lg:text-md" aria-label="$t('stepsContent.title')">{{ $t('stepsContent.title') }}</h2>
    </div>
    <div class="mt-8">
      <h2 class="text-center font-semibold text-xs lg:text-md" aria-label="$t('stepsContent.creatorsCanEarn')">{{ $t('stepsContent.creatorsCanEarn') }}</h2>
      <h2 class="text-center font-semibold text-xs lg:text-md" aria-label="$t('stepsContent.followSteps')">{{ $t('stepsContent.followSteps') }}</h2>
    </div>

    <div class="flex flex-column lg:flex-row justify-content-center align-content-center mt-8">
      <div class="flex flex-wrap justify-content-center ">
        <div class="first-circle border-circle  w-20rem h-20rem m-2 border-2 font-bold flex align-items-center justify-content-center" aria-label="$t('stepsContent.step1')">
          <div class="flex flex-column my-0 w-6">
            <p class="text-center text-xl"> 1</p>
            <h1 class="text-base text-center font-bold">{{ $t('stepsContent.step1') }}</h1>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-content-center ">
        <div class="first-circle border-circle  w-20rem h-20rem m-2 border-2 font-bold flex align-items-center justify-content-center" aria-label="$t('stepsContent.step2')">
          <div class="flex flex-column my-0 w-6">
            <p class="text-center text-xl"> 2</p>
            <h1 class="text-base text-center font-bold">{{ $t('stepsContent.step2') }}</h1>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-content-center ">
        <div class="first-circle border-circle  w-20rem h-20rem m-2 border-2 font-bold flex align-items-center justify-content-center" aria-label="$t('stepsContent.step3')">
          <div class="flex flex-column my-0 w-6">
            <p class="text-center text-xl"> 3</p>
            <h1 class="text-base text-center font-bold">{{ $t('stepsContent.step3') }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-content-center align-content-center  my-7">
    <pv-button class="button-content p-4 px-5 text-xs md:text-md lg:text-xl border-none" aria-label="$t('stepsContent.startSharing')">{{ $t('stepsContent.startSharing') }}</pv-button>
  </div>
</template>

<style scoped>
  .button-content{
    background-color: #13C3D7;
  }

</style>