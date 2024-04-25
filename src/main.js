import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Rating from 'primevue/rating'

import 'primeicons/primeicons.css'
import router from '@/router.js'



const app = createApp(App);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card)
app.component('pv-rating', Rating)

app.use(PrimeVue)
app.use(router)
app.mount('#app')