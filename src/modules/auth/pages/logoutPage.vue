<template>
  <h1>Logout...</h1>
</template>

<script lang="ts" setup>
import useAuthStore from '@/modules/auth/stores/auth'
definePageMeta({
  middleware: 'auth',
})

const authStore = useAuthStore()
authStore.logout()

if (process.client) {
  useRouter().push('/')
}
</script>
