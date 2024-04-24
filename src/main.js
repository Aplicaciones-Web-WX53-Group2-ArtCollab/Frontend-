import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import MainPage from '@/content/pages/main-page.vue';


import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config'
import Carousel from 'primevue/carousel'
import Galleria from 'primevue/galleria'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputIcon from 'primevue/inputicon'
import Sidebar from 'primevue/sidebar'
import IconField from 'primevue/iconfield'
import InputText from 'primevue/inputtext'

import i18n from '@/locale/i18n.js'
import VueMq from 'vue3-mq'

const app = createApp(MainPage);

app.use(PrimeVue)
app.component('pv-carousel', Carousel)
app.component('pv-button', Button)
app.component('pv-toolbar', Toolbar)
app.component('pv-galleria', Galleria)
app.component('pv-inputicon', InputIcon)
app.component('pv-sidebar', Sidebar)
app.component('pv-iconfield', IconField)
app.component('pv-inputtext', InputText);
app.use(i18n);

app.use(VueMq, {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: Infinity
  },
  defaultBreakpoint: 'sm',
});

app.mount('#app')