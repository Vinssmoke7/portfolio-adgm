<script setup>
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="educacion" class="section">
    <div class="container">
      <header class="section__head">
        <span class="section__tag">{{ t('education.tag') }}</span>
        <h2 class="section__title">{{ t('education.title') }}</h2>
      </header>

      <article class="edu">
        <span class="edu__icon"><i class="pi pi-graduation-cap"></i></span>

        <div class="edu__body">
          <div class="edu__top">
            <div>
              <h3 class="edu__degree">{{ t('education.degree') }}</h3>
              <p class="edu__school">{{ t('education.school') }}</p>
            </div>
            <span class="edu__status">{{ t('education.status') }}</span>
          </div>

          <div class="edu__meta">
            <span><i class="pi pi-calendar"></i> {{ t('education.period') }}</span>
            <span><i class="pi pi-map-marker"></i> {{ t('education.location') }}</span>
          </div>

          <p class="edu__note">{{ t('education.note') }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.edu {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

html.app-dark .edu {
  background: linear-gradient(160deg, rgba(24, 36, 60, 0.6), rgba(13, 20, 36, 0.6));
}

.edu:hover {
  border-color: var(--accent-soft-border);
  box-shadow: var(--card-hover-shadow);
}

.edu__icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  font-size: 1.4rem;
  flex-shrink: 0;
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 14px 30px -14px var(--accent-glow);
}

html.app-dark .edu__icon {
  color: #06121f;
}

.edu__body {
  flex: 1;
  min-width: 0;
}

.edu__top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
}

.edu__degree {
  font-size: 1.22rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--text);
  letter-spacing: -0.015em;
}

.edu__school {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--accent);
}

.edu__status {
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.34rem 0.8rem;
  border-radius: 999px;
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.3);
  background: rgba(52, 211, 153, 0.08);
  white-space: nowrap;
}

.edu__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  font-size: 0.84rem;
  color: var(--muted);
  margin-bottom: 0.9rem;
}

.edu__meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.edu__note {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--muted);
}

@media (max-width: 575px) {
  .edu {
    flex-direction: column;
    padding: 1.5rem 1.25rem;
  }
}
</style>