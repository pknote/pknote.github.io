import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'
import { useData } from 'vitepress'

import MNavLinks from './components/MNavLinks.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks)
  },

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
}