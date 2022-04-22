<template>
  <article class="snap-center min-w-full w-full p-5 bg-white/80 text-slate-800 rounded-lg">
    <img class="w-72" :src="imgSrc" alt="testimonial image">
    <p class="leading-7 my-5 font-medium">
      {{ text }}
    </p>
    <div>
      <p>{{ author}}</p>
      <p class="text-slate-800/60">{{ company }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: File,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
});

</script>