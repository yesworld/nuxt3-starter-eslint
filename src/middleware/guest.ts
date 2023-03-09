import { defineNuxtRouteMiddleware } from '#app'
import useAuthStore from '@/modules/auth/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()

  if (auth.isLoggedIn) {
    return useRouter().push('/')
  }
})
