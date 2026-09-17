<script setup>
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container">
      <header class="section__head">
        <span class="section__tag">{{ t('about.tag') }}</span>
        <h2 class="section__title">{{ t('about.title') }}</h2>
      </header>

      <div class="row g-4">
        <div class="col-lg-5">
          <div class="about__text">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="row g-3">
            <div v-for="(card, i) in t('about.cards')" :key="i" class="col-md-4">
              <article class="card">
                <span class="card__icon">
                  <i :class="`pi ${card.icon}`"></i>
                </span>
                <h3 class="card__title">{{ card.title }}</h3>
                <p class="card__text">{{ card.text }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__text p {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.85;
  margin: 0 0 1.2rem;
}

.about__text p:last-child {
  margin-bottom: 0;
}

.card {
  height: 100%;
  padding: 1.6rem 1.4rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

html.app-dark .card {
  background: linear-gradient(160deg, rgba(24, 36, 60, 0.6), rgba(13, 20, 36, 0.6));
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-soft-border);
  box-shadow: var(--card-hover-shadow);
}

.card__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--accent-soft-border);
}

.card__title {
  font-size: 1.02rem;
  font-weight: 700;
  margin: 0 0 0.55rem;
  color: var(--text);
}

.card__text {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
</style>