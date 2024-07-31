import Swal from "sweetalert2";
import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
      state: () => ({
            email: null,
            message: null,
            subject: null,
            sentmessage: false,
            // Errors
            emailError: null,
            subjectError: null,
            messageError: null,

      }),
      getters: {},
      actions: {
            sendMessage(e) {
                  this.sentmessage = true;
                  e.preventDefault();
                  if (this.email && this.subject && this.message) {
                        Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Your mail has been sent successfully",
                              showConfirmButton: true,
                        });
                        this.emailError = false
                        this.subjectError = false
                        this.messageError = false
                  } else {
                        Swal.fire({
                              title: "Error!",
                              text: "Something went wrong",
                              icon: "error",
                              confirmButtonText: "Ok",
                        });
                        if (!this.email) return this.emailError = true;
                        if (!this.subject) return this.subjectError = true;
                        if (!this.message) return this.messageError = true;
                  }

            },
      },
})