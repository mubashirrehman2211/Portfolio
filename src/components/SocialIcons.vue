<template>
  <div class="my-10 justify-center text-center">
    <ul class="all-center">
      <!--      FAEBOOK    -->
      <li class="mx-1.5">
        <a class="all-center before hover:before:top-0"
           href="https://www.facebook.com/profile.php?id=61554239834770&mibextid=2JQ9oc"
           target="_blank">
          <i class="fa-brands fa-facebook relative text-black text-xl rotation duration-500 z-[3]"></i>
        </a>
      </li>

      <!--      LINKEDIN   -->

      <li class="mx-1.5">
        <a class="all-center before hover:before:top-0"
           href="https://www.linkedin.com/in/mubashir-rehman-62707b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
           target="_blank">
          <i class="fa-brands fa-linkedin relative text-black text-xl rotation duration-500 z-[3]"
          ></i>
        </a>
      </li>

      <!--      TWITTER-X   -->

      <li class="mx-1.5">
        <a class="all-center before hover:before:top-0" href="https://x.com/618Mubashir?s=09" target="_blank">
          <i class="fa-brands fa-x-twitter relative text-black text-xl rotation duration-500 z-[3]"
          ></i>
        </a>
      </li>

      <!--      GITHUB   -->

      <li class="mx-1.5">
        <a class="all-center before hover:before:top-0" href="https://github.com/mubashirehman1122" target="_blank">
          <i
              class="fa-brands fa-github relative text-black text-xl rotation duration-500 z-[3]"
          ></i>
        </a>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.before {
  width: 40px;
  height: 40px;
  background-color: #969696;
  display: flex;
  text-align: center;
  justify-content: center;
  border: 2px solid #969696;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.before:hover i {
  color: #fff;
  transform: rotateY(360deg);
}

.before:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1662b9;
  transition: .5s;
  z-index: 2;
}

li:nth-child(1) a:before {
  background: #3b5999;
}

li:nth-child(2) a:before {
  background: #0077b5;
}

li:nth-child(3) a:before {
  background: #0f161a;
}

ul li:nth-child(4) a:before {
  background: #6e5494;
}

</style>
