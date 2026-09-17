import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const theme = ref(getInitialTheme())

const applyTheme = (t) => {
  const root = document.documentElement
  root.classList.toggle('app-dark', t === 'dark')
  root.dataset.theme = t
  root.style.colorScheme = t
}

applyTheme(theme.value)

watch(theme, (t) => {
  localStorage.setItem(STORAGE_KEY, t)
  applyTheme(t)
})

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}