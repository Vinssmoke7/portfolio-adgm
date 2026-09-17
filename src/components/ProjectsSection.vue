<script setup>
import { useI18n } from '@/i18n'

const { t } = useI18n()

const GRADIENTS = {
  sky: 'linear-gradient(135deg, #38bdf8, #6366f1)',
  violet: 'linear-gradient(135deg, #a78bfa, #ec4899)',
  emerald: 'linear-gradient(135deg, #34d399, #0ea5e9)',
  amber: 'linear-gradient(135deg, #fbbf24, #f97316)',
  rose: 'linear-gradient(135deg, #fb7185, #a855f7)',
  teal: 'linear-gradient(135deg, #2dd4bf, #22d3ee)',
}
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <header class="section__head">
        <span class="section__tag" v-reveal>{{ t('projects.tag') }}</span>
        <h2 class="section__title" v-reveal="{ delay: 60 }">{{ t('projects.title') }}</h2>
        <p class="section__subtitle" v-reveal="{ delay: 120 }">
          {{ t('projects.subtitle') }}
        </p>
      </header>

      <div class="row g-4">
        <div
          v-for="(p, i) in t('projects.items')"
          :key="i"
          class="col-md-6 col-lg-4"
          v-reveal="{ delay: (i % 3) * 90 }"
        >
          <article class="project" :style="{ '--p-grad': GRADIENTS[p.gradient] || GRADIENTS.sky }">
            <span class="project__glow" aria-hidden="true"></span>

            <header class="project__head">
              <span class="project__icon">
                <i :class="`pi ${p.icon}`"></i>
              </span>
              <span v-if="p.year" class="project__year">{{ p.year }}</span>
            </header>

            <h3 class="project__title">{{ p.title }}</h3>
            <p class="project__desc">{{ p.description }}</p>

            <ul class="project__tech">
              <li v-for="tech in p.tech" :key="tech">{{ tech }}</li>
            </ul>

            <footer class="project__foot">
              <a
                v-if="p.codeUrl"
                class="project__link"
                :href="p.codeUrl"
                target="_blank"
                rel="noopener"
              >
                <i class="pi pi-github"></i>
                {{ t('projects.viewCode') }}
              </a>
              <a
                v-if="p.demoUrl"
                class="project__link project__link--accent"
                :href="p.demoUrl"
                target="_blank"
                rel="noopener"
              >
                <i class="pi pi-external-link"></i>
                {{ t('projects.viewDemo') }}
              </a>
              <span v-if="!p.codeUrl && !p.demoUrl" class="project__private">
                <i class="pi pi-lock"></i>
                {{ t('projects.private') }}
              </span>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.6rem 1.5rem 1.4rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card-bg);
  overflow: hidden;
  transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.project::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: var(--p-grad);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.project:hover {
  transform: translateY(-6px);
  border-color: var(--accent-soft-border);
  box-shadow: var(--card-hover-shadow);
}

.project:hover::before {
  opacity: 1;
}

.project__glow {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  top: -110px;
  right: -110px;
  background: var(--p-grad);
  opacity: 0.10;
  filter: blur(40px);
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.project:hover .project__glow {
  opacity: 0.20;
}

.project__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.1rem;
}

.project__icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  font-size: 1.05rem;
  color: #06121f;
  background: var(--p-grad);
  box-shadow: 0 12px 28px -12px var(--accent-glow);
}

.project__year {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-transform: uppercase;
}

.project__title {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 0.5rem;
  color: var(--text);
}

.project__desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 1.1rem;
  flex: 1;
}

.project__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  margin: 0 0 1.2rem;
  padding: 0;
}

.project__tech li {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.28rem 0.6rem;
  border-radius: 7px;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--accent-soft-border);
}

.project__foot {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--border);
  font-size: 0.82rem;
}

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.project__link:hover {
  color: var(--text);
}

.project__link--accent {
  color: var(--accent);
  margin-left: auto;
}

.project__link--accent:hover {
  color: var(--accent-2);
}

.project__private {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  opacity: 0.75;
}
</style>