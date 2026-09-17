import { reactive, computed } from 'vue'
import es from './es'
import en from './en'

const messages = { es, en }

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null
const browser = typeof navigator !== 'undefined' && navigator.language?.startsWith('en') ? 'en' : 'es'

const state = reactive({
  locale: saved || browser,
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = state.locale
}

function resolve(locale, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), messages[locale])
}

export const i18n = {
  install(app) {
    app.config.globalProperties.$t = (path) => resolve(state.locale, path) ?? path
    app.config.globalProperties.$locale = state
  },
}

export function useI18n() {
  const t = (path) => resolve(state.locale, path) ?? path

  const setLocale = (locale) => {
    if (!messages[locale]) return
    state.locale = locale
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  }

  return {
    t,
    locale: computed(() => state.locale),
    setLocale,
    available: Object.keys(messages),
  }
}