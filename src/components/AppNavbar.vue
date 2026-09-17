<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Menu from 'primevue/menu'
import { useI18n } from '@/i18n'
import { useTheme } from '@/composables/useTheme'
import { useScrollSpy, scrollToSection } from '@/composables/useScrollSpy'

const { t, locale, setLocale } = useI18n()
const { theme, toggle } = useTheme()

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'habilidades', 'educacion', 'contacto']
const { activeSection } = useScrollSpy(SECTION_IDS, 90)

const links = [
  { id: 'inicio', key: 'nav.home' },
  { id: 'sobre-mi', key: 'nav.about' },
  { id: 'experiencia', key: 'nav.experience' },
  // { id: 'proyectos', key: 'nav.projects' },
  { id: 'habilidades', key: 'nav.skills' },
  { id: 'educacion', key: 'nav.education' },
  { id: 'contacto', key: 'nav.contact' },
]

const cvUrl = `${import.meta.env.BASE_URL}cv/Andres-Godoy-CV.pdf`

const isOpen = ref(false)
const isScrolled = ref(false)
const langMenu = ref()

const langItems = ref([
  { label: 'Español', code: 'es', command: () => setLocale('es') },
  { label: 'English', code: 'en', command: () => setLocale('en') },
])

const go = (id) => {
  scrollToSection(id, 78)
  isOpen.value = false
}

const toggleLang = (event) => langMenu.value.toggle(event)
const onScroll = () => { isScrolled.value = window.scrollY > 24 }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="container navbar__inner">
      <button class="brand" @click="go('inicio')" aria-label="Home">
        <span class="brand__mark">AG</span>
        <span class="brand__text">Andrés&nbsp;Godoy</span>
      </button>

      <nav class="links" :class="{ 'is-open': isOpen }">
        <button
          v-for="link in links"
          :key="link.id"
          class="links__item"
          :class="{ 'is-active': activeSection === link.id }"
          @click="go(link.id)"
        >
          {{ t(link.key) }}
        </button>

        <a class="links__item links__cv" :href="cvUrl" target="_blank" rel="noopener">
          <i class="pi pi-download"></i>
          <span>{{ t('nav.cv') }}</span>
        </a>
      </nav>

      <div class="actions">
        <button
          class="icon-btn"
          type="button"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggle"
        >
          <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </button>

        <button
          class="lang"
          type="button"
          aria-haspopup="true"
          aria-controls="lang_menu"
          :aria-label="t('nav.language')"
          @click="toggleLang"
        >
          <i class="pi pi-globe"></i>
          <span class="lang__code">{{ locale.toUpperCase() }}</span>
          <i class="pi pi-chevron-down lang__caret"></i>
        </button>
        <Menu id="lang_menu" ref="langMenu" :model="langItems" :popup="true" />

        <button
          class="icon-btn burger"
          type="button"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          @click="isOpen = !isOpen"
        >
          <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.is-scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(16px) saturate(160%);
  border-bottom-color: var(--border);
}

.navbar__inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Brand */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--text);
  font-family: inherit;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  font-weight: 800;
  font-size: 0.82rem;
  color: #06121f;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 6px 20px -6px var(--accent-glow);
}

.brand__text {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

/* Links */
.links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.links__item {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.87rem;
  font-weight: 500;
  color: var(--muted);
  padding: 0.5rem 0.7rem;
  border-radius: 10px;
  transition: color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
}

.links__item:hover {
  color: var(--text);
  background: var(--subtle-bg);
}

.links__item.is-active { color: var(--accent); }

.links__item.is-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
}

.links__cv {
  margin-left: 0.35rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text);
  border: 1px solid var(--border);
  background: var(--subtle-bg);
}

.links__cv:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}

.links__cv i { font-size: 0.75rem; }

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--subtle-bg);
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.icon-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-1px);
}

.lang {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.48rem 0.7rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--subtle-bg);
  color: var(--text);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.lang:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}

.lang__code { font-size: 0.78rem; }
.lang__caret { font-size: 0.65rem; opacity: 0.7; }

.burger { display: none; }

/* ---- Responsive ---- */
@media (max-width: 991px) {
  .burger { display: grid; }

  .links {
    position: absolute;
    top: 72px;
    left: 12px;
    right: 12px;
    flex-direction: column;
    align-items: stretch;
    gap: 0.15rem;
    padding: 0.75rem;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: var(--surface);
    backdrop-filter: blur(18px);
    box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.35);
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
    pointer-events: none;
    transition: opacity 0.22s ease, transform 0.22s ease;
  }

  html.app-dark .links {
    box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.85);
  }

  .links.is-open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .links__item {
    text-align: left;
    padding: 0.75rem 0.9rem;
    font-size: 0.95rem;
  }

  .links__item.is-active::after { display: none; }
  .links__item.is-active { background: var(--accent-soft); }

  .links__cv {
    margin-left: 0;
    justify-content: center;
    margin-top: 0.35rem;
  }
}

@media (max-width: 575px) {
  .brand__text { display: none; }
  .lang__code { display: none; }
}
</style>