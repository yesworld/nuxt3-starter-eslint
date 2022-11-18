// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt'
import viteCompression from 'vite-plugin-compression'
import config from './src/config/env.config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image-edge', 'nuxt-schema-org', '@pinia/nuxt'],
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '@/assets/main.scss',
  ],
  srcDir: 'src/',
  build: {
    transpile: ['primevue'],
  },
  vite: {
    plugins: [viteCompression({ algorithm: 'brotliCompress' })],
  },
  typescript: {
    strict: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // config: @nuxtjs/color-mode
  colorMode: {
    preference: 'light', // $colorMode.preference by default 'system'
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  // config: nuxt-schema-org
  schemaOrg: {
    canonicalHost: config.baseUrl as 'https://',
  },
})
