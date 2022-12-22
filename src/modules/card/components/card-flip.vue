<template>
  <div class="card" :class="{ flip: isFlipped }" @click="isFlipped = !isFlipped">
    <div class="front" style="background-image: url(//source.unsplash.com/300x403)">
      <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
    </div>
    <div class="back">
      <div class="card-body">
        <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
        <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
      </div>

      <span class="p-buttonset">
        <Button label="Hard" class="p-button-danger p-button-outlined" icon="pi pi-times" @click.stop="onClick(1)" />
        <Button label="Good" class="p-button-warning p-button-outlined" @click.stop="onClick(2)" />
        <Button label="Easy" class="p-button-success p-button-outlined" icon="pi pi-check" @click.stop="onClick(3)" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isFlipped = ref(false)
// const $text = ref(null)
//
// defineProps({
//   maxheight: {
//     type: String,
//     default: '150px',
//   },
// })
const onClick = (n: any) => {
  alert(n)
}
</script>

<style lang="scss">
$primary: hsl(222, 80%, 50%);
@mixin mobile($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}

.card {
  color: inherit;
  cursor: pointer;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
  user-select: none;
  @include mobile(800px) {
    width: calc(50% - 2rem);
  }
  @include mobile(500px) {
    width: 100%;
  }

  .card-body {
    @apply p-5;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .front,
  .back {
    display: flex;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
    // overflow: hidden;
  }

  .front {
    @apply p-5;
    background-size: cover;
    // background-blend-mode: overlay;
    font-size: 1.618rem;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    font-family: Poppins, sans-serif;
    &:before {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
      opacity: 0.25;
      z-index: -1;
    }
  }

  .back {
    background: #fff;
    transform: rotateY(-180deg);
    flex-direction: column;
    justify-content: space-between;
    //padding: 0 2em;
  }

  //&.flip:hover {
  &.flip {
    .front {
      transform: rotateY(180deg);
    }

    .back {
      transform: rotateY(0deg);
    }
  }
}
</style>
