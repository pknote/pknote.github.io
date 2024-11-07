import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "胖氪笔记",
  description: "Code Write and Share.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '系统', link: '/osdocs' },
      { text: '软件', link: '/soft' },
      { text: '工具', link: '/api-examples' },
      { text: '笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '操作系统',
        items: [
          { text: '系统教程', link: '/osdocs' },
          { text: '胖氪系统', link: '/pkos' }
        ]
      },
      {
        text: '常用软件',
        items: [
          { text: '装机必备', link: '/software' },
          { text: '系统软件', link: '/sys' },
          { text: '办公软件', link: '/office' },
          { text: '影音娱乐', link: '/music' },
          { text: '软件仓库', link: '/warehouse' }
        ]
      },
      {
        text: '在线工具',
        items: [
          { text: '常用工具', link: '/tools' },
          { text: '办公工具', link: '/pdf' },
          { text: '设计工具', link: '/design' },
          { text: '开发工具', link: '/code' },
          { text: '工具导航', link: '/nav' }
        ]
      },
      {
        text: '笔记资源',
        items: [
          { text: '开源项目', link: '/opens' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    logo :'https://img.pknote.top/img/pknav.png'
  }
})
