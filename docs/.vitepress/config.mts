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
      { text: '梗', link: '/meme' },
      { text: '成员', link: '/' }
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
      { icon: 'github', link: '/' }
    ]

  }
})
