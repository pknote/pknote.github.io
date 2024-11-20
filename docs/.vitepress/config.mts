import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "胖氪笔记",
  description: "专注互联网精选资源收藏与分享！",
  base: '/', //网站部署到github的vitepress这个仓库里
  cleanUrls:true, //开启纯净链接无html
  //fav图标
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ],

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //左上角logo
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '💻系统下载',
        items: [
          {
            // 分组标题1
            text: 'Windows 11',
            items: [
              { text: 'LTSC', link: '/os/win11/ltsc' },
              { text: '24H2', link: '/os/win11/24h2' },
              { text: '23H2', link: '/os/win11/23h2' },
            ],
          },
          {
            // 分组标题2
            text: 'Windows 10',
            items: [
              { text: 'LTSC', link: '/' },
              { text: '22H2', link: '/' },
            ],
          },
        ],
      },
      { text: '安装笔记', link: '/notes' },
      { text: '创意周刊', link: '/weekly' },
      { text: '更新日志', link: '/changelog' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2015-2024 胖氪笔记',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',

    /* 生成站点地图 */
    sitemap: {
      hostname: 'https://notes.fe-mm.com/',
    },

    //本地搜索
    search: { 
      provider: 'local'
    }, 
  }
})
