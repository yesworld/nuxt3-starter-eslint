<template>
  <Teleport to="body">
    <div v-if="isOpened" class="modal">
      <p>
        We use cookies on our website to give you the most relevant experience by remembering your preferences and
        repeat visits. By clicking "Accept", you consent to the use of ALL the cookies.
      </p>

      <Button label="🍪 Accept" @click="onClick" />
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
  @apply bottom-5 right-5 ml-5 md:bottom-[3%] md:right-[3%];
  position: fixed;

  p {
    @apply pb-3 text-base;
  }
}
</style>
