import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'MiaCode 使用文档与 simai 谱面创作参考',
  themeConfig: {
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    lightModeSwitchTitle: '切换浅色配色',
    darkModeSwitchTitle: '切换深色配色',
    editLink: {
      pattern: 'https://github.com/Team-MiaCode/MiaCodeDocs/edit/main/src/:path',
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
      { text: '快速开始', link: '/miacode/quick-start', activeMatch: '^/miacode/' },
      { text: '下载', link: '/download' },
      { text: 'GitHub', link: 'https://github.com/Team-MiaCode/MiaCode' }
    ],
    sidebar: [
      { text: 'MiaCode', base: '/miacode', link: '/quick-start', collapsed: false, items: [
        { text: '快速开始', link: '/quick-start' },
        { text: '界面模式', link: '/ui-modes' },
        { text: '谱面', collapsed: false, items: [
          { text: '文字编辑', link: '/chart/text-editor' },
          { text: '谱面预览', link: '/chart/preview' },
          { text: '时间轴', link: '/chart/timeline' },
          { text: '谱面整理', link: '/tools/chart-organization' },
          { text: '语法与无理检测', link: '/chart/validation' },
          { text: '谱面信息', link: '/chart/information' },
          { text: '延迟校准', link: '/chart/latency-calibration' }
        ] },
        { text: '导出', collapsed: true, items: [
          { text: '视频导出', link: '/export/video' },
          { text: '片头', link: '/export/intro' },
          { text: '封面导出', link: '/export/cover' },
          { text: '打包 ZIP', link: '/export/zip' }
        ] },
        { text: '设置', collapsed: true, items: [
          { text: '首选项', link: '/settings/preferences' },
          { text: '预览设置', link: '/settings/preview' },
          { text: '音频设置', link: '/settings/audio' }
        ] },
        { text: '工具', collapsed: true, items: [
          { text: '音视频处理', link: '/tools/media' },
          { text: '谱面下载与上传', link: '/tools/download' }
        ] },
        { text: '备份与恢复', link: '/backup-recovery' }
      ] }
    ],
    docFooter: { prev: '上一页', next: '下一页' }, outline: { level: [2, 3], label: '页面导航' }, langMenuLabel: '切换语言'
  }
})
