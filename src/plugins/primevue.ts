import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Galleria from 'primevue/galleria'
import Button from 'primevue/button'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('Galleria', Galleria)
  nuxtApp.vueApp.component('Button', Button)
})
