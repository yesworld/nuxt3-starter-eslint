<template>
  <div>
    <NuxtLink v-if="!authStore.loggedIn" to="/login">
      <Button class="p-button-success">Login</Button>
    </NuxtLink>
    <NuxtLink v-else to="/logout">
      <Button class="p-button-success">Logout</Button>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import useAuthStore from '@/modules/auth/stores/auth'
const authStore = useAuthStore()
</script>
