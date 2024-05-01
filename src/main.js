import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import VueMq from 'vue3-mq'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import ArtistOverview from '@/user/pages/artist-overview.vue'
import ArtistProfilePage from '@/user/pages/artist-profile-page-1.vue'
import UserRecoverPassword from '@/user/pages/user-recover-password.vue'
import UserRegister from '@/user/pages/user-register.vue'

import PrimeVue from 'primevue/config';
import  Button  from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Card from 'primevue/card';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox'
import Divider from 'primevue/divider'
import Carousel from 'primevue/carousel'
import Image from 'primevue/image'
import Galleria from 'primevue/galleria'
import DataView from 'primevue/dataview';

import ToastService from "primevue/toastservice";
import i18n from '@/locale/i18n.js'
import Rating from 'primevue/rating'

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-iconfield', IconField);
app.component('pv-inputicon', InputIcon);
app.component('pv-inputtext', InputText);
app.component('pv-sidebar', Sidebar);
app.component('pv-card', Card);
app.component('pv-password', Password);
app.component('pv-checkbox', Checkbox);
app.component('pv-divider', Divider);
app.component('pv-carousel', Carousel);
app.component('pv-image', Image);
app.component('pv-galleria', Galleria);
app.component('pv-dataView', DataView);
app.component('pv-rating', Rating);
app.use(i18n);
app.use(ToastService);

app.use(VueMq, {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: Infinity
  },
  defaultBreakpoint: 'sm',
});

app.mount('#app')
