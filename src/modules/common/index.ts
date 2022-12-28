import { resolve } from 'path'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend'(pages) {
      pages.push({
        name: 'home',
        path: '/',
        file: resolve(__dirname, './pages/index.vue'),
      })
    },

    // COMPONENTS
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: resolve(__dirname, './components'),
      })
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(options, nuxt) {
    // Add composables
    nuxt.hook('imports:dirs', (dirs: string[]) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    addPlugin(resolve(__dirname, './plugins/primevue.ts'))
  },
})
