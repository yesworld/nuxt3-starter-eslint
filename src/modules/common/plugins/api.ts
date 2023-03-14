import { defineNuxtPlugin } from '#app'
import { FetchContext } from 'ofetch'
import useAuthStore from '@/modules/auth/stores/auth'

declare module '#app' {
  interface NuxtApp {
    api: FetchContext
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const { apiBase } = useRuntimeConfig()

  if (!apiBase) {
    throw new Error('NUXT_PUBLIC_API_BASE is not defined')
  }

  const api = $fetch.create({
    baseURL: apiBase,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      // Authorization: `Bearer ${jwt}`,
    },
    onRequest({ options }) {
      const authStore = useAuthStore()
      if (authStore.isLoggedIn) {
        // @ts-ignore
        options.headers.Authorization = `Bearer ${authStore.token}`
      }
    },
  })

  nuxtApp.provide('api', api)
})
