<script setup>
import ProjectCard from "./ProjectCard.vue";
</script>
<template>
  <div class="text-center justify-center">
    <h2 id="project" class="text-3xl">Projects I've Done</h2>
    <h2 class="text-3xl">Few of Them</h2>
    <div class="card-container">
      <div class="cards all-center mt-2 mb-20">
        <!-- card 1 -->
        <div
          class="card relative overflow-hidden rounded mx-[5px] my-5 w-[100px] min-h-[300px] bg-no-repeat bg-cover bg-center school-pk"
        >
          <ProjectCard
            title="Schoolpk"
            lang1="HTML"
            lang2="CSS"
            lang3="JS"
            websiteLink="https://schoolpk.com/"
          />
        </div>
        <!-- card 2 -->
        <div
          class="card relative overflow-hidden rounded mx-[5px] my-5 w-[100px] min-h-[300px] bg-no-repeat bg-cover bg-center tshirt-designer"
        >
          <ProjectCard
            title="T-shirt Desinger"
            lang1="HTML"
            lang2="CSS"
            lang3="JS"
            websiteLink="https://t-shirt2.netlify.app"
          />
        </div>

        <!-- card 3 -->

        <div
          class="card relative overflow-hidden rounded mx-[5px] my-5 w-[100px] min-h-[300px] bg-no-repeat bg-cover bg-center tic-tac"
        >
          <ProjectCard
            title="Tic Tac Toe"
            lang1="HTML"
            lang2="CSS"
            lang3="JS"
            websiteLink="https://tictac4.netlify.app"
          />
        </div>

        <!-- card 4 -->

        <div
          class="card relative overflow-hidden rounded mx-[5px] my-5 w-[100px] min-h-[300px] bg-no-repeat bg-cover bg-center snake"
        >
          <ProjectCard
            title="Snake Mania"
            lang1="HTML"
            lang2="CSS"
            lang3="JS"
            lang4="Vue JS"
            websiteLink="https://snake5.netlify.app"
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
  background-image: url("../../assets/schoolpk.png");
}

.tshirt-designer {
  background-image: url("../../assets/t-shirt.jpg");
}

.tic-tac {
  background-image: url("../../assets/tictac.png");
}

.snake {
  background-image: url("../../assets/snake5.png");
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
