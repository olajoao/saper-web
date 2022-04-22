<template>
  <button 
    class="
      bg-slate-50 rounded-md font-medium px-6 py-2.5 border border-saper-red/20 text-saper-red flex items-center gap-6 transition__default
      hover:bg-saper-red hover:text-slate-50 hover:border-slate-50/20
    "
  >
    <span>Falar com nossos consultores</span>
    <ArrowNarrowRightIcon class="w-8 h-8" />
  </button>
</template>

<script setup>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'
</script>