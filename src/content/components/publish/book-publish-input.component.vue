<script setup>
import { computed, ref } from 'vue'

const value = ref(null);
const props = defineProps({
  placeholder: String,
  height: {
    type: Number,
    default: 40,
  },
});

const lineHeight = 40; // Ajusta este valor según la altura de tu línea de texto
const paddingBottom = computed(() => props.height - lineHeight);
</script>

<template>
  <div class="input-container">
    <label class="placeholder-label" v-if="!value">{{ props.placeholder }}</label>
    <pv-inputtext id="username" v-model="value" :style="{ height: props.height + 'px', width: '100%', paddingBottom: paddingBottom + 'px' }" aria-describedby="username-help" />
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
}

.placeholder-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem;
  pointer-events: none;
  color: #999;
}
#username {
  padding-top: 0;
  padding-left: 0.5rem;
}

</style>