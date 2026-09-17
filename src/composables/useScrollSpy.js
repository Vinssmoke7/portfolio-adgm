import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Detecta qué sección está visible en el viewport.
 * @param {string[]} sectionIds - ids de las secciones en orden
 * @param {number} offset - altura del navbar fijo
 */
export function useScrollSpy(sectionIds, offset = 90) {
  const activeSection = ref(sectionIds[0])

  const update = () => {
    const scrollPos = window.scrollY + offset + 4
    let current = sectionIds[0]

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollPos) current = id
    }

    // Si llegamos al fondo, marcar la última sección
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      current = sectionIds[sectionIds.length - 1]
    }

    activeSection.value = current
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { activeSection }
}

/**
 * Scroll suave a una sección compensando el navbar fijo.
 */
export function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}