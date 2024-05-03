<script setup>
import { ref } from 'vue';

const defaultValue = ref('Boulevard');
const defaultValue2 = ref('¿Quién dijo que después de la tormenta sale el sol cuando puede haber un rayo? Vuelve el fenómeno literario de mayor éxito de los últimos tiempos en una edición revisada por la autora. Luke Howland, lleno de problemas y sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta. Como si cada uno fuese un cielo uno es tormenta y el otro un día soleado: él es oscuridad. Ella un rayo de sol. Y, sin embargo, juntos deciden ponerle nombre a lo que habían creado: un boulevard teñido de tonos grisáceos, celestes y azules eléctricos preparándose para la tormenta. Ella era para él y él era para ella. Una historia de amor tan única que te marcará para el resto de tus días.');
</script>

<template>
  <div class="card">
    <pv-tabview id='tv' class="details-tabview lg:max-w-full md:max-w-20rem">
      <div class="flex flex-column">
        <pv-tabpanel :header="$t('editDetails.storyDetails')" aria-label="Story Details">
          <div class="flex align-items-center justify-content-center mb-5 mt-3">
            <div class="title flex flex-column">
              <label class="text-2xl font-bold" for="title">{{ $t('editDetails.title') }}</label>
              <pv-textarea v-model="defaultValue" rows="1" cols="50" class="details-textarea lg:max-w-full md:max-w-20rem" aria-label="Title" />
            </div>
          </div>
          <div class="flex align-items-center justify-content-center mb-5">
            <div class="description flex flex-column">
              <label class="text-2xl font-bold" for="description">{{ $t('editDetails.description') }}</label>
              <pv-textarea v-model="defaultValue2" rows="14" cols="50" class="details-textarea lg:max-w-full md:max-w-20rem" aria-label="Description" />
            </div>
          </div>
        </pv-tabpanel>
      </div>
      <pv-tabpanel :header="$t('editDetails.contentTable')" aria-label="Content Table">
        <pv-card class="shadow-none">
              <template #content>
                <div class="table-of-contents flex flex-row gap-8">
                  <div class="chapters flex flex-column pr-8 mr-6">
                    <p class="pb-2">{{ $t('editDetails.prologue') }}</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 1</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 2</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }}3</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 4</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 5</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 6</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 7</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 8</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 9</p>
                    <p class="pb-2">{{ $t('editDetails.chapter') }} 10</p>
                  </div>
                  <div class="flex flex-column pl-8 ml-6">
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>100 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>130 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>150 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <router-link to="/chapter-edit">
                          <i class="pi pi-pencil"/>
                        </router-link>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>125 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>143 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>167 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p class="mr-2">80 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil "/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>101 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p class="mr-2">99 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>175 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                    <div class="right-side flex flex-row gap-2 pb-2">
                      <i class="pi pi-heart-fill"/>
                      <p>111 K</p>
                      <div class="pencil-icon custom-icon bg-cyan-500 text-white-alpha-90 border-circle">
                        <i class="pi pi-pencil"/>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
        </pv-card>
      </pv-tabpanel>
      <pv-tabpanel :header="$t('editDetails.earned')" aria-label="Earned">
      </pv-tabpanel>
    </pv-tabview>
  </div>
</template>

<style scoped>
.custom-icon {
  width: 1.5rem;
  align-items:center;
  justify-content:center;
  display:flex;
}

@media (max-width: 576px) {
  .details-textarea {
    max-width: 15rem;
  }
  .details-tabview {
    max-width: 16rem;
  }
}
</style>