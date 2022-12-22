import { resolve } from 'path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  defaults: {},
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: resolve(__dirname, './components'),
      })
    },
  },
})
