import { defineNuxtPlugin } from '#app'
import useAuthStore, { KEY_AUTH_LOCALSTORAGE } from '@/modules/auth/stores/auth'

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const authStore = useAuthStore()
  const jwt = localStorage.getItem(KEY_AUTH_LOCALSTORAGE)
  if (jwt) {
    authStore.setToken(jwt)
  }
})
