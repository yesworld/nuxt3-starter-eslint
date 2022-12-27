// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt'
import viteCompression from 'vite-plugin-compression'
import config from './src/config/env.config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    'nuxt-schema-org',
    '@pinia/nuxt',

    // Custom modules
    './src/modules/common',
    './src/modules/auth',
    './src/modules/card',
  ],
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

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost',
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      // https://v3.nuxtjs.org/api/configuration/nuxt.config#head
      title: config.title,
      titleTemplate: `%s | ${config.siteName}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: config.description },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:url', content: config.baseUrl },
        { property: 'og:site_name', content: config.siteName },
        { property: 'og:image', content: config.logo },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '45' },
        { property: 'og:image:alt', content: config.title },
        { property: 'twitter:card', content: 'summary_large_image, summary' },
        { property: 'twitter:description', content: config.description },
        { property: 'twitter:title', content: config.title },
        { property: 'twitter:site', content: config.baseUrl },
        { property: 'twitter:image', content: config.logo },
      ],
      link: [{ rel: 'shortcut icon', href: '/logo.svg', type: 'image/x-icon' }],
    },
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
