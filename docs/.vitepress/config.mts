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
      { text: '🏠首页', link: '/' },
      { text: '💻指南', link: '/notes' },
      { text: '🛠️工具', link: '/tools' },
      { text: '📚周刊', link: '/weekly' },
      { text: '📑日志', link: '/changelog' }
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/notes/': [
        {
          text: '安装笔记',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/tools/': [
        {
          text: '软件工具',
          items: [
            { text: '工具', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/weekly/': [
        {
          text: '开源周刊',
          items: [
            { text: '周刊', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

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

    //本地搜索
    search: { 
      provider: 'local'
    }, 
  }
})
