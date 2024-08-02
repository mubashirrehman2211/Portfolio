<script setup></script>

<template>
  <div id="about" class="all-center">
    <div class="justify-between text-center flex flex-col text-font-main">
      <h1 class="text-2xl text-start">Hi Everyone,</h1>
      <h1 class="text-3xl mt-3 edit-2">
        <strong class="text-3xl text-gray-300"
          >My Name is Mubashir Rehman.</strong
        >
      </h1>

      <p class="text-2xl mt-3 text-right edit-3 font-semibold">
        I am a Software Developer.
      </p>
      <a
        href="https://www.linkedin.com/in/mubashir-rehman-62707b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        class="border-2 rounded bg-gray-200 text-gray-900 font-semibold px-3 py-1 my-3 hover:bg-[#3bc195] hover:text-gray-100 hover:border-[#3bc195] duration-500"
        >HIRE ME</a
      >
    </div>
  </div>
</template>

<style scoped>
.edit-1 {
  width: 18%;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s, cursor 0.4s step-end infinite alternate;
}

/* cursor blinking */
@keyframes cursor {
  50% {
    border-color: #fff;
  }
}

/* typing effect */
@keyframes typing {
  from {
    width: 0;
  }
}

.edit-2 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s, cursor 0.4s step-end infinite alternate;
}

/* cursor blinking */
@keyframes cursor {
  50% {
    border-color: #fff;
  }
}

/* typing effect */
@keyframes typing {
  from {
    width: 0;
  }
}

.edit-3 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 6s, cursor 0.5s step-end infinite alternate;
}

/* cursor blinking */
@keyframes cursor {
  50% {
    border-color: #fff;
  }
}

/* typing effect */
@keyframes typing {
  from {
    width: 0;
  }
}

@media screen and (max-width: 500px) {
  .edit-1,
  .edit-3 {
    font-size: 1.3rem;
  }

  .edit-2 strong {
    font-size: 1.4rem;
  }
}
</style>
