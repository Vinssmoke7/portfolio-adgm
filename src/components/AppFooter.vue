<script setup>
import { useI18n } from '@/i18n'
import { scrollToSection } from '@/composables/useScrollSpy'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__left">
        <span class="footer__brand">Andrés Godoy</span>
        <span class="footer__copy">© {{ year }} · {{ t('footer.rights') }}</span>
      </div>

      <p class="footer__built">
        <i class="pi pi-bolt"></i>
        {{ t('footer.built') }}
      </p>

      <button class="footer__top" type="button" @click="scrollToSection('inicio', 0)">
        <i class="pi pi-arrow-up"></i>
        <span>{{ t('footer.backToTop') }}</span>
      </button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
}

html.app-dark .footer {
  background: rgba(9, 14, 26, 0.6);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
}

.footer__left {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.footer__brand {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
}

.footer__copy {
  font-size: 0.78rem;
  color: var(--muted);
}

.footer__built {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  font-size: 0.78rem;
  color: var(--muted);
}

.footer__built i {
  color: var(--accent);
}

.footer__top {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--subtle-bg);
  color: var(--muted);
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.footer__top:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}

@media (max-width: 767px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
  .footer__left { align-items: center; }
}
</style>