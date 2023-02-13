<template>
  <div class="show-more-less" :class="{ opened: isOpened }">
    <div ref="$text" class="text">
      <slot />
    </div>
    <div class="btn-wrapper">
      <a class="btn-gray" @click="onClick">{{ !isOpened ? 'Показать еще' : 'Скрыть' }}</a>
      <span class="grey-line"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isOpened = ref(false)
const $text = ref<HTMLBaseElement | null>(null)

defineProps({
  maxheight: {
    type: String,
    default: '150px',
  },
})

const heightItem = computed(() => {
  return $text?.value?.scrollHeight + 'px'
})

const onClick = () => {
  isOpened.value = !isOpened.value
}
</script>

<style lang="scss">
.show-more-less {
  &.opened .text {
    max-height: v-bind(heightItem);

    &:before {
      display: none;
    }
  }

  .text {
    max-height: v-bind(maxheight);
    transition: max-height 0.25s ease-in-out;
    overflow: hidden;
    position: relative;
  }

  .text:before {
    @apply bg-gradient-to-t from-white;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    z-index: 1;
  }

  .btn-wrapper {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .grey-line {
      height: 1px;
      width: 100%;
      background: #d8d8d8;
      margin: 0 30px;
    }
  }
}
</style>
