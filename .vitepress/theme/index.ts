// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Background from './Background.vue'
import Bunny from './Bunny.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h('div', { class: 'custom-layout' }, [
      h(Background),
      h(DefaultTheme.Layout),
      h(Bunny)
    ])
  }
}