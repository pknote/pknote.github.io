import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'
import { useData } from 'vitepress'

export default {
  extends: DefaultTheme,

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