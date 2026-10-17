<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useData, useRoute, useRouter, withBase } from 'vitepress'

const { lang, frontmatter } = useData()
const route = useRoute()
const router = useRouter()

const isEn = computed(() => lang.value.startsWith('en'))
const isHome = computed(() => frontmatter.value.layout === 'home')
const downloadLink = computed(() => withBase(isEn.value ? '/en/download' : '/download'))

let frame = 0
let lastFloating = false
let savedWidths: number[] = []
let cleanupTimer = 0
let instantTimer = 0
let viewportWidth = 0

function shrinkTargets() {
  return [...document.querySelectorAll<HTMLElement>(
    '.VPNavBarTranslations, .VPNavBarAppearance, .VPNavBarExtra, .VPNavBarHamburger'
  )]
}

function setFloating(floating: boolean) {
  window.clearTimeout(cleanupTimer)
  const root = document.documentElement
  const targets = shrinkTargets()

  if (floating && savedWidths.length === 0) {
    savedWidths = targets.map(el => el.getBoundingClientRect().width)
    targets.forEach((el, i) => {
      el.style.maxWidth = `${savedWidths[i]}px`
    })
    // Establish numeric widths before the first collapse.
    targets.forEach(el => el.getBoundingClientRect())
  }

  targets.forEach((el, i) => {
    el.style.overflow = 'hidden'
    el.style.maxWidth = floating ? '0px' : `${savedWidths[i]}px`
  })
  root.classList.toggle('nav-floating', floating)

  if (!floating) {
    cleanupTimer = window.setTimeout(() => {
      targets.forEach(el => {
        el.style.maxWidth = ''
        el.style.overflow = ''
      })
    }, 460)
  }
}

function update() {
  frame = 0
  const root = document.documentElement
  const floating = isHome.value && Math.max(0, window.scrollY) > (lastFloating ? 8 : 48)
  if (floating !== lastFloating) setFloating(floating)
  else root.classList.toggle('nav-floating', floating)
  lastFloating = floating
}

function schedule() {
  if (frame !== 0) return
  frame = requestAnimationFrame(update)
}

function clearFloating() {
  window.clearTimeout(cleanupTimer)
  document.documentElement.classList.remove('nav-floating')
  shrinkTargets().forEach(el => {
    el.style.maxWidth = ''
    el.style.overflow = ''
  })
  lastFloating = false
  savedWidths = []
}

function resetFloating() {
  clearFloating()
  document.documentElement.classList.add('nav-instant')
  window.clearTimeout(instantTimer)
  instantTimer = window.setTimeout(() => {
    document.documentElement.classList.remove('nav-instant')
  }, 800)
}

function releaseInstant() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.clearTimeout(instantTimer)
      document.documentElement.classList.remove('nav-instant')
      document.documentElement.classList.add('nav-ready')
    })
  })
}

function resize() {
  const width = document.documentElement.clientWidth
  if (width === viewportWidth) return
  viewportWidth = width
  resetFloating()
  schedule()
  releaseInstant()
}

function isEditingContent(event: KeyboardEvent) {
  const target = event.target as HTMLElement | null
  if (!target) return false
  const tag = target.tagName
  return target.isContentEditable || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA'
}

function blockSearchHotkey(event: KeyboardEvent) {
  if (frontmatter.value.layout !== 'home') return
  const cmdK = event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)
  const slash = event.key === '/' && !isEditingContent(event)
  if (!cmdK && !slash) return
  event.preventDefault()
  event.stopImmediatePropagation()
}

onMounted(() => {
  viewportWidth = document.documentElement.clientWidth
  update()
  releaseInstant()
  router.onBeforeRouteChange = resetFloating
  router.onAfterRouteChange = releaseInstant
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', resize)
  window.addEventListener('keydown', blockSearchHotkey, true)
})

onBeforeUnmount(() => {
  router.onBeforeRouteChange = undefined
  router.onAfterRouteChange = undefined
  window.clearTimeout(instantTimer)
  clearFloating()
  document.documentElement.classList.remove('nav-instant', 'nav-ready')
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', resize)
  window.removeEventListener('keydown', blockSearchHotkey, true)
  if (frame !== 0) cancelAnimationFrame(frame)
})

watch(() => route.path, () => {
  clearFloating()
  schedule()
})
</script>

<template>
  <div v-if="isHome" class="nav-quick-actions">
    <a class="nav-quick-action nav-quick-action--download" :href="downloadLink" :aria-label="isEn ? 'Download' : '下载'">
      <svg class="nav-quick-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2v7.5m0 0L5 6.5m3 3 3-3M2.5 11v1.5A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>{{ isEn ? 'Download' : '下载' }}</span>
    </a>
    <a
      class="nav-quick-action"
      href="https://github.com/Team-MiaCode/MiaCode"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <svg class="nav-quick-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.4 6.84 9.76.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.38 9.38 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
      <span>GitHub</span>
    </a>
  </div>
</template>
