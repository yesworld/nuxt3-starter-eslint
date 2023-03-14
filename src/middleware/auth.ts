import { defineNuxtRouteMiddleware } from '#app'
import useAuthStore from '@/modules/auth/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  if (!useAuthStore().loggedIn) {
    return useRouter().push('/login')
  }
})
