import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'MiaCode 使用文档与 simai 谱面创作参考',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/qianxia-a/MiacodeDocs/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后编辑于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'MiaCode', base: '/miacode', collapsed: true, items: [
        { text: '简介', link: '/' }
      ] },
      { text: '关于我们', link: '/other/about' },
      { text: 'GitHub', link: 'https://github.com/fanfaredash/MiaCode' }
    ],
    sidebar: [
      { text: 'MiaCode', base: '/miacode', link: '/', collapsed: false, items: [
        { text: 'Quick Start', link: '/quick-start' },
        { text: '谱面', collapsed: true, items: [
          { text: '主区域', collapsed: true, items: [
            { text: '文字编辑', link: '/chart/text-editor' },
            { text: '谱面预览', link: '/chart/preview' },
            { text: '时间轴', link: '/chart/timeline' }
          ] },
          { text: '语法 & 无理检测', link: '/chart/validation' },
          { text: '谱面信息', link: '/chart/information' },
          { text: '延迟校准', link: '/chart/latency-calibration' }
        ] },
        { text: '设置', collapsed: true, items: [
          { text: '预览设置', link: '/settings/preview' },
          { text: '音频设置', link: '/settings/audio' },
          { text: '首选项', link: '/settings/preferences' }
        ] },
        { text: '导出', collapsed: true, items: [
          { text: '视频导出', link: '/export/video', collapsed: true, items: [
            { text: '片头', link: '/export/intro' }
          ] },
          { text: '封面导出', link: '/export/cover' },
          { text: '打包 ZIP', link: '/export/zip' }
        ] },
        { text: '工具', collapsed: true, items: [
          { text: '谱面整理', link: '/tools/chart-organization' },
          { text: 'track.mp3 & pv.mp4 工具', link: '/tools/media' },
          { text: '谱面下载', link: '/tools/download' },
          { text: '谱面上传', link: '/tools/upload' }
        ] },
        { text: '备份 & 恢复', link: '/backup-recovery' }
      ] },
      { text: '其余', base: '/other', collapsed: true, items: [{ text: '关于我们', link: '/about' }] }
    ],
    docFooter: { prev: '上一页', next: '下一页' }, outline: { level: [2, 3], label: '页面导航' }, langMenuLabel: '切换语言'
  }
})
