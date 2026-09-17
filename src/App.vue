<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
// import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <div class="bg-decor" aria-hidden="true">
      <span class="bg-blob bg-blob--1"></span>
      <span class="bg-blob bg-blob--2"></span>
      <span class="bg-grid"></span>
    </div>

    <AppNavbar />

    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
}

.bg-decor {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  transition: opacity 0.3s ease;
}

.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.18;
  transition: opacity 0.3s ease;
}

html.app-dark .bg-blob {
  opacity: 0.35;
}

.bg-blob--1 {
  width: 520px;
  height: 520px;
  top: -160px;
  left: -120px;
  background: radial-gradient(circle, var(--accent), transparent 70%);
}

.bg-blob--2 {
  width: 620px;
  height: 620px;
  bottom: -220px;
  right: -180px;
  background: radial-gradient(circle, var(--accent-2), transparent 70%);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 64px 64px;
  opacity: 0.55;
  mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%);
}

html.app-dark .bg-grid {
  opacity: 0.35;
}

main {
  position: relative;
  z-index: 1;
}
</style>