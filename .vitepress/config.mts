import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "胖氪笔记",
  description: "专注互联网精选资源收藏与分享！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico'

    nav: [
      { text: '首页', link: '/' },
      { text: '系统', link: '/markdown-examples' },
      { text: '软件', link: '/markdown-examples' },
      { text: '工具', link: '/api-examples' },
      { text: '笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Windows 11',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Windows 10',
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
