import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed, defineComponent, h } from 'vue'
import { InjectionKey, NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import MiaFooter from './components/MiaFooter.vue'
import NavQuickActions from './components/NavQuickActions.vue'
import RandomTagline from './components/RandomTagline.vue'
import HomeShowcase from './components/HomeShowcase.vue'
import NavBrandFeedback from './components/NavBrandFeedback.vue'
import { useSidebarNavigation } from './sidebarNavigation'
import { useHeroMotion } from './useHeroMotion'
import './custom.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$withBase = withBase
    app.use(NolebaseGitChangelogPlugin)
    app.provide(InjectionKey, {
      hideChangelogNoChangesText: true,
      commitsRelativeTime: true,
      displayAuthorsInsideCommitLine: true,
      hideContributorsHeader: true,
      hideChangelogHeader: true
    })
  },
  Layout: defineComponent({
    setup() {
      useHeroMotion()
      const sidebarNavigation = useSidebarNavigation()
      const { frontmatter, lang } = useData()
      const navTitle = computed(() => frontmatter.value.layout === 'home'
        ? 'MiaCode'
        : lang.value.startsWith('en') ? 'Documentation' : '使用说明')
      return () => h(DefaultTheme.Layout, sidebarNavigation, {
        'layout-top': () => [h(NolebaseHighlightTargetedHeading), h(NavBrandFeedback)],
        'nav-bar-title-after': () => h('span', navTitle.value),
        'nav-bar-content-after': () => h(NavQuickActions),
        'home-hero-info-after': () => h(RandomTagline),
        'home-features-before': () => h(HomeShowcase),
        'layout-bottom': () => h(MiaFooter)
      })
    }
  })
}
