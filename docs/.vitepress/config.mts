import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Vanora Dynamo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.ico',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '教程', 
        items: [
          {
            text: '下载',
            link: '/help/download'
          },
          {
            text: '改包',
            link: '/help/crack'
          },
          {
            text: '指令',
            link: '/help/command'
          }
        ]
       },
      { text: '梗', link: '/guide/meme/' },
      { text: '成员', link: '/' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '开始', link: '/guide/' },
          { text: '工具', link: '/docs/tools' }, 
       ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '/' }
    ]

  }
})
