import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'MiaCode documentation and simai chart creation guide',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/qianxia-a/MiacodeDocs/edit/main/src/:path',
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
      { text: 'MiaCode', link: '/en/miacode/' }, { text: 'About us', link: '/en/other/about' },
      { text: 'GitHub', link: 'https://github.com/fanfaredash/MiaCode' }
    ],
    sidebar: [
      { text: 'MiaCode', base: '/en/miacode', link: '/', collapsed: false, items: [
        { text: 'Quick Start', link: '/quick-start' },
        { text: 'Chart', collapsed: true, items: [
          { text: 'Main area', collapsed: true, items: [
            { text: 'Text editor', link: '/chart/text-editor' },
            { text: 'Chart preview', link: '/chart/preview' },
            { text: 'Timeline', link: '/chart/timeline' }
          ] },
          { text: 'Syntax & pattern warnings', link: '/chart/validation' },
          { text: 'Chart information', link: '/chart/information' },
          { text: 'Latency calibration', link: '/chart/latency-calibration' }
        ] },
        { text: 'Settings', collapsed: true, items: [
          { text: 'Preview settings', link: '/settings/preview' },
          { text: 'Audio settings', link: '/settings/audio' },
          { text: 'Preferences', link: '/settings/preferences' }
        ] },
        { text: 'Export', collapsed: true, items: [
          { text: 'Video export', link: '/export/video', collapsed: true, items: [
            { text: 'Intro', link: '/export/intro' }
          ] },
          { text: 'Cover export', link: '/export/cover' },
          { text: 'Package ZIP', link: '/export/zip' }
        ] },
        { text: 'Tools', collapsed: true, items: [
          { text: 'Chart organization', link: '/tools/chart-organization' },
          { text: 'track.mp3 & pv.mp4 tools', link: '/tools/media' },
          { text: 'Chart download', link: '/tools/download' },
          { text: 'Chart upload', link: '/tools/upload' }
        ] },
        { text: 'Backup & recovery', link: '/backup-recovery' }
      ] },
      { text: 'More', base: '/en/other', collapsed: true, items: [{ text: 'About us', link: '/about' }] }
    ],
    docFooter: { prev: 'Previous', next: 'Next' }, outline: { level: [2, 3], label: 'On this page' }, langMenuLabel: 'Languages'
  }
})
