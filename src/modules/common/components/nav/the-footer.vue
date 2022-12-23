<template>
  <footer class="content py-2 text-center">© 2023 {{ site }}</footer>
</template>

<script setup lang="ts">
import config from '@/config/env.config'
const site = ref(config.siteName)
</script>

<style lang="scss"></style>
