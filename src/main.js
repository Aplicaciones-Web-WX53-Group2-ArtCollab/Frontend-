import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from 'primevue/toolbar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import i18n from '@/locale/i18n.js'
import Image from 'primevue/image';



import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'


const app = createApp(App);

app.use(PrimeVue);

app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-iconfield', IconField);
app.component('pv-inputicon', InputIcon);
app.component('pv-inputtext', InputText);
app.component('pv-sidebar', Sidebar);
app.component('pv-button', Button);
app.component('pv-image', Image);


app.use(i18n);


app.mount('#app')
