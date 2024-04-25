import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import VueMq from 'vue3-mq'

import { createApp } from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config'
import ToastService from "primevue/toastservice";

const app = createApp(App);

app.use(PrimeVue)
app.use(ToastService)

app.use(VueMq, {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: Infinity
  },
  defaultBreakpoint: 'sm',
});

app.mount('#app')
