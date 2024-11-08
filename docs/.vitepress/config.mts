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

  //markdown配置
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

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

    sidebar: {
      '/os/': [
       {
          text: '系统',
          items: [
            { text: '系统', link: '/os/' },
            { text: '啦啦啦', link: '/os/lalala' },
            { text: '嘿嘿嘿', link: '/os/heiheihei' }
          ],
        },
      ],
      '/ds/': [
       {
          text: '系统',
          items: [
            { text: '系统', link: '/os/' },
            { text: '示例', link: '/api-examples' }
          ],
        },
      ],
    },

    sidebarMenuLabel:'目录',
    returnToTopLabel:'返回顶部', 
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
