import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "胖氪笔记",
  description: "Code Write and Share.",
  cleanUrls: true, //开启纯净链接1
  srcDir:'src',// 站点地图
  base: '/', //网站部署的路径，默认根目录
  head: [
    ['link',{ rel: 'icon', href: '/public/favicon.ico'}], //部署到vitepress仓库
  ],
  sitemap: {
    hostname: 'https://pknote.top',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '系统', link: '/系统教程' },
      { text: '软件', link: '/装机必备' },
      { text: '工具', link: '/常用工具' },
      { text: '笔记', link: '/开源项目' }
    ],

    sidebar: [
      {
        text: '操作系统',
        items: [
          { text: '系统教程', link: '/系统教程' },
          { text: '胖氪系统', link: '/胖氪系统' }
        ]
      },
      {
        text: '常用软件',
        items: [
          { text: '装机必备', link: '/装机必备' },
          { text: '系统软件', link: '/系统软件' },
          { text: '办公软件', link: '/办公软件' },
          { text: '影音娱乐', link: '/影音娱乐' },
          { text: '软件仓库', link: '/软件仓库' }
        ]
      },
      {
        text: '在线工具',
        items: [
          { text: '常用工具', link: '/常用工具' },
          { text: '办公工具', link: '/办公工具' },
          { text: '设计工具', link: '/设计工具' },
          { text: '开发工具', link: '/开发工具' },
          { text: '工具导航', link: '/工具导航' }
        ]
      },
      {
        text: '笔记资源',
        items: [
          { text: '开源项目', link: '/开源项目' },
          { text: '常用信息', link: '/常用信息' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    logo :'https://img.pknote.top/img/pknav.png',
    //本地搜索
    search: { 
      provider: 'local'
    }, 
  }
})
