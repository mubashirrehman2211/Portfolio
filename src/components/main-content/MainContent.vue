<script setup>
import SocialIcons from "@/components/SocialIcons.vue";
import ProgrammingLanguages from "@/components/ProgrammingLanguages.vue";
import AnimatedImage from "@/components/AnimatedImage.vue";
import AboutText from "@/components/AboutText.vue";


</script>

<template>
  <div class="md:flex md:flex-row-reverse md:justify-around md:w-full">
    <AnimatedImage/>
    <AboutText/>
  </div>

  <SocialIcons/>

  <ProgrammingLanguages/>
</template>


<style scoped>

</style>
