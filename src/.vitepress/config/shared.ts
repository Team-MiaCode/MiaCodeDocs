import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'MiaCode',
  lastUpdated: true,
  cleanUrls: true,
  // GitHub Pages 以项目子路径发布 (team-miacode.github.io/MiaCodeDocs/),仅 CI 构建时启用
  base: process.env.GITHUB_ACTIONS ? '/MiaCodeDocs/' : '/',
  vite: {
    server: {
      host: '0.0.0.0'
    },
    ssr: {
      noExternal: ['@nolebase/*']
    },
    plugins: [
      GitChangelog({
        maxGitLogCount: 2000,
        repoURL: () => 'https://github.com/Team-MiaCode/MiaCodeDocs'
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md') || id.endsWith('download.md'),
        sections: {
          disableChangelog: false,
          disableContributors: true
        }
      }) as any
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: (process.env.GITHUB_ACTIONS ? '/MiaCodeDocs' : '') + '/images/miacode.png' }]
  ],
  themeConfig: {
    logo: '/images/miacode.png',
    siteTitle: false,
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          if (!/^(?:en\/)?miacode\//.test(env.relativePath)) return ''
          const html = md.render(src, env)
          return env.frontmatter?.search === false ? '' : html
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                displayDetails: '显示详细内容',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '未找到相关结果',
                footer: {
                  selectText: '打开',
                  selectKeyAriaLabel: '回车键',
                  navigateText: '选择结果',
                  navigateUpKeyAriaLabel: '向上方向键',
                  navigateDownKeyAriaLabel: '向下方向键',
                  closeText: '关闭',
                  closeKeyAriaLabel: '退出键'
                }
              }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search documentation', buttonAriaLabel: 'Search documentation' }
            }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Team-MiaCode/MiaCode' }]
  }
})
