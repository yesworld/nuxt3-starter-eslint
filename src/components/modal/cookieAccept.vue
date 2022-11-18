<template>
  <Teleport to="body">
    <div v-if="isOpened" class="modal rounded border border-primary p-4">
      <p>
        MixPoint использует файлы cookie с целью персонализации сервисов и повышения удобства пользования веб-сайтом.
      </p>
      <p>Пользовательское соглашение, политика конфиденциальности</p>
      <p>Если вы не хотите использовать файлы cookie, измените настройки браузера.</p>
      <button class="btn green small" @click="onClick">Спасибо, понятно</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const COOKIE_KEY = '_cookie_accept_'
const SECONDS = 3600 * 24 * 31
let expireTime: number = +localStorage.getItem(COOKIE_KEY)
const now = Math.round(+new Date() / 1000)

const isOpened = ref(expireTime === 0 || now > expireTime)

const onClick = () => {
  expireTime = now + SECONDS
  localStorage.setItem(COOKIE_KEY, expireTime.toString())
  isOpened.value = false
}
</script>

<style lang="scss" scoped>
.modal {
  @apply bottom-5 right-5 ml-5 md:bottom-[7%]
    md:right-[5%];
  position: fixed;
  z-index: 999;

  p {
    @apply pb-3 text-base;
  }
}
</style>
