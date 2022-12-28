import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Galleria from 'primevue/galleria'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Divider from 'primevue/divider'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('Galleria', Galleria)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)

  /**
   * TODO: add autocomplete="on" attribute for Password component
   * @see https://github.com/primefaces/primevue/blob/master/components/password/Password.vue
   * [DOM] Input elements should have autocomplete attributes (suggested: "current-password"):
   * (More info: https://goo.gl/9p2vKq) input.p-inputtext.p-component.p-password-input
   */
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('Divider', Divider)
})
