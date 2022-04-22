<template>
  <header class="w-full bg-black">
    <div class="max-w-5xl mx-auto py-6 flex justify-between items-center">
      <img class="h-12" src="../assets/logo_branco.png" alt="Logo image">
      <nav class="flex items-center gap-5 text-slate-50 text-sm font-bold">
        <router-link to="">Fale conosco</router-link>
        <ChangeLang />
      </nav>
    </div>
  </header>  
</template>

<script setup>
import ChangeLang from './buttons/ChangeLang.vue';
</script>