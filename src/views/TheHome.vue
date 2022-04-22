<template>
  <main class="relative h-max  overflow-x-hidden">
    <Header />
    <!-- hero -->
    <section class="pt-16 pb-px text-white bg-gradient-to-b from-black via-black to-red-900">
      <div class="container__default">
        <h1 class="text-7xl font-black tracking-tight">
          Soluções inteligentes <br>
          para <span class="text-saper-red">operações de voz</span>
        </h1>
        <div class="flex gap-36 my-16">
          <div class="flex-shrink-0 max-w-md w-full font-medium tracking-wide text-base leading-8">
            <p>
              Nós somos especialistas em soluções para Operações de Voz STFC, PABX Virtuais, com uma plataforma de Softswitch para pequenas e grandes empresas. Nossa missão é entregar à você toda estrutura necessária para evoluir e sair na frente no mercado.
            </p>
            <p  class="my-12">
              Com software de ponta e equipamentos confiáveis, aliados à um time de desenvolvimento qualificado e equipe de suporte bem treinada, nossas soluções trarão mais tecnologia, confiabilidade e redução de custos operacionais para sua empresa.
            </p>
            <Cta />   
          </div>
          <div class="max-w-full">
            <img class="mt-2 rounded-tl-lg max-w-max w-max" src="../assets/dash.png" alt="hero dashboard example">
          </div>
        </div>
      </div>
    </section>

    <!-- checks -->
    <section class="py-16 bg-white relative">
      <img class="absolute -top-14 -right-20 transform rotate-45 opacity-50 max-w-[450px] w-full h-auto" src="../assets/check-bg.png" alt="bg image">
      <img class="absolute -bottom-12 -left-20 transform rotate-45 opacity-50 max-w-[450px] w-full h-auto" src="../assets/check-bg.png" alt="bg image">
      <div class="max-w-7xl mx-auto">
        <div class="w-16 h-16 rounded-full bg-slate-100 mx-auto p-1 flex items-center justify-center">
          <ServerIcon class="w-8 h-8 text-saper-red/70" />
        </div>
        <h1 class="text-slate-800 section__title">
          A solução completa de softswitch e pabx <span class="text-saper-red">para sua empresa.</span>
        </h1>
        <h2 class="text-zinc-500/90 text-base mb-16 font-medium text-center">
          Com a SAPERX você tem o que há de mais moderno e avançado em operações de voz do mercado à sua disposição.
        </h2>

        <div class="max-w-5xl mx-auto flex flex-wrap">
          <CheckCard
            v-for="(content, index) in cardContents"
            :key="index"
            :title="content.title" 
            :description="content.description" 
          />
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-saper-red via-red-800 to-red-900">
      <div class="max-w-7xl mx-auto">
        <div class="w-16 h-16 rounded-full bg-red-500 mx-auto p-1 flex items-center justify-center">
          <UserGroupIcon class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-white section__title">
          Depoimentos de nossos clientes.
        </h1>
        <h2 class="text-zinc-50 text-base mb-16 font-medium text-center">
          Atuamos em diversas áreas do setor de operação de voz, provendo soluções e integrações robustas, além de oferecer <br> <span class="bg-white text-saper-red px-1 rounded-sm">suporte especializado e parceria</span> para projetos personalizados.
        </h2>
        <div class="max-w-5xl mx-auto flex flex-nowrap overflow-auto snap-x snap-mandatory">
          <TestimonialCard
            v-for="(testimonialContent, index) in testimonialContents"
            :key="index"
            :imgSrc="testimonialContent.imgSrc"
            :text="testimonialContent.text"
            :author="testimonialContent.author"
            :company="testimonialContent.company"
          />   
        </div>
      </div>
    </section>
    <section class="py-16 bg-gradient-to-b from-red-100/90 via-red-100/20 to-white">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center">
          <div class="w-2/3 pr-5">
            <h1 class="text-slate-800 my-5 text-4xl font-bold">
              Está pronto para começar uma parceria de sucesso?
            </h1>
            <p class="text-slate-800/70 text-lg">Entre em contato com nosso time comercial e conheça todas nossas soluções.</p>
          </div>
          <div class="flex justify-center">
            <Cta />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Header from '../components/TheHeader.vue';
import Cta from '../components/buttons/Cta.vue';
import CheckCard from '../components/card/CheckCard.vue';
import TestimonialCard from '../components/card/TestimonialCard.vue';
import { ServerIcon, PhoneIcon, UserGroupIcon } from '@heroicons/vue/outline';

const cardContents = [
  {
    title: 'SPX Operation',
    description: 'Possui múltiplas tabelas de roteamento, suporta bilhetagem em tempo real, planos pré-pagos, pós-pagos ou controle, e mesmo no pacote padrão, módulos BDO e DETRAF, obrigatórios para operar STFC.'
  },
  {
    title: 'SPX Provider',
    description: 'Desenvolvido para ser escalável, ou seja, a operação pode iniciar com um servidor, e conforme cresce, são acrescentados novos servidores para possibilitar alta disponibilidade e balanceamento de carga.'
  },
  {
    title: 'PABX Multitenant',
    description: 'Além de todos os recursos de um PABX tradicional, os PABX Virtuais contam com Módulo Callcenter ativo e/ou receptivo, Módulo Discador para agilizar as vendas, e Chat para assegurar o sigilo das mensagens trocadas.'
  },
  {
    title: 'SPX Operation',
    description: 'Possui múltiplas tabelas de roteamento, suporta bilhetagem em tempo real, planos pré-pagos, pós-pagos ou controle, e mesmo no pacote padrão, módulos BDO e DETRAF, obrigatórios para operar STFC.'
  },
  {
    title: 'SPX Provider',
    description: 'Desenvolvido para ser escalável, ou seja, a operação pode iniciar com um servidor, e conforme cresce, são acrescentados novos servidores para possibilitar alta disponibilidade e balanceamento de carga.'
  },
  {
    title: 'PABX Multitenant',
    description: 'Além de todos os recursos de um PABX tradicional, os PABX Virtuais contam com Módulo Callcenter ativo e/ou receptivo, Módulo Discador para agilizar as vendas, e Chat para assegurar o sigilo das mensagens trocadas.'
  }
]

const testimonialContents = [
  {
    imgSrc: '/src/assets/hsjb.png',
    text: 'Há alguns anos o Hospital São João Batista firmou parceria com a SaperX para o serviço de telefonia, onde, além de modernizar seu ambiente tecnológico, conseguiu reduzir os custos com o serviço em praticamente 1/3. Também, podemos contar com equipe qualificada para a solução dos problemas a qualquer tempo. Agradecemos a parceria firmada até o momento, e desejamos sucesso!!',
    author: 'Ivan Baccarin',
    company: 'Hospital São João Batista'
  },
  {
    imgSrc: '/src/assets/hsjb.png',
    text: 'Há alguns anos o Hospital São João Batista firmou parceria com a SaperX para o serviço de telefonia, onde, além de modernizar seu ambiente tecnológico, conseguiu reduzir os custos com o serviço em praticamente 1/3. Também, podemos contar com equipe qualificada para a solução dos problemas a qualquer tempo. Agradecemos a parceria firmada até o momento, e desejamos sucesso!!',
    author: 'Ivan Baccarin',
    company: 'Hospital São João Batista'
  },
  {
    imgSrc: '/src/assets/hsjb.png',
    text: 'Há alguns anos o Hospital São João Batista firmou parceria com a SaperX para o serviço de telefonia, onde, além de modernizar seu ambiente tecnológico, conseguiu reduzir os custos com o serviço em praticamente 1/3. Também, podemos contar com equipe qualificada para a solução dos problemas a qualquer tempo. Agradecemos a parceria firmada até o momento, e desejamos sucesso!!',
    author: 'Ivan Baccarin',
    company: 'Hospital São João Batista'
  },
  {
    imgSrc: '/src/assets/hsjb.png',
    text: 'Há alguns anos o Hospital São João Batista firmou parceria com a SaperX para o serviço de telefonia, onde, além de modernizar seu ambiente tecnológico, conseguiu reduzir os custos com o serviço em praticamente 1/3. Também, podemos contar com equipe qualificada para a solução dos problemas a qualquer tempo. Agradecemos a parceria firmada até o momento, e desejamos sucesso!!',
    author: 'Ivan Baccarin',
    company: 'Hospital São João Batista'
  },
]
</script>