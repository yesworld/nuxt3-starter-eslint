<template>
  <ClientOnly>
    <NuxtLink v-if="!authStore.loggedIn" to="/login">
      <Button class="p-button-success">Login</Button>
    </NuxtLink>
    <NuxtLink v-else @click="logout">
      <Button class="p-button-success">Logout</Button>
    </NuxtLink>
  </ClientOnly>
</template>

<script lang="ts" setup>
import useAuthStore from '@/modules/auth/stores/auth'
import ApiService from '@/modules/auth/apiService'
const authStore = useAuthStore()

const logout = () => {
  const httpClient = useNuxtApp().$http as ApiService
  httpClient.init()

  authStore.logout()
}
</script>
