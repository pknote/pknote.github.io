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
          text: '装机指南',
          items: [
            { text: '系统下载', link: '/notes/' },
            { text: '装机工具', link: '/notes/one' },
            { text: 'BIOS设置', link: '/notes/two' },
            { text: '系统安装', link: '/notes/two' },
            { text: '系统鸡活', link: '/notes/two' },
            { text: '系统优化', link: '/notes/two' },
            { text: '软件安装', link: '/notes/two' }
          ]
        },
        {
          text: '系统测评',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        {
          text: '学习笔记',
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
            { text: 'Office', link: '/tools/office' },
            { text: 'WPS', link: '/tools/wps' },
            { text: 'PDF', link: '/tools/pdf' },
            { text: '浏览器', link: '/tools/browser' },
            { text: '远程控制', link: '/tools/remote-control' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/weekly/': [
        {
          text: '2024',
          items: [
            { text: '001期--新的开始', link: '/weekly/2024/001' },
            { text: '000期--新的开始', link: '/weekly/2024/000' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://vitepress.dev/zh/' }
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
