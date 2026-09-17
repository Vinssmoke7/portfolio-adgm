<script setup>
import { useI18n } from '@/i18n'

const { t } = useI18n()

const email = 'andres.sistemas98@gmail.com'
// const phone = '+58 412 228 99 35'
const linkedin = 'https://linkedin.com/in/andrés-godoy-b374a637a'
const github = 'https://github.com/Vinssmoke7' // ⚠️ reemplaza con tu usuario real

const cards = [
  { key: 'email', icon: 'pi-envelope', value: email, href: `mailto:${email}` },
//   { key: 'phone', icon: 'pi-phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
  { key: 'linkedin', icon: 'pi-linkedin', value: 'andr\u00e9s-godoy', href: linkedin, external: true },
  { key: 'github', icon: 'pi-github', value: 'github.com/Vinssmoke7', href: github, external: true },
  { key: 'location', icon: 'pi-map-marker', value: null, href: null },
]
</script>

<template>
  <section id="contacto" class="section">
    <div class="container">
      <header class="section__head section__head--center">
        <span class="section__tag">{{ t('contact.tag') }}</span>
        <h2 class="section__title">{{ t('contact.title') }}</h2>
        <p class="section__subtitle">{{ t('contact.subtitle') }}</p>
      </header>

      <div class="row g-3 justify-content-center">
        <div v-for="card in cards" :key="card.key" class="col-sm-6 col-lg-4">
          <component
            :is="card.href ? 'a' : 'div'"
            class="contact"
            :href="card.href || undefined"
            :target="card.external ? '_blank' : undefined"
            :rel="card.external ? 'noopener' : undefined"
          >
            <span class="contact__icon"><i :class="`pi ${card.icon}`"></i></span>
            <div class="contact__body">
              <span class="contact__label">{{ t(`contact.labels.${card.key}`) }}</span>
              <span class="contact__value">
                {{ card.value ?? t('contact.locationValue') }}
              </span>
            </div>
            <i v-if="card.href" class="pi pi-arrow-up-right contact__arrow"></i>
          </component>
        </div>
      </div>

      <div class="contact__cta">
        <a class="btn-cta" :href="`mailto:${email}`">
          <i class="pi pi-send"></i>
          {{ t('contact.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  gap: 0.95rem;
  height: 100%;
  padding: 1.2rem 1.3rem;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  text-decoration: none;
  color: inherit;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

html.app-dark .contact {
  background: linear-gradient(160deg, rgba(24, 36, 60, 0.55), rgba(13, 20, 36, 0.55));
}

a.contact:hover {
  transform: translateY(-3px);
  border-color: var(--accent-soft-border);
  box-shadow: var(--card-hover-shadow);
}

.contact__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  font-size: 1rem;
  flex-shrink: 0;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--accent-soft-border);
}

.contact__body {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.contact__label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--muted);
}

.contact__value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact__arrow {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--muted);
  opacity: 0;
  transition: opacity 0.22s ease, transform 0.22s ease;
}

a.contact:hover .contact__arrow {
  opacity: 1;
  transform: translate(2px, -2px);
  color: var(--accent);
}

.contact__cta {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 16px 36px -16px var(--accent-glow);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

html.app-dark .btn-cta {
  color: #06121f;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 44px -16px var(--accent-glow);
}
</style>