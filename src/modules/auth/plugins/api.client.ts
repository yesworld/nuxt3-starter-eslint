import { defineNuxtPlugin } from '#app'
import ApiService from '@/modules/auth/apiService'
import useAuthStore, { KEY_AUTH_LOCALSTORAGE } from '@/modules/auth/stores/auth'

declare module '#app' {
  interface NuxtApp {
    http: ApiService
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const { apiBase } = useRuntimeConfig()

  if (!apiBase) {
    throw new Error('NUXT_PUBLIC_API_BASE is not defined')
  }

  const httpClient = new ApiService(apiBase)
  const jwt = localStorage.getItem(KEY_AUTH_LOCALSTORAGE)
  if (jwt) {
    const authStore = useAuthStore()
    authStore.setToken(jwt)
    httpClient.setJwt(jwt)
  }

  nuxtApp.provide('http', httpClient)
})
