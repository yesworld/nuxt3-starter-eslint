<template>
  <Carousel
    class="carousel-logos"
    :value="images"
    :num-visible="6"
    :responsive-options="responsiveOptions"
    :show-indicators="false"
  >
    <template #item="slotProps">
      <div class="px-4">
        <img :src="slotProps.data.src" :alt="slotProps.data.alt" />
      </div>
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import { CarouselResponsiveOptions } from 'primevue/carousel'
import config from '@/config/env.config'
// const $img = useImage()

const responsiveOptions = ref<CarouselResponsiveOptions[]>([
  {
    breakpoint: config.breakpoints.lg,
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: config.breakpoints.sm,
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: config.breakpoints.xs,
    numVisible: 1,
    numScroll: 1,
  },
])

const images = ref([
  {
    src: '/logos/PHP.svg',
    alt: 'logo Php',
  },
  {
    src: '/logos/PHP.svg',
    alt: 'logo Php',
  },
  {
    src: '/logos/PHP.svg',
    alt: 'logo Php',
  },
  {
    src: '/logos/PHP.svg',
    alt: 'logo Php',
  },
  {
    src: '/logos/PHP.svg',
    alt: 'logo Php',
  },
  {
    src: '/logos/PHP.svg',
    alt: 'logo Php',
  },
])

// images.value = images.value.map((img) => ({
//   ...img,
//   src: $img(img.src, { width: 100, quality: 70 }),
// }))
</script>

<style lang="scss"></style>
