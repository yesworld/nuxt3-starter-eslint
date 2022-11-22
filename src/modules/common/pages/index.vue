<template>
  <div>
    <h1 class="text-3xl font-bold text-primary underline">Hello world!</h1>
    <i
      class="pi pi-check"
      @click="toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 })"
    ></i>
    <i class="pi pi-times"></i>
    <Toast position="top-right" />
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()

definePageMeta({
  // layout: 'default',
})
useHead({
  title: 'My App',
})
</script>

<style lang="scss"></style>
