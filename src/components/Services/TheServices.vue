<script setup>
import { useCounterStore } from "../../stores/data";

const store = useCounterStore();
</script>
<template>
  <form>
    <div id="contact" class="all-center m-auto">
      <div
        class="border-2 w-2/4 px-10 py-5 rounded-md flex flex-col border-gray-800 box-1"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-400 text-font-main">
            Contact Me
          </h2>
        </div>

        <div class="my-2 flex-col all-center">
          <!--    EMAIL INPUT-->
          <div class="w-full">
            <input
              v-model="store.email"
              class="w-full py-3 px-2 bg-[#141426] rounded border-gray-800 border-2 text-md"
              placeholder="Email"
              type="email"
            />

            <p
              v-if="store.emailError"
              class="text-start ml-2 text-red-500 text-sm my-2"
            >
              Email field is required
            </p>
          </div>
        </div>

        <!-- SUBJECT INPUT -->

        <div class="my-2">
          <input
            v-model="store.subject"
            class="w-full py-3 px-2 bg-[#141426] rounded border-gray-800 border-2 text-md"
            placeholder="Subject"
            type="text"
          />

          <p
            v-if="store.subjectError"
            class="text-start ml-2 text-red-500 text-sm my-2"
          >
            Subject field is required
          </p>
        </div>

        <!-- MESSAGE TEXTAREA -->

        <div class="w-full my-2">
          <textarea
            v-model="store.message"
            class="w-full border-2 p-3 bg-[#141426] border-gray-800 rounded"
            cols="115"
            name="message"
            placeholder="Message"
            rows="4"
          ></textarea>
          <p
            v-if="store.messageError"
            class="text-start ml-2 text-red-500 text-sm my-2"
          >
            Message field is required
          </p>
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
        <div v-if="store.sentmessage" class="mb-2 duration-300">
          <p class="font-semibold text-gray-400">
            You can also connect with me on Whatsapp +92300-7018264
          </p>
          <a
            class="font-semibold text-gray-200 underline hover:text-gray-400"
            href="https://web.whatsapp.com/"
            target="_blank
"
            >Go to Whatsapp</a
          >
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
@media screen and (max-width: 860px) {
  .box-1 {
    width: 75%;
  }
}

@media screen and (max-width: 500px) {
  .box-1 {
    width: 95%;
  }
}
</style>
