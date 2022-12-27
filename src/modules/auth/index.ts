import { resolve } from 'path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend'(pages) {
      pages.push({
        name: 'login',
        path: '/login',
        file: resolve(__dirname, './pages/loginPage.vue'),
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
  },
})
