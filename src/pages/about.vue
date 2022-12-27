<template>
  <div class="flex flex-col" style="align-items: center">
    <div>{{ counterStore.count }}</div>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.decrement">-</button>
    <div>Mouse position x = {{ x }}, y = {{ y }}</div>

    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import useCounterStore from '@/stores/counter'

const config = useRuntimeConfig()
const { data } = await useFetch('/api/version', {
  baseURL: config.public.apiBase,
  server: false,
})

const { x, y } = useMouse()
const counterStore = useCounterStore()
</script>
