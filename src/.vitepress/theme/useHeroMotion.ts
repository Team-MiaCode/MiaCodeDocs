import { useData, useRoute } from 'vitepress'
import { onBeforeUnmount, onMounted, watch } from 'vue'

export function useHeroMotion() {
  const route = useRoute()
  const { frontmatter } = useData()
  let image: HTMLElement | null = null
  let observer: IntersectionObserver | undefined
  let inView = false

  function randomize() {
    if (!image) return
    image.style.setProperty('--breathe-x', `${Math.random() * 4 - 2}px`)
    image.style.setProperty('--breathe-y', `${-(Math.random() * 3 + 3)}px`)
    image.style.setProperty('--breathe-scale', `${1.012 + Math.random() * 0.012}`)
  }

  function syncPlayback() {
    image?.style.setProperty('animation-play-state', inView && !document.hidden ? 'running' : 'paused')
  }

  function unbindImage() {
    observer?.disconnect()
    image?.removeEventListener('animationiteration', randomize)
    image?.classList.remove('hero-breathing')
    image?.style.removeProperty('animation-play-state')
  }

  function bindImage() {
    unbindImage()
    inView = false
    image = frontmatter.value.layout === 'home'
      ? document.querySelector('.VPHomeHero .image-src') : null
    if (!image) return
    randomize()
    image.style.setProperty('--breathe-duration', `${4800 + Math.random() * 2400}ms`)
    image.classList.add('hero-breathing')
    image.addEventListener('animationiteration', randomize)
    syncPlayback()
    observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncPlayback()
    })
    observer.observe(image.parentElement!)
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', syncPlayback)
    window.addEventListener('pageshow', syncPlayback)
    bindImage()
  })

  watch(() => route.path, bindImage, { flush: 'post' })

  onBeforeUnmount(() => {
    unbindImage()
    document.removeEventListener('visibilitychange', syncPlayback)
    window.removeEventListener('pageshow', syncPlayback)
  })
}
