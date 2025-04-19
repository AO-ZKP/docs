import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A0 Labs Docs",
  description: "Docs for A0 Labs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/aos' }
    ],

    sidebar: [
      {

        items: [
          { text: 'AO', link: '/ao' },
          { text: 'AOS', link: '/aos' },
          { text: 'Lua Rust Starter', link: '/lua-rust-starter' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
