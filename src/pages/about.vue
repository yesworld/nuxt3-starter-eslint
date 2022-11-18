<template>
  <div class="flex flex-col" style="align-items: center">
    <div>{{ counterStore.count }}</div>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>
