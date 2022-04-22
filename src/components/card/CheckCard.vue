<template>
  <article class="w-1/2 flex flex-nowrap gap-6 p-5 justify-center">
    <div class="w-1/12">
      <div class="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white">
        <CheckIcon class="w-6 h-6" />
      </div>
    </div>
    <div>
      <h3 class="mb-1 font-semibold text-lg text-slate-900">{{ title }}</h3>
      <p class="text-zinc-600 2xl:text-zinc-500/90 leading-7">{{ description }}</p>
    </div>
  </article>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/outline';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>