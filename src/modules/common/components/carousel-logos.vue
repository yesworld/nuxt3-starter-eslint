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
// const $img = useImage()
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 4,
  },
  {
    breakpoint: '640px',
    numVisible: 2,
  },
  {
    breakpoint: '320px',
    numVisible: 1,
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
