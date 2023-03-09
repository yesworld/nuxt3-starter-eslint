import { defineNuxtPlugin } from '#app'
import { FetchContext } from 'ofetch'
import useAuthStore, { KEY_AUTH_LOCALSTORAGE } from '@/modules/auth/stores/auth'

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

  const authStore = useAuthStore()
  if (process.client) {
    const jwt = localStorage.getItem(KEY_AUTH_LOCALSTORAGE)
    if (jwt) {
      authStore.setToken(jwt)
    }
  }

  const api = $fetch.create({
    baseURL: apiBase,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      // Authorization: `Bearer ${jwt}`,
    },
    onRequest({ options }) {
      // console.log('onRequest', process.server, process.client)
      if (authStore.isLoggedIn) {
        // @ts-ignore
        options.headers.Authorization = `Bearer ${authStore.token}`
      }
    },
  })

  nuxtApp.provide('api', api)
})
