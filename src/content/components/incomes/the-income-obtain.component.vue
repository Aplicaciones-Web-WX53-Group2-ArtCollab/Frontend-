<script >
export default {
  name: 'the-income-obtain',
}
</script>

<template>

  <div class="bg-dark-blue">
    <pv-toolbar class="flex border-noround text-white-alpha-90 bg-white">
      <template #start>
        <div class="flex justify-content-start">
          <pv-button icon="pi pi-chevron-left" class="text-black-alpha-90 border-none bg-transparent"></pv-button>
          <div class="text-black-alpha-90">
            <p>{{$t('details')}}</p>
            <h3>Boulevard</h3>
          </div>
        </div>
      </template>
      <template #end>
        <div class="flex">
          <pv-button class="p-button border-round-2xl border-none text-black-alpha-90 light">{{ $t('cancel') }}</pv-button>
          <p class="lg:text-2xl">#2</p>
          <pv-button class="p-button border-round-2xl border-none text-white dark">{{ $t('save') }}</pv-button>
        </div>
        <hr/>
      </template>
    </pv-toolbar>
    <div class="flex flex-col md:flex-row mt-6 lg:justify-content-between">
      <div class=" flex ml-6">
      <img src="/src/assets/images/Boulevard-Cover.jpg" alt="Boulevard" width="265" height="372" />
      </div>
      <div class=" flex lg:mr-8 md:ml-6 ">
      <div class="rectangle-container">
        <pv-tabview>
          <pv-tabpanel :header="$t('principal')" >
          </pv-tabpanel>
          <pv-tabpanel :header="$t('recent')">
          </pv-tabpanel>
          <pv-tabpanel :header="$t('income')">
            <img src="/src/assets/images/Income-money.png" alt="Ingresos Obtenidos" width="350" height="246" />
          </pv-tabpanel>
        </pv-tabview>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.light{
  background-color: #7AC8D0;
}
.dark{
  background-color: #097682;
}
.rectangle-container{
  border: 2px solid whitesmoke;
  width: 100%;
}
</style>