<script setup>
import { useCounterStore } from "../../stores/data";

const store = useCounterStore();
</script>
<template>
  <form class="border-2 rounded border-gray-500 m-auto xl:w-[50%]">
    <div id="contact" class="md:flex text-center justify-center m-auto p-3">
      <div class="w-full all-center m-auto flex-col box-1">
        <div class="w-full my-2">
          <h2 class="text-2xl font-bold text-gray-400 text-font-main">
            Send Mail
          </h2>
        </div>
        <!--    EMAIL INPUT-->
        <div class="w-full">
          <input
            v-model="store.email"
            class="w-full py-3 px-2 bg-[#141426] rounded border-gray-600 border-2 text-md"
            placeholder="Email"
            type="email"
          />
        </div>

        <!-- SUBJECT INPUT -->

        <div class="w-full my-2">
          <input
            v-model="store.subject"
            class="w-full py-3 px-2 bg-[#141426] rounded border-gray-600 border-2 text-md"
            placeholder="Subject"
            type="text"
          />
        </div>

        <!-- MESSAGE TEXTAREA -->

        <div class="w-full my-2">
          <textarea
            v-model="store.message"
            class="w-full border-2 p-3 bg-[#141426] border-gray-600 rounded"
            cols="115"
            name="message"
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
        <!-- SENT BUTTON -->

        <div class="my-2">
          <button
            class="border-2 rounded bg-gray-100 text-gray-950 font-semibold px-10 py-1 hover:bg-gray-800 duration-500 hover:text-gray-300 hover:border-gray-800"
            type="submit"
            @click="store.sendMessage"
          >
            Send Mail
          </button>
        </div>
      </div>
      <div
        class="whatsapp flex flex-col text-center justify-center gap-2 contact-box py-3"
      >
        <div class="all-center flex-col duration-300 w-full">
          <i class="fa-brands fa-whatsapp text-gray-500 text-xl"></i>
          <p class="font-semibold text-gray-500 text-md">+92300-7018264</p>
        </div>
        <div
          class="opacity-0 md:opacity-100 border-[1px] border-gray-500 w-full md:h-full m-auto all-center md:w-[2px]"
        ></div>
        <div class="text-gray-500 font-semibold opacity-0 md:opacity-100">
          Connect
        </div>
        <div
          class="border-[1px] border-gray-500 w-full md:h-full m-auto all-center md:w-[2px] opacity-0 md:opacity-100"
        ></div>
        <div class="all-center flex-col duration-300 w-full">
          <i class="fa-regular fa-envelope text-gray-500 text-xl"></i>
          <p class="font-semibold text-gray-500 text-md">
            malikextra7@gmail.com
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.text-danger {
  outline-color: red;
}

@media screen and (max-width: 1070px) {
  .box-1 {
    width: 80%;
  }
}

@media screen and (max-width: 500px) {
  .box-1 {
    width: 95%;
  }
}
</style>
