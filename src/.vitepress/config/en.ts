import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'MiaCode documentation and simai chart creation guide',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Team-MiaCode/MiaCodeDocs/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Last edited on',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Docs', link: '/en/miacode/', activeMatch: '^/en/miacode/' },
      { text: 'Download', link: '/en/download' },
      { text: 'GitHub', link: 'https://github.com/Team-MiaCode/MiaCode' }
    ],
    sidebar: [
      { text: 'MiaCode', base: '/en/miacode', link: '/', collapsed: false, items: [
        { text: 'Quick Start', link: '/quick-start' },
        { text: 'Chart', collapsed: false, items: [
          { text: 'Text editor', link: '/chart/text-editor' },
          { text: 'Chart preview', link: '/chart/preview' },
          { text: 'Timeline', link: '/chart/timeline' },
          { text: 'Chart organization', link: '/tools/chart-organization' },
          { text: 'Syntax & pattern warnings', link: '/chart/validation' },
          { text: 'Chart information', link: '/chart/information' },
          { text: 'Latency calibration', link: '/chart/latency-calibration' }
        ] },
        { text: 'Export', collapsed: true, items: [
          { text: 'Video export', link: '/export/video' },
          { text: 'Intro', link: '/export/intro' },
          { text: 'Cover export', link: '/export/cover' },
          { text: 'Package ZIP', link: '/export/zip' }
        ] },
        { text: 'Settings', collapsed: true, items: [
          { text: 'Preferences', link: '/settings/preferences' },
          { text: 'Preview settings', link: '/settings/preview' },
          { text: 'Audio settings', link: '/settings/audio' }
        ] },
        { text: 'Tools', collapsed: true, items: [
          { text: 'Audio and video processing', link: '/tools/media' },
          { text: 'Chart download and upload', link: '/tools/download' }
        ] },
        { text: 'Backup & recovery', link: '/backup-recovery' }
      ] }
    ],
    docFooter: { prev: 'Previous', next: 'Next' }, outline: { level: [2, 3], label: 'On this page' }, langMenuLabel: 'Languages'
  }
})
