import { resolve } from 'path'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import { ComponentsOptions, ModuleOptions, Nuxt, NuxtPage } from '@nuxt/schema'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(options: ModuleOptions, nuxt: Nuxt) {
    // ROUTES
    nuxt.hook('pages:extend', (pages: NuxtPage[]) => {
      pages.push({
        name: 'home',
        path: '/',
        file: resolve(__dirname, './pages/index.vue'),
      })
    })

    // COMPONENTS
    nuxt.hook('components:dirs', (dirs: ComponentsOptions['dirs']) => {
      dirs.push({
        path: resolve(__dirname, './components'),
      })
    })

    // COMPOSABLES
    nuxt.hook('imports:dirs', (dirs: string[]) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // PLUGINS
    addPlugin(resolve(__dirname, './plugins/primevue.ts'))
    addPlugin(resolve(__dirname, './plugins/api.ts'))
  },
})
