<script setup>
import { defineProps } from "vue";
defineProps([
  "title",
  "isHtml",
  "isCss",
  "isTailwind",
  "isJs",
  "isVue",
  "isNuxt",
  "isNode",
  "imageSrc",
  "websiteLink",
]);
</script>

<template>
  <div
    class="detail opacity-0 all-center flex-col bg-[rgba(0,0,0,0.7)] w-full h-full text-white absolute bottom-[-500px]"
  >
    <div class="text-start p-2">
      <!-- Card Title -->
      <div class="text-2xl text-gray-50 mt-2">{{ title }}</div>
      <!-- HTML -->
      <div class="flex flex-col justify-start my-3">
        <div class="flex justify-start my-0.5" v-if="isHtml">
          <i class="fa-brands fa-html5 text-2xl text-green-500"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isHtml }}</h2>
        </div>
        <!-- CSS -->
        <div class="flex justify-start my-0.5" v-if="isCss">
          <i class="fa-brands fa-css3-alt text-2xl text-blue-500"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isCss }}</h2>
        </div>
        <div class="flex justify-start my-0.5" v-if="isTailwind">
          <i class="fa-brands fa-vuejs text-2xl text-green-600"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isTailwind }}</h2>
        </div>
        <!-- JS -->
        <div class="flex justify-start my-0.5" v-if="isJs">
          <i class="fa-brands fa-js text-2xl text-yellow-500"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isJs }}</h2>
        </div>
        <!-- Vue Js -->
        <div class="flex justify-start my-0.5" v-if="isVue">
          <i class="fa-brands fa-vuejs text-2xl text-green-600"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isVue }}</h2>
        </div>
        <div class="flex justify-start my-0.5" v-if="isNuxt">
          <i class="fa-brands fa-vuejs text-2xl text-green-600"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isNuxt }}</h2>
        </div>

        <div class="flex justify-start my-0.5" v-if="isNode">
          <i class="fa-brands fa-node-js text-2xl text-[#44883e]"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ isNode }}</h2>
        </div>
      </div>
      <!-- Website Link -->
      <a
        class="border-2 rounded bg-gray-100 text-black font-semibold m-auto mt-7 px-4 py-1.5 hover:bg-blue-950 hover:text-gray-200 hover:border-blue-950"
        :href="websiteLink"
        target="_blank"
        >Read More</a
      >
    </div>
  </div>
</template>

<style></style>
