import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import VueMq from 'vue3-mq'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'

import App from './App.vue';

import 'primevue/resources/themes/aura-light-green/theme.css';
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config'
import router from '@/router.js'

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Sidebar from 'primevue/sidebar';
import Card from 'primevue/card';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox'
import Image from 'primevue/image'
import DataView from 'primevue/dataview';

import ToastService from "primevue/toastservice";
import FileUpload from 'primevue/fileupload';
import Toast from "primevue/toast";
import Carousel from 'primevue/carousel'
import ProgressBar from "primevue/progressbar";
import Badge from "primevue/badge";
import Dropdown from "primevue/dropdown";
import Galleria from 'primevue/galleria'
import i18n from '@/locale/i18n.js'
import Rating from 'primevue/rating'
import InputText from "primevue/inputtext";
import Editor from 'primevue/editor';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Textarea from 'primevue/textarea'
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-card', Card)
app.component("pv-rating", Rating)
app.component('pv-divider', Divider);
app.component('pv-toast', Toast);
app.component('pv-fileupload', FileUpload);
app.component('pv-progressbar', ProgressBar);
app.component('pv-badge', Badge);
app.component('pv-iconfield', IconField);
app.component('pv-dropdown', Dropdown);
app.component('pv-inputtext', InputText);
app.component('pv-inputicon', InputIcon);
app.component('pv-carousel', Carousel);
app.component('pv-galleria', Galleria);
app.component('pv-editor', Editor);
app.component('pv-tabview', TabView);
app.component('pv-tabpanel', TabPanel);
app.component('pv-textarea', Textarea);
app.component('pv-sidebar', Sidebar);
app.component('pv-password', Password);
app.component('pv-checkbox', Checkbox);
app.component('pv-image', Image);
app.component('pv-dataView', DataView);
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
