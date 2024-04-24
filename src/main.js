import './assets/main.css'
import 'primeflex/primeflex.css';

import { createApp } from 'vue';
import App from './App.vue';
// import MainPage from '@/content/components/main-page/main-page.vue';

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config'
import Carousel from 'primevue/carousel'
import Galleria from 'primevue/galleria'

const app = createApp(App);

app.use(PrimeVue)
app.component('pv-carousel', Carousel)
app.component('pv-button', Button)
app.component('pv-toolbar', Toolbar)
app.component('pv-galleria', Galleria)
app.mount('#app')