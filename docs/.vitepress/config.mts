import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "胖氪笔记",
  description: "胖氪笔记小站！",
  cleanUrls:true, //开启纯净链接
  
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ], //fav图标

  sitemap: {
    hostname: 'https://windowsplus.cn',
  },// 站点地图

  themeConfig: {
    logo: '/logo1.png',

    search: { 
      provider: 'local'
    }, //本地搜索

    footer: { 
      copyright: 'Copyright © 2015-2024 胖氪笔记', 
    },//页脚

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '系统', link: '/os' }
    ],

    sidebar: [
      {
        text: '系统',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
