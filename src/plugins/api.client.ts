import { defineNuxtPlugin } from '#app'
import ApiService from '@/modules/auth/apiService'

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

  nuxtApp.provide('http', new ApiService(apiBase))
})
