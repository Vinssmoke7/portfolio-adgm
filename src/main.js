import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'primeicons/primeicons.css'
import '@/assets/styles/main.css'

import App from './App.vue'
import { i18n } from '@/i18n'
import { reveal } from '@/directives/reveal'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark',
      cssLayer: false,
    },
  },
})

app.directive('reveal', reveal)

app.mount('#app')