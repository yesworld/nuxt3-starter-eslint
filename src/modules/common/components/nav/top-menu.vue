<template>
  <div class="fixed z-40 flex h-14 w-full items-center bg-white shadow-md dark:bg-black/80">
    <nav class="content flex items-center justify-between shadow-gray-500/10">
      <div class="flex items-center justify-center">
        <NuxtLink to="/" class="mr-5">
          <img src="/logo.svg" class="dark:fill-primary-200 h-10 fill-primary sm:w-auto" />
        </NuxtLink>
        <NavBtnChangeTheme />
      </div>

      <div class="flex items-center justify-center">
        <NuxtLink to="/" class="mr-5">Home</NuxtLink>
        <NuxtLink to="/about" class="mr-5">About</NuxtLink>
        <Button class="p-button-success">Login</Button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
