<script setup>
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="habilidades" class="section">
    <div class="container">
      <header class="section__head">
        <span class="section__tag">{{ t('skills.tag') }}</span>
        <h2 class="section__title">{{ t('skills.title') }}</h2>
        <p class="section__subtitle">{{ t('skills.subtitle') }}</p>
      </header>

      <div class="row g-3">
        <div v-for="(group, i) in t('skills.groups')" :key="i" class="col-md-6 col-lg-4">
          <article class="skill">
            <header class="skill__head">
              <span class="skill__icon"><i :class="`pi ${group.icon}`"></i></span>
              <h3 class="skill__title">{{ group.title }}</h3>
            </header>
            <ul class="skill__list">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill {
  height: 100%;
  padding: 1.5rem 1.4rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

html.app-dark .skill {
  background: linear-gradient(160deg, rgba(24, 36, 60, 0.55), rgba(13, 20, 36, 0.55));
}

.skill:hover {
  transform: translateY(-4px);
  border-color: var(--accent-soft-border);
  box-shadow: var(--card-hover-shadow);
}

.skill__head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--border);
}

.skill__icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  font-size: 0.9rem;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--accent-soft-border);
  flex-shrink: 0;
}

.skill__title {
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.skill__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.skill__list li {
  font-size: 0.79rem;
  font-weight: 500;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  color: var(--text-2);
  background: var(--subtle-bg);
  border: 1px solid var(--border);
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

html.app-dark .skill__list li {
  color: #c3d0e6;
  background: rgba(255, 255, 255, 0.045);
}

.skill__list li:hover {
  color: var(--accent);
  border-color: var(--accent-soft-border);
  background: var(--accent-soft);
}
</style>