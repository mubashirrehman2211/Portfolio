<template>
  <form>
  <div id="contact" class="all-center m-auto">

    <div class="border-2 w-2/4 rounded-md flex flex-col border-gray-800 box-1">
      <div>
        <h2 class="text-2xl font-bold text-gray-400 text-font-main">Contact Me</h2>
        <hr class="w-28 m-auto border-gray-600"/>
        <hr class="w-28 m-auto border-gray-600 mt-0.5"/>
      </div>

      <!--      NAME INPUT-->

      <div class="my-3 flex-col all-center">
        <div class="w-11/12 my-5 h-12">
          <input @input="inputName" class="w-full py-1 px-2 bg-[#141426] rounded border-gray-800 border-2 text-md "
                 placeholder="Name" type="text"/>
          <p v-if="this.nameError" class="text-red-500 font-mono">
            {{ this.nameError }}
          </p>
        </div>



        <!--    EMAIL INPUT-->
          <div class=" w-11/12 my-5 h-12">
            <input @input="inputEmail" class="w-full py-1 px-2 bg-[#141426] rounded border-gray-800 border-2 text-md"
                   placeholder="Email" type="email"/>
            <p v-if="this.emailError" class="text-red-500 font-mono">
              {{ this.emailError }}
            </p>
          </div>
      </div>

      <!--      SUBJECT INPUT-->

      <div class="my-2">
        <input @input="inputSubject" class="w-11/12 py-2 px-2 bg-[#141426] rounded border-gray-800 border-2 text-md" placeholder="Subject" type="text"/>
        <p v-if="this.subjectError" class="text-red-500 font-mono">
          {{ this.subjectError }}
        </p>
      </div>

      <!--      MESSAGE TEXTAREA-->

      <div class="my-5">
        <textarea @input="inputMessage" class="w-10/12 border-2 bg-[#141426] border-gray-800 rounded-md" cols="30" name="message"
                  placeholder="Message" rows="4"></textarea>
        <p v-if="this.messageError" class="text-red-500 font-mono">
          {{ this.messageError }}
        </p>
      </div>

      <!--      SENT BUTTON-->

      <div class="my-3">
        <button
            class="border-2 rounded-md bg-white text-gray-900 font-bold px-2 py-1 hover:bg-gray-800 hover:text-gray-300 hover:border-gray-800"
            type="submit" @click="sendMessage">Send Mail
        </button>
      </div>
      <div v-if="sentmessage" class="mb-2 duration-300">
        <p class="font-semibold text-gray-400">You can also send message on Whatsapp number +92300-7018264</p>
        <a class="font-semibold text-gray-200 underline hover:text-gray-400" href="https://web.whatsapp.com/" target="_blank
">Go to Whatsapp</a>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: "TheServices",
  props: {},
  data() {
    return {
      name: null,
      email: null,
      message: null,
      subject:null,
      sentmessage: false,
      nameError:null,
      emailError:null,
      subjectError:null,
      messageError:null,
    }
  },
  methods: {
    inputName(e){
      this.name = e.target.value
      if(!this.name){
        this.nameError = 'name field is required.'
      }else{
        this.nameError = false
      }
    },
    inputEmail(e){
       this.email = e.target.value
      if(!this.email){
        this.emailError = 'email field is required.'
      }else{
        this.emailError = false
      }
    },
    inputSubject(e){
       this.subject = e.target.value
      if(!this.subject){
        this.subjectError = 'subject field is required.'
      }else{
        this.subjectError = false
      }
    },
    inputMessage(e){
       this.message = e.target.value
      if(!this.message){
        this.messageError = 'message field is required.'
      }else{
        this.messageError = false
      }
    },
    sendMessage(e) {
      // alert('Your message has been sent..')
      this.sentmessage = true
      e.preventDefault()
      if(this.name && this.email && this.subject && this.message){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your message has been sent successfully",
          showConfirmButton: true,
          // timer: 2000
        });
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
            // Name Validation

      if(!this.name){
      this.nameError = 'name field is required.'
      }else{
        this.nameError = false
      }
             // Email Validation

      if (!this.email) {
        this.emailError = 'email field is required.'
      }else{
         this.emailError = false
      }

      // Subject Validation

      if (!this.subject) {
        this.subjectError = 'subject field is required.'
      }else{
        this.subjectError = false
      }

      // Message Validation

      if (!this.message) {
        this.messageError = 'message field is required.'
      }else{
        this.messageError = false
      }
    }
  }
}
</script>

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
