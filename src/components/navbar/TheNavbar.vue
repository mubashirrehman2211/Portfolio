<template>
  <div class="all-center">
    <nav>
      <ul class="flex mt-5">
        <li class="mx-3 overlay text-font-main font-bold text-md">
          <a href="#">HOME</a>
        </li>

        <li class="mx-3 overlay text-font-main font-bold text-md">
          <a href="#">ABOUT</a>
        </li>

        <li
          class="mx-3 overlay text-font-main font-bold text-md"
          @click="scrollProject"
        >
          <a href="#">PROJECT</a>
        </li>

        <li
          class="mx-3 overlay text-font-main font-bold text-md"
          @click="scrollContact"
        >
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {
    scrollProject() {
      document.documentElement.style.scrollBehavior = "smooth";
      document.getElementById("project").scrollIntoView();
    },

    scrollContact() {
      document.documentElement.style.scrollBehavior = "smooth";
      document.getElementById("contact").scrollIntoView();
    },
  },
};
</script>
