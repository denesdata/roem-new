<script lang="ts">
  import { site } from '$lib/config/site'
  import Landing from '$lib/components/landing.svelte'
  import { scale } from 'svelte/transition'
</script>

<div
  style="background: green;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 99;
    transform: scale(0);">
  hello
</div>
<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <!-- <Landing /> -->
  <div class="h-full">
    <!-- ===================after landing page =================== -->
    <section>
      <div class="flex rounded-3xl overflow-hidden mt-20">
        <div class="w-3/5 p-10 pr-30 bg-white">
          <h2 class="uppercase pb-5 text-pfp-green font-bold">Exploration station</h2>
          <h2 class="card-title text-3xl">Green power from non-recyclable waste</h2>
          <p class="pt-10">
            Power-from-waste technology can convert non-recyclable waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others
          </p>
          <a
            class="mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Explore the possibilites</span>
          </a>
        </div>
        <div class="w-2/5 p-4 bg-light-green" id="topRightCluster">
          <style>
            #topRightCluster {
              background-image: url('/assets/Group 6.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            }
            #topRightCluster img {
              visibility: hidden;
            }
          </style>
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
    </section>
    <section class="bg-white mt-8 container mx-auto p-10 rounded-2xl" style="font-family: 'Poppins', sans-serif;">
      <div class=" grid gap-4 md:grid-cols-5 grid-cols-2 w-full">
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/pet bottle 1.png" alt="" /></div>
          <div class="w-2/4">Plastic waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (2).png" alt="" /></div>
          <div class="w-2/4">Food waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (3).png" alt="" /></div>
          <div class="w-2/4">Animal waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7.png" alt="" /></div>
          <div class="w-2/4">Agricultural waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-lg leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-32"><img src="/assets/Group 7 (1).png" alt="" /></div>
          <div class="w-2/4">Wood waste</div>
        </div>
      </div>
      <div class="flex w-full pt-5">
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-base tracking-wider uppercase">
          Power from
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-base pl-1 tracking-wider uppercase">
          waste technology
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
      </div>
      <div class=" grid gap-4 grid-cols-6 w-full">
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Liquid fertiliser
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-lg rounded-lg font-bold text-xl">
          Solid digestate
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] mb-0 text-center rounded-lg font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Biogas
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] mb-0 text-center rounded-lg font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Syngas
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Bio-oil
        </div>
        <div
          class="arrow arrow-bottom relative bg-[#DDF3EA] rounded-lg leading-10 text-[#2E3855] text-center rounded-lg font-bold text-xl">
          Biochar
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div
          class="arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-lg rounded-lg font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[gradient-to-r from-[#FF5252] to-[#59AFFF]] after:border-r-transparent after:border-l-transparent">
          Heat / Cool
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div
          class="arrow arrow-bottom relative w-1/3 bg-[#D0E6F2] rounded-lg leading-10 text-[#2E3855] mb-0 rounded-lg font-bold text-xl text-center">
          Electricity
        </div>
      </div>
    </section>

    <!-- <img class="transition-shadow z-10 w-full h-full" src="/assets/field.png" alt="" /> -->

    <section class="">
      <div class="container mx-auto pt-10 rounded-2xl">
        <div class="flex md:flex-row flex-col items-center rounded-2xl bg-white w-full">
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-2xl">
            <img class="w-full" src="/assets/Frame 19 (1).png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-5 pr-14">
            <a
              href="/"
              style="font-family: 'Poppins', sans-serif;"
              class="text-start text-sm font-semibold tracking-wider text-[#3F9378] leading-6 uppercase">
              Exploration station
            </a>
            <h1 style="font-family: 'Poppins', sans-serif;" class="font-bold text-4xl leading-10 text-[#2E3855] mt-5">
              Interact with our exploration <br />
              station to learn more
            </h1>
            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-base font-normal tracking-wider leading-6 mt-5">
              Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================after landing page =================== -->
    <div
      class="items-center rounded-lg bg-none w-5/6"
      id="cow-panel"
      style="z-index:30;position:fixed;top:200px;left:0px;width:30%;">
      <div class="absolute top-0 bg-white w-full flex flex-col duration-300 transform rounded-lg" id="cow">
        <div class="left-[98%] rounded-lg">
          <script>
            function toggleElement(k) {
              var element = document.querySelector('#' + k)
              // element.classList.toggle('hidden')
              element.classList.toggle('-translate-x-full')
              element.classList.toggle('opacity-0')
            }
          </script>
          <button
            type="button"
            onclick="toggleElementOff('cow')"
            style=" font-family: 'Public Sans', sans-serif;"
            class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
            <img class="mr-3" src="/assets/x-circle.png" alt="" />
          </button>
        </div>
        <div class="p-5">
          <div class="flex justify-between items-center w-full">
            <div class="w-2/5"><img class="w-full" src="/assets/cow 1.png" alt="" /></div>
            <div class="w-1/2">
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-3xl leading-10 text-[#2E3855]">
                Cow manure
              </h1>
              <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                <span class="font-bold text-xl">GCV:</span>
                17.57 MJ/kg
                <img class="ml-5" src="/assets/Frame 15.png" alt="" />
              </p>
              <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                <span class="font-bold text-xl">Energy content:</span>
                High
              </p>
            </div>
          </div>

          <div class="flex">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High organic content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nutrient content
            </button>
          </div>
          <div class="flex justify-start">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nitrogen content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
              Low pH levels
            </button>
          </div>
          <div class="flex justify-start items-center mt-5">
            <img class="mr-3" src="/assets/book-open.png" alt="" />
            <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
              Case study
            </h1>
            <img class="ml-5" src="/assets/Frame 15.png" alt="" />
          </div>

          <div style=" font-family: 'Public Sans', sans-serif;" class="mt-5">
            <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
            <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
              <li>Produces 656m³ biogas every day</li>
              <li>Ability to power 187 UK households every day</li>
            </ul>
          </div>
        </div>
        <div class="bg-[#2E3855] rounded-lg">
          <div class="flex flex-col p-5">
            <div class="flex">
              <div><img src="/assets/Ellipse 3.png" alt="" /></div>
              <div class="ml-5">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                  Most appropriate technology
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-base mt-1 tracking-wider">
                  Anaerobic Digestion
                </p>
              </div>
            </div>

            <div class="flex">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Start your project
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 bg-white w-full flex flex-col duration-300 transform rounded-lg" id="food">
        <div class="left-[98%] rounded-lg">
          <script>
            function toggleElement(k) {
              var element = document.querySelector('#' + k)
              // element.classList.toggle('hidden')
              element.classList.toggle('-translate-x-full')
              element.classList.toggle('opacity-0')
            }
          </script>
          <button
            type="button"
            onclick="toggleElementOff('food')"
            style=" font-family: 'Public Sans', sans-serif;"
            class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
            <img class="mr-3" src="/assets/x-circle.png" alt="" />
          </button>
        </div>
        <div class="p-5 relative l-0">
          <div class="flex justify-between items-center w-full">
            <div class="w-2/5"><img class="w-full" src="/assets/Group 7 (2).png" alt="" /></div>
            <div class="w-1/2">
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-3xl leading-10 text-[#2E3855]">
                Food waste
              </h1>
              <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                <span class="font-bold text-xl">GCV:</span>
                12.37 MJ/kg
                <img class="ml-5" src="/assets/Frame 15.png" alt="" />
              </p>
              <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                <span class="font-bold text-xl">Energy content:</span>
                Medium
              </p>
            </div>
          </div>

          <div class="flex">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High organic content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nutrient content
            </button>
          </div>
          <div class="flex justify-start">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nitrogen content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
              Low pH levels
            </button>
          </div>
          <div class="flex justify-start items-center mt-5">
            <img class="mr-3" src="/assets/book-open.png" alt="" />
            <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
              Case study
            </h1>
            <img class="ml-5" src="/assets/Frame 15.png" alt="" />
          </div>

          <div style=" font-family: 'Public Sans', sans-serif;" class="mt-5">
            <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
            <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
              <li>Produces 656m³ biogas every day</li>
              <li>Ability to power 187 UK households every day</li>
            </ul>
          </div>
        </div>
        <div class="bg-[#2E3855] rounded-lg">
          <div class="flex flex-col p-5">
            <div class="flex">
              <div><img src="/assets/Ellipse 3.png" alt="" /></div>
              <div class="ml-5">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                  Most appropriate technology
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-base mt-1 tracking-wider">
                  Anaerobic Digestion
                </p>
              </div>
            </div>

            <div class="flex">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Start your project
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 bg-white w-full flex flex-col duration-300 transform rounded-lg" id="bottle">
        <div class="left-[98%] rounded-lg">
          <script>
            function toggleElement(k) {
              var element = document.querySelector('#' + k)
              // element.classList.toggle('hidden')
              element.classList.toggle('-translate-x-full')
              element.classList.toggle('opacity-0')
            }
          </script>
          <button
            type="button"
            onclick="toggleElementOff('bottle')"
            style=" font-family: 'Public Sans', sans-serif;"
            class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
            <img class="mr-3" src="/assets/x-circle.png" alt="" />
          </button>
        </div>
        <div class="p-5 relative l-0">
          <div class="flex justify-between items-center w-full">
            <div class="w-2/5"><img class="h-60 pl-32 pb-10 pt-10" src="/assets/pet bottle 1.png" alt="" /></div>
            <div class="w-1/2">
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-3xl leading-10 text-[#2E3855]">
                Water
              </h1>
              <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                <span class="font-bold text-xl">GCV:</span>
                12.37 MJ/kg
                <img class="ml-5" src="/assets/Frame 15.png" alt="" />
              </p>
              <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                <span class="font-bold text-xl">Energy content:</span>
                Medium
              </p>
            </div>
          </div>

          <div class="flex">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High organic content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nutrient content
            </button>
          </div>
          <div class="flex justify-start">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nitrogen content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
              Low pH levels
            </button>
          </div>
          <div class="flex justify-start items-center mt-5">
            <img class="mr-3" src="/assets/book-open.png" alt="" />
            <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
              Case study
            </h1>
            <img class="ml-5" src="/assets/Frame 15.png" alt="" />
          </div>

          <div style=" font-family: 'Public Sans', sans-serif;" class="mt-5">
            <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
            <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
              <li>Produces 656m³ biogas every day</li>
              <li>Ability to power 187 UK households every day</li>
            </ul>
          </div>
        </div>
        <div class="bg-[#2E3855] rounded-lg">
          <div class="flex flex-col p-5">
            <div class="flex">
              <div><img src="/assets/Ellipse 3.png" alt="" /></div>
              <div class="ml-5">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                  Most appropriate technology
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-base mt-1 tracking-wider">
                  Anaerobic Digestion
                </p>
              </div>
            </div>

            <div class="flex">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Start your project
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 bg-white w-full flex flex-col duration-300 transform rounded-lg" id="technology">
        <div class="left-[98%] rounded-lg">
          <button
            type="button"
            onclick="toggleElementOff('technology')"
            style=" font-family: 'Public Sans', sans-serif;"
            class="flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
            <img class="mr-3" src="/assets/x-circle.png" alt="" />
          </button>
        </div>
        <div class="p-5 relative l-0">
          <div class="flex justify-between items-center w-full">
            <div class="w-2/5"><img class="w-100 pl-32 pb-10 pt-10" src="/assets/Group14.png" alt="" /></div>
            <div class="w-1/2">
              <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-3xl leading-10 text-[#2E3855]">
                Technology
              </h1>
              <p style=" font-family: 'Public Sans', sans-serif;" class="flex items-center text-[#2E3855] text-lg">
                <span class="font-bold text-xl">GCV:</span>
                12.37 MJ/kg
                <img class="ml-5" src="/assets/Frame 15.png" alt="" />
              </p>
              <p style=" font-family: 'Public Sans', sans-serif;" class=" text-[#2E3855] text-lg">
                <span class="font-bold text-xl">Energy content:</span>
                Medium
              </p>
            </div>
          </div>

          <div class="flex">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High organic content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nutrient content
            </button>
          </div>
          <div class="flex justify-start">
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart.png" alt="" />
              High nitrogen content
            </button>
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/bar-chart (1).png" alt="" />
              Low pH levels
            </button>
          </div>
          <div class="flex justify-start items-center mt-5">
            <img class="mr-3" src="/assets/book-open.png" alt="" />
            <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-xl leading-10 text-[#2E3855]">
              Case study
            </h1>
            <img class="ml-5" src="/assets/Frame 15.png" alt="" />
          </div>

          <div style=" font-family: 'Public Sans', sans-serif;" class="mt-5">
            <h2 class="mb-2 text-lg font-light text-[#2E3855]">600 dairy cows or 3500 tonnes of cow manure per year</h2>
            <ul class="max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside">
              <li>Produces 656m³ biogas every day</li>
              <li>Ability to power 187 UK households every day</li>
            </ul>
          </div>
        </div>
        <div class="bg-[#2E3855] rounded-lg">
          <div class="flex flex-col p-5">
            <div class="flex">
              <div><img src="/assets/Ellipse 3.png" alt="" /></div>
              <div class="ml-5">
                <h1 style="font-family: 'Poppins', sans-serif;" class="mt-0 font-bold text-lg leading-10 text-white">
                  Most appropriate technology
                </h1>
                <p style=" font-family: 'Public Sans', sans-serif;" class="text-white text-base mt-1 tracking-wider">
                  Anaerobic Digestion
                </p>
              </div>
            </div>

            <div class="flex">
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Start your project
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="">
      <div
        class="container mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl rounded-t-none"
        style="padding-top:700px;z-index:29;"
        id="field">
        <div>
          <div id="buttons" style="z-index:99">
            <button
              type="button"
              onclick="toggleElement('food')"
              style=" font-family: 'Public Sans', sans-serif; left:420px; top:-360px;"
              class="techbuttons techbutton w-48 h-36 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/Group 7 (2).png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('cow')"
              style=" font-family: 'Public Sans', sans-serif; left:680px; top:-100px;"
              class="techbuttons techbutton w-48 h-36 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/manure 1.png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('bottle')"
              style=" font-family: 'Public Sans', sans-serif; left:-200px; top:0px;"
              class="techbuttons techbutton w-48 h-36 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/pet bottle 1.png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('technology')"
              style=" font-family: 'Public Sans', sans-serif; background:#2e3855;  left:600px; top:-600px;"
              class="techbuttons techbutton-dark w-48 h-36 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <div style="color:#ffffff;font-size:18px;margin:-5px -10px -5px -5px;">Technology</div>
            </button>
            <style>
              @keyframes bounce {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }

              @keyframes scale {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
              }

              .techbutton img {
                /* width: 50px; */
                height: 100px;
                margin: -5px -11px -5px -5px;
              }
              .techbuttons {
                /* transform: scale(0.6); */
                position: relative;
                animation: bounce 1s infinite;
              }

              .techbuttons:hover {
                animation: scale 1s infinite alternate;
              }

              .techbutton::after {
                content: '';
                position: relative;
                bottom: -82px;
                left: -45px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #ffffffdd transparent transparent transparent;
              }
              .techbutton-dark::after {
                content: '';
                position: relative;
                bottom: -82px;
                left: -45px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #2e3855dd transparent transparent transparent;
              }
              .techbuttons {
                box-shadow: 0 0 10px 5px #d8e6f2ff;
              }
            </style>
            <script>
              const animatedElements = document.querySelectorAll('.techbuttons')

              animatedElements.forEach(element => {
                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds
                element.style.animationDelay = `${randomDelay}ms`
                element.style.animationDuration = `${1000 + randomDelay}ms`
              })
            </script>
          </div>
          <style>
            .growbutton {
              box-shadow: 0 0 10px 5px gray;
            }
          </style>
          <button
            type="button"
            onclick="grow()"
            style=" font-family: 'Public Sans', sans-serif; position:relative; top: -20px; left: calc(100% - 100px);"
            class="growbutton w-20 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
            <img class="w-16 mr-3" src="/assets/Frame 19 (2).png" alt="" />
          </button>
        </div>
      </div>
    </section>

    <section class="rounded-2xl">
      <div class="container mx-auto pt-10 rounded-2xl">
        <div class="flex md:flex-row flex-col items-center rounded-2xl bg-white w-full">
          <div class="h-96 bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-2xl">
            <img class="w-96 h-60 mt-16" src="/assets/cow 1.png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-5 pr-14">
            <a
              href="/"
              style="font-family: 'Poppins', sans-serif;"
              class="text-start text-sm font-semibold tracking-wider text-[#3F9378] leading-6 uppercase">
              the PFP calculator
            </a>
            <h1
              style="font-family: 'Poppins', sans-serif;"
              class="font-bold tracking-wider text-4xl leading-10 text-[#2E3855] mt-5">
              Find the right technology <br />
              for your needs
            </h1>
            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-base font-normal tracking-wider leading-6 mt-5">
              We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================after landing page =================== -->
    <section>
      <div class="container mx-auto mt-5 rounded-2xl bg-white p-10" id="growcalc">
        <div class="text-center">
          <h1
            style="font-family: 'Poppins', sans-serif;"
            class="font-bold tracking-wider text-4xl leading-10 text-[#2E3855] mt-5">
            The PFP Calculator
          </h1>
          <p
            style=" font-family: 'Public Sans', sans-serif;"
            class="text-[#2E3855] md:w-1/2 w-full mx-auto text-base font-normal tracking-wider leading-6 mt-5">
            Our user-friendly calculator is designed to evaluate your project's feasibility, relevant technology and energy
            output
          </p>
        </div>
        <div
          style="font-family: 'Poppins', sans-serif;"
          class="flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5">
          <div class="bg-[#E7F5F5] md:w-1/3 w-full flex justify-center rounded-xl">
            <img class="w-full" src="/assets/cow 1 (1).png" alt="" />
          </div>

          <div class=" md:w-2/3 w-full pl-14 pr-14 md:mt-0 mt-5">
            <div class="inline-flex rounded-xl shadow-sm w-full" role="group">
              <button
                type="button"
                class="w-1/2 inline-flex items-center px-4 py-2 text-base font-bold text-white bg-[#2E3855] border border-gray-900 rounded-l-xl hover:bg-gray-900 hover:text-white">
                Waste type
              </button>
              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select id="colorselector" class="w-full bg-transparent text-center border-0">
                  <option class="bg-[#E7F5F5]" value="red">PE Plastic</option>
                  <option class="bg-[#E7F5F5]" value="yellow">Yellow</option>
                  <option class="bg-[#E7F5F5]" value="blue">Blue</option>
                </select>
              </div>
            </div>
            <div class="inline-flex rounded-xl shadow-sm w-full mt-5" role="group">
              <button
                type="button"
                class="w-1/2 inline-flex items-center px-4 py-2 text-base font-bold text-white bg-[#2E3855] border border-gray-900 rounded-l-xl hover:bg-gray-900 hover:text-white">
                Tonnes per year
              </button>

              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select class="w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]">
                  <option class="bg-[#E7F5F5]" value="red">10,000 tonnes</option>
                  <option class="bg-[#E7F5F5]" value="yellow">Yellow</option>
                  <option class="bg-[#E7F5F5]" value="blue">Blue</option>
                </select>
              </div>
            </div>
            <div class="inline-flex rounded-xl shadow-sm w-full mt-5" role="group">
              <button
                type="button"
                class="w-1/2 inline-flex items-center px-4 py-2 text-base font-bold text-white bg-[#2E3855] border border-gray-900 rounded-l-xl hover:bg-gray-900 hover:text-white">
                Client needs
              </button>

              <div
                class="button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0">
                <select id="colorselector" class="w-full bg-transparent text-center">
                  <option class="bg-[#E7F5F5]" value="Electricity">Electricity</option>
                  <option class="bg-[#E7F5F5]" value="yellow">Heating / Cooling</option>
                  <option class="bg-[#E7F5F5]" value="blue">Carbon credits</option>
                  <option class="bg-[#E7F5F5]" value="blue">Fertiliser</option>
                </select>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div class="flex md:justify-end md:w-3/4 justify-center w-full">
          <button
            type="button"
            style=" font-family: 'Public Sans', sans-serif;"
            class=" mt-5 text-white bg-[#EC8B5A] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-base px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            onclick="growElement();">
            <i class="fas fa-calculator mr-5" />
            Calculate
          </button>
        </div>
      </div>
    </section>
    <script>
      function growElement() {
        var element = document.querySelector('.grow')
        // element.classList.toggle('hidden')
        // element.classList.toggle('-translate-x-full')
        element.style.height = 550 + 'px'
        element.style.opacity = 1
        var element = document.querySelector('#growcalc')
        // element.classList.toggle('hidden')
        // element.classList.toggle('-translate-x-full')
        element.style.height = 0 + 'px'
        element.style.opacity = 0
      }
    </script>
    <section class="mt-5">
      <div class="container mx-auto bg-white p-5 rounded-2xl grow" style="height:0px;opacity:0;">
        <div>
          <h1
            style="font-family: 'Poppins', sans-serif;"
            class="font-bold text-center tracking-wider text-4xl leading-10 text-[#2E3855] mt-5">
            The PFP Calculator
          </h1>
        </div>
        <div class="flex md:flex-row flex-col items-center bg-[#E7F5F5] rounded-xl py-5 mt-10">
          <div class="md:w-2/5 w-full flex justify-center mx-auto">
            <img class="md:w-3/5 w-full" src="/assets/Group14.png" alt="" />
          </div>

          <div class="md:w-3/5 w-full flex flex-col text-start px-20">
            <h1
              style="font-family: 'Poppins', sans-serif;"
              class="font-bold tracking-wider text-4xl text-start leading-10 text-[#2E3855] mt-5">
              Your project is feasible
            </h1>

            <p
              style=" font-family: 'Public Sans', sans-serif;"
              class="text-[#2E3855] text-start text-base font-normal tracking-wider leading-6 mt-5">
              Review your results to explore the different possibilities and book a slot with us for personalised guidance on
              next steps
            </p>
            <div>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                Book a call with us
              </button>
              <button
                type="button"
                style=" font-family: 'Public Sans', sans-serif;"
                class="flex justify-center items-center mt-5 text-[#2E3855] bg-white border border-1 border-[#2E3855] font-semibold rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <img class="mr-3" src="/assets/arrow-right-circle (1).png" alt="" />
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class=" container mx-auto bg-white pb-10 rounded-2xl" style="opacity:1;margin-top:40px;">
      <div class="flex md:flex-row flex-col items-center p-5 grow">
        <div class="md:w-1/5 w-full flex-col justify-center mx-auto" style="font-family: 'Poppins', sans-serif;">
          <div class="bg-[#E7F5F5] rounded-lg text-center py-5 p-10 text-[#2E3855]">
            <p class="uppercase text-sm font-semibold">Waste type</p>
            <h2 class="text-lg font-bold">PE Plastic 10,000 tonnes</h2>
          </div>
          <div class="bg-[#2E3855] rounded-lg flex flex-col justify-center mt-5 py-5 p-10">
            <div class="mx-auto">
              <img src="/assets/Frame 21.png" alt="" />
            </div>
            <div class="text-center text-white">
              <h3 class="font-semibold text-sm uppercase mt-3">Most appropriate technology</h3>
              <h2 class="font-bold text-lg">Pyrolysis</h2>
            </div>
          </div>
        </div>
        <div class="md:w-4/5 w-full flex-col justify-center mx-auto md:pl-10 pl-0 md:mt-0 mt-5">
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              18-25MJ/kg
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              18-25MJ/kg
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              18-25MJ/kg
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Energy content <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] text-center">
              18-25MJ/kg
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>
    function toggleElement(k) {
      var element = document.querySelector('#' + k)
      toggleAlOff()
      // element.classList.contains('opacity-0')
      setTimeout(() => {
        element.classList.toggle('-translate-x-full')
        element.classList.toggle('opacity-0')
      }, 10)
    }

    function toggleElementOff(k) {
      var element = document.querySelector('#' + k)
      // element.classList.toggle('hidden')
      element.classList.add('-translate-x-full')
      element.classList.add('opacity-0')
    }

    function toggleAlOff() {
      toggleElementOff('food')
      toggleElementOff('cow')
      toggleElementOff('bottle')
      toggleElementOff('technology')
    }

    function toggleAll() {
      toggleElement('food')
      toggleElement('cow')
      toggleElement('bottle')
      toggleElement('technology')
    }

    function grow() {
      var element = document.querySelector('#field')
      element.classList.toggle('fixed')
      element.classList.toggle('top-0')
      element.classList.toggle('left-0')
      element.classList.toggle('h-screen')
      element.classList.toggle('w-screen')
    }

    setTimeout(() => {
      toggleAll()
      toggleAll()
    }, 100)

    const expandElement = document.getElementById('expandElement')
    const expandButton = document.getElementById('expandButton')

    expandButton.addEventListener('click', () => {
      expandElement.classList.toggle('fixed')
      expandElement.classList.toggle('top-0')
      expandElement.classList.toggle('left-0')
      expandElement.classList.toggle('h-screen')
      expandElement.classList.toggle('w-screen')
    })
  </script>
</div>
