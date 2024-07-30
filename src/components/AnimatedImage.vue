<template>
  <div class="my-10">
    <div class="image-circle">
      <div class="circle-content all-center flex-col">
        <img alt="" src="../assets/mine.jpg"/>
        <a
            href="https://www.linkedin.com/in/mubashir-rehman-62707b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="border-2 rounded bg-gray-200 text-black font-bold px-3 py-1 my-3 hover:bg-blue-950 hover:text-gray-200 hover:border-blue-950"
        >HIRE ME</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-circle {
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #555;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
}

.image-circle::before {
  content: "";
  position: absolute;
  inset: -10px 110px;
  background: linear-gradient(315deg, #00ccff, #d400d4);
  transition: 0.5s;
  animation: animate 4s linear infinite;
}

.image-circle:hover::before {
  inset: -10px 0;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.image-circle::after {
  content: "";
  position: absolute;
  inset: 6px;
  background: #141426;
  border-radius: 50%;
  z-index: 1;
}

.circle-content {
  position: absolute;
  inset: 15px;
  border: 2px solid #070a1c;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
}

.circle-content img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  pointer-events: none;
  z-index: 3;
}

.image-circle:hover .circle-content img {
  opacity: 0;
  transition: 0.5s;
}
</style>
