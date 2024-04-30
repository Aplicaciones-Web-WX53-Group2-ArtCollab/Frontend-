import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

import 'primevue/resources/themes/aura-light-green/theme.css';
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config'
import router from '@/router.js'
import Card from 'primevue/card'
import Rating from 'primevue/rating'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import FileUpload from 'primevue/fileupload';
import Toast from "primevue/toast";
import Carousel from 'primevue/carousel'
import ToastService from "primevue/toastservice";
import ProgressBar from "primevue/progressbar";
import Badge from "primevue/badge";
import Dropdown from "primevue/dropdown";
import Galleria from 'primevue/galleria'
import i18n from '@/locale/i18n.js'
import InputText from "primevue/inputtext";
import Editor from 'primevue/editor';

const app = createApp(App);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card)
app.component("pv-rating", Rating)
app.component('pv-divider', Divider);
app.component('pv-toast', Toast);
app.component('pv-fileupload', FileUpload);
app.component('pv-progressbar', ProgressBar);
app.component('pv-badge', Badge);
app.component('pv-dropdown', Dropdown);
app.component('pv-inputtext', InputText);
app.component('pv-carousel', Carousel);
app.component('pv-galleria', Galleria);
app.component('pv-editor', Editor);

app.use(PrimeVue)
app.use(router)
app.use(ToastService)
app.use(i18n)
app.mount('#app')