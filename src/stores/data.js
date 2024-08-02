import Swal from "sweetalert2";
import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
      state: () => ({
            email: null,
            message: null,
            subject: null,
            sentmessage: false,
            // Errors
            contactError: false,
      }),
      getters: {},
      actions: {
            sendMessage(e) {
                  this.sentmessage = true;
                  e.preventDefault();
                  if (this.email && this.subject && this.message) {
                        this.contactError = false
                        Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Your mail has been sent successfully",
                              showConfirmButton: true,
                        });
                  } else {
                        // if (!this.subject || !this.email || !this.message) return this.contactError = true
                        Swal.fire({
                              title: "Error!",
                              text: "Something went wrong",
                              icon: "error",
                              confirmButtonText: "Ok",
                        });
                  }

            },
      },
})