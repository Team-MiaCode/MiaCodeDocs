import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'MiaCode',
  lastUpdated: true,
  cleanUrls: true,
  // GitHub Pages 以项目子路径发布 (team-miacode.github.io/MiaCodeDocs/),仅 CI 构建时启用
  base: process.env.GITHUB_ACTIONS ? '/MiaCodeDocs/' : '/',
  vite: {
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
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Team-MiaCode/MiaCode' }]
  }
})
