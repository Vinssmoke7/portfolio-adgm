const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

let observer = null

if (!REDUCED && typeof IntersectionObserver !== 'undefined') {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  )
}

export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const mod = binding.arg
    if (mod) el.classList.add(`reveal--${mod}`)

    const delay = binding.value?.delay
    if (delay) el.style.transitionDelay = `${delay}ms`

    if (REDUCED || !observer) {
      el.classList.add('is-revealed')
      return
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}