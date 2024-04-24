import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Carousel from 'primevue/carousel'

const app = createApp(App);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);

app.use(PrimeVue)
app.component('pv-carousel', Carousel)
app.component('pv-button', Button)
app.mount('#app')