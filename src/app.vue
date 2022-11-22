<template>
  <NavTopMenu />
  <NuxtLayout class="py-20">
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly>
    <ModalCookieAccept />
  </ClientOnly>
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
    address: {
      addressLocality: config.address.locality,
      postalCode: config.address.code,
      streetAddress: config.address.street,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.contact.telephone,
      contactType: config.contact.contactType,
    },
  }),
])
</script>
