import { useRoute, useRouter } from 'vitepress'
import { watch } from 'vue'

type SidebarNavigationState = {
  pages: Set<string>
  lastPage: string
}

function normalizePagePath(path: string) {
  return path.replace(/\.html$/, '').replace(/\/$/, '')
}

export function useSidebarNavigation() {
  const route = useRoute()
  const router = useRouter()
  const groups = new Map<string, SidebarNavigationState>()

  watch(() => route.path, (path) => {
    if (route.data.isNotFound) return

    const page = normalizePagePath(path)
    for (const group of groups.values()) {
      if (group.pages.has(page)) group.lastPage = path
    }
  }, { flush: 'post' })

  function onSidebarInteraction(event: MouseEvent | KeyboardEvent) {
    if (event.defaultPrevented || !(event.target instanceof Element)) return
    if ('key' in event && event.key !== 'Enter') return
    if ('button' in event && event.button !== 0) return

    const header = event.target.closest('.VPSidebar .VPSidebarItem > .item')
    const section = header?.parentElement
    if (!section?.classList.contains('collapsed')) return

    const links = Array.from(section.querySelectorAll<HTMLAnchorElement>(
      ':scope > .items > .VPSidebarItem > .item > a.link'
    ))
    const defaultLink = links.find(link =>
      normalizePagePath(link.pathname).endsWith('/miacode/chart/text-editor')
    )
    if (!defaultLink) return

    const key = normalizePagePath(defaultLink.pathname)
    const pages = new Set(links.map(link => normalizePagePath(link.pathname)))
    let state = groups.get(key)
    if (!state) {
      state = { pages, lastPage: defaultLink.pathname }
      groups.set(key, state)
    } else {
      state.pages = pages
      if (!pages.has(normalizePagePath(state.lastPage))) {
        state.lastPage = defaultLink.pathname
      }
    }
    const destination = state.lastPage

    // A later task runs after the native click handler and Vue's expansion update.
    setTimeout(() => {
      if (section.isConnected && !section.classList.contains('collapsed')) {
        void router.go(destination)
      }
    }, 0)
  }

  return {
    onClickCapture: onSidebarInteraction,
    onKeydownCapture: onSidebarInteraction
  }
}
