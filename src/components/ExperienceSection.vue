<script setup>
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="experiencia" class="section">
    <div class="container">
      <header class="section__head">
        <span class="section__tag">{{ t('experience.tag') }}</span>
        <h2 class="section__title">{{ t('experience.title') }}</h2>
        <p class="section__subtitle">{{ t('experience.subtitle') }}</p>
      </header>

      <ol class="timeline">
        <li v-for="(job, i) in t('experience.jobs')" :key="i" class="timeline__item">
          <span class="timeline__node" :class="{ 'is-current': job.current }"></span>

          <div class="job">
            <div class="job__head">
              <div>
                <h3 class="job__role">{{ job.role }}</h3>
                <p class="job__company">{{ job.company }}</p>
              </div>
              <span class="job__period" :class="{ 'is-current': job.current }">
                {{ job.period }}
              </span>
            </div>

            <p class="job__meta">
              <i class="pi pi-map-marker"></i>
              {{ job.location }}
            </p>

            <ul class="job__bullets">
              <li v-for="(b, bi) in job.bullets" :key="bi">{{ b }}</li>
            </ul>

            <ul class="job__tech">
              <li v-for="tech in job.tech" :key="tech">{{ tech }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.6rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 10px;
  bottom: 10px;
  width: 1px;
  background: linear-gradient(180deg, var(--accent), rgba(129, 140, 248, 0.25), transparent);
}

.timeline__item {
  position: relative;
  padding-bottom: 2.4rem;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__node {
  position: absolute;
  left: -1.6rem;
  top: 8px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--bg-2);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.timeline__node.is-current {
  background: var(--accent);
  box-shadow: 0 0 0 5px var(--accent-soft-border);
}

.job {
  padding: 1.6rem 1.6rem 1.4rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

html.app-dark .job {
  background: linear-gradient(160deg, rgba(24, 36, 60, 0.55), rgba(13, 20, 36, 0.55));
}

.job:hover {
  border-color: var(--accent-soft-border);
  box-shadow: var(--card-hover-shadow);
  transform: translateX(4px);
}

.job__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
}

.job__role {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
  color: var(--text);
  letter-spacing: -0.01em;
}

.job__company {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
}

.job__period {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.32rem 0.75rem;
  border-radius: 999px;
  color: var(--muted);
  border: 1px solid var(--border);
  background: var(--subtle-bg);
  white-space: nowrap;
}

.job__period.is-current {
  color: #34d399;
  border-color: rgba(52, 211, 153, 0.3);
  background: rgba(52, 211, 153, 0.08);
}

.job__meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--muted);
  margin: 0 0 1rem;
}

.job__bullets {
  margin: 0 0 1.15rem;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.job__bullets li {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--muted);
}

.job__bullets li::marker {
  color: var(--accent);
}

.job__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.job__tech li {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.3rem 0.65rem;
  border-radius: 8px;
  color: var(--accent-2);
  background: var(--accent-soft);
  border: 1px solid var(--accent-soft-border);
}

html.app-dark .job__tech li {
  color: #b7c6e0;
  background: rgba(129, 140, 248, 0.1);
  border: 1px solid rgba(129, 140, 248, 0.18);
}

@media (max-width: 575px) {
  .timeline { padding-left: 1.2rem; }
  .timeline__node { left: -1.2rem; }
  .job { padding: 1.25rem 1.1rem 1.1rem; }
}
</style>