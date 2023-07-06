<script lang="ts">
  import { site } from '$lib/config/site'
  import { fly } from 'svelte/transition'
</script>

<div class="w-5/6 pt-10 pb-10 flex justify-center">
  <div class="flex rounded-3xl overflow-hidden mt-20 w-3/5">
    <div class="w-3/5 p-10 pr-30 bg-white">
      <h2 class="uppercase pb-5 text-pfp-green font-bold">Exploration station</h2>
      <h2 class="card-title text-3xl">Green power from non-recycled waste</h2>
      <p class="pt-10">
        Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including electricity,
        heating, cooling, and biochar, among others
      </p>
      <a
        class="mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
        href="/explore">
        <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
        <span>Explore the possibilites</span>
      </a>
    </div>
    <div class="w-2/5 p-4 bg-light-green">
      <img
        in:fly={{ x: 100, duration: 300, delay: 500 }}
        out:fly={{ x: -100, duration: 300 }}
        class="absolute top-[30%] h-36 left-[72%] z-0"
        src="/assets/cow 1.png"
        alt="" />
      <img
        in:fly={{ x: -100, duration: 300, delay: 500 }}
        out:fly={{ x: 100, duration: 300 }}
        class="absolute top-[35%] h-40 left-[68%] z-10"
        src="/assets/manure 1.png"
        alt="" />
      <img
        in:fly={{ x: -100, y: -100, duration: 300, delay: 500 }}
        out:fly={{ x: 100, duration: 300 }}
        class="absolute top-[35%] h-28 left-[75%] z-30"
        src="/assets/apple 1.png"
        alt="" />
      <img
        in:fly={{ y: -100, duration: 300, delay: 500 }}
        out:fly={{ x: 100, duration: 300 }}
        class="absolute top-60 h-20 left-200 ml-10 z-0"
        src="/assets/leaf2 1.png"
        alt="" />
      <img
        in:fly={{ x: -100, duration: 300, delay: 500 }}
        out:fly={{ x: 100, duration: 300 }}
        class="absolute top-[35%] h-48 left-[65%] z-30"
        src="/assets/pet bottle 1.png"
        alt="" />
      <img
        in:fly={{ x: 50, duration: 300, delay: 500 }}
        out:fly={{ x: -100, duration: 300 }}
        class="absolute top-[35%] h-48 left-[65%] z-20"
        src="/assets/woodchips 1.png"
        alt="" />
      <img
        in:fly={{ x: -70, duration: 300, delay: 500 }}
        out:fly={{ y: 100, duration: 300 }}
        class="absolute top-96 h-30 left-200 ml-80 z-0"
        src="/assets/leaf1 1.png"
        alt="" />
      <img
        in:fly={{ y: -100, duration: 300, delay: 500 }}
        out:fly={{ x: 100, duration: 300 }}
        class="absolute top-50 h-30 left-200 ml-80 z-0"
        src="/assets/fish 1.png"
        alt="" />
    </div>
  </div>
</div>
