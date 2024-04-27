<script setup>
import { ref } from 'vue';

const defaultValue = ref('Boulevard');
const defaultValue2 = ref('¿Quién dijo que después de la tormenta sale el sol cuando puede haber un rayo? Vuelve el fenómeno literario de mayor éxito de los últimos tiempos en una edición revisada por la autora. Luke Howland, lleno de problemas y sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta. Como si cada uno fuese un cielo uno es tormenta y el otro un día soleado: él es oscuridad. Ella un rayo de sol. Y, sin embargo, juntos deciden ponerle nombre a lo que habían creado: un boulevard teñido de tonos grisáceos, celestes y azules eléctricos preparándose para la tormenta. Ella era para él y él era para ella. Una historia de amor tan única que te marcará para el resto de tus días.');
</script>

<template>
  <div class="card">
    <pv-tabview id='tv'>
      <div class="flex flex-column">
        <pv-tabpanel header="Detalles de la historia">
          <div class="flex align-items-center justify-content-center mb-5 mt-3">
            <div class="titulo flex flex-column">
              <label class="text-2xl font-bold" for="titulo">Título</label>
              <pv-textarea v-model="defaultValue" rows="1" cols="50" />
            </div>
          </div>
          <div class="flex align-items-center justify-content-center mb-5">
            <div class="descripcion flex flex-column">
              <label class="text-2xl font-bold" for="titulo">Descripción</label>
              <pv-textarea v-model="defaultValue2" rows="14" cols="50" />
            </div>
          </div>
        </pv-tabpanel>
      </div>
      <pv-tabpanel header="Tabla de contenidos">
      </pv-tabpanel>
      <pv-tabpanel header="Ingresos obtenidos">
      </pv-tabpanel>
    </pv-tabview>
  </div>
</template>

<style scoped>


</style>