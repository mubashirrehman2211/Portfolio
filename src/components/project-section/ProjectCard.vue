<script setup>
import { defineProps } from "vue";
defineProps([
  "title",
  "lang1",
  "lang2",
  "lang3",
  "lang4",
  "lang5",
  "imageSrc",
  "websiteLink",
]);
</script>

<template>
  <div
    class="detail opacity-0 all-center flex-col bg-[rgba(0,0,0,0.7)] w-full h-full text-white absolute bottom-[-500px]"
  >
    <div class="text-start p-7">
      <!-- Card Title -->
      <div class="text-2xl text-gray-50 mt-2">{{ title }}</div>
      <!-- HTML -->
      <div class="flex flex-col justify-start my-3">
        <div class="flex justify-start my-0.5" v-if="lang1">
          <i class="fa-brands fa-html5 text-2xl text-green-500"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ lang1 }}</h2>
        </div>
        <!-- CSS -->
        <div class="flex justify-start my-0.5" v-if="lang2">
          <i class="fa-brands fa-css3-alt text-2xl text-blue-500"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ lang2 }}</h2>
        </div>
        <!-- JS -->
        <div class="flex justify-start my-0.5" v-if="lang3">
          <i class="fa-brands fa-js text-2xl text-yellow-500"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ lang3 }}</h2>
        </div>
        <!-- Vue Js -->
        <div class="flex justify-start my-0.5" v-if="lang4">
          <i class="fa-brands fa-vuejs text-2xl text-green-600"></i>
          <h2 class="mx-3 text-xl text-gray-500">{{ lang4 }}</h2>
        </div>
      </div>
      <!-- Website Link -->
      <a
        class="border-2 rounded bg-gray-100 text-black font-semibold m-auto mt-5 px-4 py-2 hover:bg-blue-950 hover:text-gray-200 hover:border-blue-950"
        :href="websiteLink"
        target="_blank"
        >Read More</a
      >
    </div>
  </div>
</template>

<style></style>
