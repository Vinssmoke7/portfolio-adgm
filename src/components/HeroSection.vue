<script setup>
import { useI18n } from '@/i18n'
import { scrollToSection } from '@/composables/useScrollSpy'

const { t } = useI18n()
</script>

<template>
  <section id="inicio" class="hero">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Texto -->
        <div class="col-lg-7">
          <span class="badge">
            <span class="badge__dot"></span>
            {{ t('hero.badge') }}
          </span>

          <h1 class="hero__title">
            <span class="hero__greeting">{{ t('hero.greeting') }}</span>
            <span class="hero__name">{{ t('hero.name') }}</span>
          </h1>

          <p class="hero__role">
            {{ t('hero.role') }}
            <span class="hero__sep">·</span>
            <em>{{ t('hero.role2') }}</em>
          </p>

          <p class="hero__desc">{{ t('hero.description') }}</p>

          <div class="hero__actions">
            <button class="btn btn--primary" @click="scrollToSection('experiencia', 78)">
              {{ t('hero.ctaPrimary') }}
              <i class="pi pi-arrow-down"></i>
            </button>
            <button class="btn btn--ghost" @click="scrollToSection('contacto', 78)">
              {{ t('hero.ctaSecondary') }}
              <i class="pi pi-arrow-right"></i>
            </button>
          </div>

          <div class="stats">
            <div v-for="(s, i) in t('hero.stats')" :key="i" class="stats__item">
              <strong>{{ s.value }}</strong>
              <span>{{ s.label }}</span>
            </div>
          </div>
        </div>

        <!-- Terminal -->
        <div class="col-lg-5">
          <div class="terminal">
            <div class="terminal__bar">
              <span class="dot dot--red"></span>
              <span class="dot dot--yellow"></span>
              <span class="dot dot--green"></span>
              <span class="terminal__file">andres@portfolio:~</span>
            </div>
            <pre class="terminal__body"><code><span class="c-prompt">$</span> whoami
andres-godoy

<span class="c-prompt">$</span> cat stack.txt
Vue 3 · React.js · Node.js · Laravel
FastAPI · Django · PostgreSQL

<span class="c-prompt">$</span> docker ps
<span class="c-ok">✔</span> containers running smoothly

<span class="c-prompt">$</span> <span class="c-cursor">▊</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 150px 0 90px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--accent-soft-border);
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 1.6rem;
}

.badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

/* Título */
.hero__title {
  display: flex;
  flex-direction: column;
  margin: 0 0 0.9rem;
  line-height: 1.05;
}

.hero__greeting {
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.hero__name {
  font-size: clamp(2.5rem, 7vw, 4.4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  background: linear-gradient(120deg, #0f172a 15%, var(--accent) 55%, var(--accent-2) 95%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

html.app-dark .hero__name {
  background: linear-gradient(120deg, #ffffff 15%, var(--accent) 55%, var(--accent-2) 95%);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero__role {
  font-size: clamp(1rem, 2.2vw, 1.22rem);
  font-weight: 600;
  color: var(--text);
  margin: 0 0 1.1rem;
}

.hero__role em {
  font-style: normal;
  color: var(--accent);
}

.hero__sep {
  color: var(--muted);
  margin: 0 0.35rem;
}

.hero__desc {
  max-width: 560px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
  margin: 0 0 2rem;
}

/* Botones */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2.8rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.82rem 1.45rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.93rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn i {
  font-size: 0.82rem;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 12px 30px -12px var(--accent-glow);
}

html.app-dark .btn--primary {
  color: #06121f;
}

.btn--primary:hover {
  box-shadow: 0 18px 38px -12px var(--accent-glow);
}

.btn--primary:hover i {
  transform: translateY(3px);
}

.btn--ghost {
  color: var(--text);
  border-color: var(--border);
  background: var(--surface);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

html.app-dark .btn--ghost {
  background: rgba(255, 255, 255, 0.03);
  box-shadow: none;
}

.btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}

.btn--ghost:hover i {
  transform: translateX(3px);
}

/* Stats */
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stats__item strong {
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
}

.stats__item span {
  font-size: 0.78rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Terminal */
.terminal {
  border-radius: 16px;
  border: 1px solid var(--border-strong);
  background: linear-gradient(160deg, #182235 0%, #0d1527 100%);
  box-shadow: 0 24px 50px -20px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

html.app-dark .terminal {
  border-color: var(--border);
  background: linear-gradient(160deg, rgba(18, 27, 46, 0.95), rgba(13, 20, 36, 0.95));
  box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot--red { background: #ff5f57; }
.dot--yellow { background: #febc2e; }
.dot--green { background: #28c840; }

.terminal__file {
  margin-left: auto;
  font-size: 0.72rem;
  color: var(--muted);
  font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
}

.terminal__body {
  margin: 0;
  padding: 1.3rem 1.4rem;
  font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
  font-size: 0.84rem;
  line-height: 1.85;
  color: #cbd5e1;
  white-space: pre-wrap;
  word-break: break-word;
}

.c-prompt { color: #38bdf8; font-weight: 700; }
.c-ok { color: #34d399; }
.c-cursor { animation: blink 1.1s step-end infinite; color: #38bdf8; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 991px) {
  .hero {
    padding: 130px 0 70px;
    min-height: auto;
  }
  .terminal {
    margin-top: 1rem;
  }
}

@media (max-width: 575px) {
  .stats { gap: 1.5rem; }
  .stats__item strong { font-size: 1.3rem; }
}
</style>