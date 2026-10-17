<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const { frontmatter } = useData()
const router = useRouter()
const visible = ref(false)
const messages = ['不可以打我哟', '诶呦']
const message = ref(messages[0])
let nextMessageIndex = 0
let timer = 0

function onBrandClick(event: MouseEvent) {
  const target = event.target as Element
  const link = target.closest<HTMLAnchorElement>('.VPNavBarTitle > .title')
  if (!link) return

  if (target.closest('.logo')) {
    event.preventDefault()
    event.stopPropagation()
    window.clearTimeout(timer)
    message.value = messages[nextMessageIndex]
    nextMessageIndex = (nextMessageIndex + 1) % messages.length
    visible.value = true
    timer = window.setTimeout(() => { visible.value = false }, 2400)
  } else if (event.button === 0
    && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault()
    if (frontmatter.value.layout === 'home') {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })
    } else {
      void router.go(link.href)
    }
  }
}

onMounted(() => {
  // Brand navigation is handled here before VitePress follows the link.
  document.querySelector('.VPNavBarTitle > .title')?.classList.add('vp-raw')
  document.addEventListener('click', onBrandClick, true)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onBrandClick, true)
  document.querySelector('.VPNavBarTitle > .title')?.classList.remove('vp-raw')
  window.clearTimeout(timer)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="brand-toast">
      <div v-if="visible" class="brand-toast" role="status" aria-live="polite">
        {{ message }}
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.brand-toast {
  position: fixed;
  z-index: 200;
  bottom: 32px;
  left: 50%;
  max-width: calc(100vw - 32px);
  padding: 12px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  box-shadow: 0 8px 28px rgb(0 0 0 / 18%);
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  pointer-events: none;
  transform: translateX(-50%);
}

.brand-toast-enter-active,
.brand-toast-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}

.brand-toast-enter-from,
.brand-toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 8px);
}

@media (prefers-reduced-motion: reduce) {
  .brand-toast-enter-active,
  .brand-toast-leave-active {
    transition: none;
  }
}
</style>
