<template>
  <h1>Logout...</h1>
</template>
<script lang="ts" setup>
import useAuthStore from '@/modules/auth/stores/auth'

if (process.client) {
  const authStore = useAuthStore()
  authStore.logout()
  useRouter().push('/')
}
</script>
