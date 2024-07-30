<script setup>

</script>

<template>
  <div class="siderbar w-[250px] h-screen bg-gray-200">
    <div class="sidebar-header m-0">
      <header class="all-center">

        <div class="w-[60px] h-[60px]">
          <img alt="logo" class="w-full rounded-full" src="../assets/logo.jpg">
        </div>

        <div class="min-w-[40px] ml-3">
          <span class="text-gray-800 font-bold">Coding Lab</span>
          <p class="text-gray-800 font-semibold">Web Development</p>
        </div>

      </header>
    </div>

    <div class="sidebar-menu">
      <ul>

        <li class="w-full h-[50px] my-[30px] bg-gray-300 flex items-center justify-around">
          <i class="fa-solid fa-magnifying-glass mx-[10px] text-xl text-gray-950"></i>
          <input class="border-none outline-none text-gray-950 bg-gray-300 w-full h-full rounded-l"
                 placeholder="search.."
                 type="text">
        </li>

        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-house text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Dashboard</a>
        </li>

        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-chart-simple text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Revenue</a>
        </li>

        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-bell text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Notifiactions</a>
        </li>

        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-chart-line text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Analytics</a>
        </li>

        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-heart text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Likes</a>
        </li>

        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-wallet text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Wallets</a>
        </li>
      </ul>
    </div>
    <div class="bottom-sidebar-menu">
      <ul>
        <li class="w-full h-[50px] my-[20px] flex items-center justify-items-start hover:bg-gray-300">
          <i class="fa-solid fa-right-from-bracket text-xl ml-3 text-gray-950 "></i>
          <a class="text-xl text-gray-950 ml-5" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
