<script setup>
import ProjectCard from "./ProjectCard.vue";
</script>
<template>
  <div class="text-center justify-center my-20">
    <h2 id="project" class="text-3xl">Projects I've Done</h2>
    <h2 class="text-3xl">Few of Them</h2>
    <div class="card-container">
      <div class="cards all-center flex-wrap gap-3 gap-y-5 mt-2 mb-20">
        <!-- card 1 -->
        <div
          class="card relative overflow-hidden rounded mx-[5px] w-[130px] h-[320px] bg-no-repeat bg-cover bg-center school-pk"
        >
          <ProjectCard
            title="Schoolpk"
            isHtml="HTML"
            isCss="CSS"
            isJs="JS"
            websiteLink="https://schoolpk.com/"
          />
        </div>
        <!-- card 2 -->
        <div
          class="card relative overflow-hidden rounded mx-[5px] w-[130px] h-[320px] bg-no-repeat bg-cover bg-center tshirt-designer"
        >
          <ProjectCard
            title="T-shirt Desinger"
            isHtml="HTML"
            isCss="CSS"
            isJs="JS"
            websiteLink="https://t-shirt-orpin.vercel.app"
          />
        </div>

        <!-- card 3 -->

        <div
          class="card relative overflow-hidden rounded mx-[5px] w-[130px] h-[320px] bg-no-repeat bg-cover bg-center tic-tac"
        >
          <ProjectCard
            title="Tic Tac Toe"
            isHtml="HTML"
            isCss="CSS"
            isJs="JS"
            websiteLink="https://tik-tac-iota.vercel.app"
          />
        </div>

        <!-- card 4 -->

        <div
          class="card relative overflow-hidden rounded mx-[5px] w-[130px] h-[320px] bg-no-repeat bg-cover bg-center snake"
        >
          <ProjectCard
            title="Snake Mania"
            isHtml="HTML"
            isCss="Tailwind CSS"
            isJs="JS"
            isVue="Vue JS"
            websiteLink="https://snake-mania-dun.vercel.app"
          />
        </div>
        <div
          class="card relative overflow-hidden rounded mx-[5px] w-[130px] h-[320px] bg-no-repeat bg-cover bg-center acer-storage"
        >
          <ProjectCard
            title="Acer Storage"
            isCss="Tailwind CSS"
            isJs="JS"
            isVue="Vue JS"
            isNuxt="Nuxt JS"
            websiteLink="https://acer-storage.vercel.app/"
          />
        </div>
        <div
          class="card relative overflow-hidden rounded mx-[5px] w-[130px] h-[320px] bg-no-repeat bg-cover bg-center cooking-book"
        >
          <ProjectCard
            title="Cooking Book"
            isCss="Tailwind CSS"
            isJs="JS"
            isVue="Vue JS"
            isNuxt="Nuxt JS"
            isNode="Node JS"
            websiteLink="https://cooking-book-zeta.vercel.app"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: width 300ms linear;
}

.detail {
  position: absolute;
  bottom: -10px;
  opacity: 0;
  transition: opacity 0.3s, bottom 0.3s;
}

.card:hover {
  width: 400px;
  filter: drop-shadow(0px 1px 5px #ddd);
  margin: 0 30px;
}

.card:hover .detail {
  opacity: 1;
  bottom: 0;
}

.school-pk {
  background-image: url("/public/projects/schoolpk.png");
}

.tshirt-designer {
  background-image: url("/public/projects/t-shirt.jpg");
}

.tic-tac {
  background-image: url("/public/projects/tictac.png");
}

.snake {
  background-image: url("/public/projects/snake5.png");
}

.acer-storage {
  background-image: url("/public/projects/acer-storage.png");
}
.cooking-book {
  background-image: url("/public/projects/cooking-book.png");
}

@media screen and (max-width: 700px) {
  .card {
    min-height: 200px;
  }
}

@media screen and (max-width: 650px) {
  .cards {
    flex-direction: column;
    margin: auto;
    align-items: center;
    margin-top: 30px;
  }
}
</style>
