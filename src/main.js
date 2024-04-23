import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)
app.use(PrimeVue)
app.component('pv-button', Button)
app.component('pv-toolbar', Toolbar)

app.mount('#app')
