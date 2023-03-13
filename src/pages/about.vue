<template>
  <div class="flex flex-col" style="align-items: center">
    <div>{{ counterStore.count }}</div>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.decrement">-</button>
    <div>Mouse position x = {{ x }}, y = {{ y }}</div>

    <div>Version: {{ dataServer.version }}</div>
    <div>Status: {{ dataClient.status }}</div>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import useCounterStore from '@/stores/counter'

const { x, y } = useMouse()
const counterStore = useCounterStore()

// server req
const { data: dataServer } = await useAsyncData(() => {
  return useNuxtApp().$api('/api/version')
})

// client req
const dataClient = await useNuxtApp().$api('/api/version')
</script>
