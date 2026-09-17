import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

// Paleta primaria personalizada (cyan) para que PrimeVue combine con el diseño
export default definePreset(Aura, {
  semantic: {
    primary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344'
    }
  }
})