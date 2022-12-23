<template>
  <div>
    <NavTopMenu />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <ModalCookieAccept />
    </ClientOnly>
    <NavTheFooter />
  </div>
</template>

<script lang="ts" setup>
import config from '@/config/env.config'

const route = useRoute()
useHead({
  link: [{ rel: 'canonical', href: computed(() => config.baseUrl + route.path) }],
})

useSchemaOrg([
  defineWebSite({
    name: config.title,
    description: config.description,
  }),
  defineOrganization({
    logo: config.logo,
    email: config.email,
    name: config.siteName,
    description: config.description,
  }),
])
</script>
