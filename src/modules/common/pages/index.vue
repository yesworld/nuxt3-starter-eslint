<template>
  <div>
    <section class="main">
      <div class="content py-20 md:py-0">
        <div class="row">
          <div class="col-span-12 flex flex-col justify-center md:col-span-6">
            <h1>{{ title }}</h1>
            <hr />
            <p class="text-2xl">
              Our free online flashcard maker helps you easily create custom flashcards for your studies in minutes.
            </p>
          </div>

          <div class="col-span-12 flex justify-center md:col-span-6">
            <CardFlip />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-smoke dark:bg-smoke/10" style="">
      <div class="content">
        <h2>Learn with KinikCards</h2>
        <ul>
          <li>Discover 100500 cards from our library</li>
          <li>Explore 222 categories (from algebra to vexillology)</li>
          <li>Import, export, customize your cards</li>
          <li>Learn everywhere on any device</li>
          <li>Create your own cards and stacks</li>
          <li>Review your progress and statistics</li>
          <li>Be your own teacher, challenge yourself</li>
          <li>Based on Leitner System, empowered with AI</li>
        </ul>
      </div>
    </section>

    <section style="min-height: 10px">
      <div class="content">
        <p>
          Вы можете спокойно импортировать и экспортировать свои колоды карт. Если хотите можете делиться ими со своими
          друзьями.
        </p>
      </div>
    </section>

    <section class="bg-smoke dark:bg-smoke/10" style="min-height: 500px">
      <div class="content">
        <h2>KinikCards spaced repetition method</h2>
        <img src="/temp/img.png" class="w-full" alt="" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
})

const title = 'Create flashcards for free in minutes'
useHead({
  title,
})
</script>

<style lang="scss">
@import '@/assets/variable.scss';

.main {
  height: 100vh;
  background: rgb(205, 236, 248);
  background: radial-gradient(at left, #e7f8ff 0%, #77cfe9 100%);
  position: relative;

  .content {
    @apply md:h-full;
    display: flex;
    align-items: center;

    .row {
      @apply md:gap-10;
    }
  }
  h1 {
    @apply text-5xl md:text-7xl;
  }

  html.dark & {
    background: #7ad0e9;
    background: radial-gradient(at left, #7ad0e9 0%, #41707f 100%);

    h1 {
      text-shadow: 2px 3px 6px #000000a6;
    }
  }
}
</style>
