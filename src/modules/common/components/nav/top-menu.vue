<template>
  <div class="fixed z-40 flex h-14 w-full items-center bg-white shadow-md dark:bg-black/80">
    <nav class="content">
      <div class="flex items-center justify-center">
        <NuxtLink to="/" class="mr-5">
          <img src="/logo.svg" class="h-10 sm:w-auto" alt="logo" />
        </NuxtLink>
        <NavBtnChangeTheme />
      </div>

      <div class="flex items-center justify-center">
        <NuxtLink to="/" class="mr-5">Home</NuxtLink>
        <NuxtLink to="/about" class="mr-5">About</NuxtLink>
        <NuxtLink to="/login">
          <Button class="p-button-success">Login</Button>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss">
nav {
  @apply flex basis-full items-center justify-between;
}
</style>
