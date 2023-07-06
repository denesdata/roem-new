<script lang="ts">
  import { site } from '$lib/config/site'
  import Landing from '$lib/components/landing.svelte'
  import { scale, fly } from 'svelte/transition'
</script>

<div style="display:none;">
  <div class="relative">
    <div id="expandElement" class="fixed inset-0 bg-blue-500 text-white flex items-center justify-center">
      <!-- Content goes here -->
    </div>
  </div>

  <button id="expandButton" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Expand</button>

  <style>
    #expandElement {
      display: none;
    }

    .after\:border-solid::after {
      transform: scale(2) translate(-2px, 2px);
    }
  </style>

  <script>
    const expandElement = document.getElementById('expandElement')
    const expandButton = document.getElementById('expandButton')

    expandButton.addEventListener('click', () => {
      expandElement.style.display = 'block'
      setTimeout(() => {
        expandElement.classList.add('opacity-100')
      }, 0)
    })

    expandElement.addEventListener('click', e => {
      if (e.target === expandElement) {
        expandElement.classList.remove('opacity-100')
        setTimeout(() => {
          expandElement.style.display = 'none'
        }, 300)
      }
    })
  </script>
  <img src="/assets/field.png" alt="" style="height:100%; position:fixed; top:10px;" />
</div>
<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8">
  <style>
    p {
      font-size: 1.2rem;
    }
  </style>
  <div class="h-full w-2/3">
    <!-- ===================after landing page =================== -->
    <section>
      <div class="flex rounded-2xl overflow-hidden mt-12">
        <div class="w-3/5 p-10 pr-12 bg-white">
          <h2 class="uppercase pb-5 text-pfp-green font-bold">Exploration station</h2>
          <h2 class="card-title text-3xl">Green power from non-recycled waste</h2>
          <p class="pt-6">
            Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others
          </p>
          <a
            class="mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore/#map">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Explore the possibilites</span>
          </a>
        </div>
        <div class="w-2/5 p-4 bg-light-green" id="topRightCluster">
          <style>
            #topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
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
    <section class="mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl" style="font-family: 'Poppins', sans-serif;">
      <style>
        #thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }
      </style>
      <h2 class="card-title text-3xl pb-10 justify-center">How it works</h2>
      <div class=" grid gap-6 md:grid-cols-5 grid-cols-2 w-full" id="thegrid">
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/pet bottle 1.png" alt="" /></div>
          <div class="w-2/4">Plastic waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7 (2).png" alt="" /></div>
          <div class="w-2/4">Food waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7 (3).png" alt="" /></div>
          <div class="w-2/4">Animal waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7.png" alt="" /></div>
          <div class="w-2/4">Agricultural waste</div>
        </div>
        <div
          class="p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          <div class="flex justify-center h-40"><img src="/assets/Group 7 (1).png" alt="" /></div>
          <div class="w-2/4">Wood waste</div>
        </div>
      </div>
      <div class="relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase">
        Power from waste technology
      </div>
      <div class="flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]" style="height:70px;">
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase">
          &nbsp;
        </div>
        <div
          class="arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent" />
      </div>
      <div class=" grid gap-6 grid-cols-6 w-full" id="thegrid2">
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Liquid fertiliser
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Solid digestate
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Biogas
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent">
          Syngas
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Bio-oil
        </div>
        <div
          class="flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl">
          Biochar
        </div>
      </div>
      <div class="flex justify-center mt-6 p-6">
        <div
          class="p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent">
          Heat / Cool
        </div>
      </div>
      <div class="flex justify-center mt-[-10px] p-6 mb-[-20px]">
        <div class="p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center">
          Electricity
        </div>
      </div>
    </section>

    <!-- <img class="transition-shadow z-10 w-full h-full" src="/assets/field.png" alt="" /> -->

    <h1 id="map" class="pt-10">
      <div class="container mx-auto rounded-2xl">
        <div class="flex md:flex-row flex-col items-center rounded-2xl bg-white w-full">
          <div class="bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl">
            <img class="h-76 p-6" src="/assets/Frame 19 (1).png" alt="" />
          </div>

          <div class=" md:w-3/5 w-full p-14 pt-8 pb-6">
            <style>
              p {
                font-size: 1.2rem;
              }
            </style>
            <a style="font-family: 'Poppins', sans-serif;" class="uppercase pb-5 text-pfp-green font-bold">
              Exploration station
            </a>
            <div style="font-family: 'Poppins', sans-serif;" class="card-title text-3xl leading-10 text-[#2E3855] mt-5">
              Interact with our exploration <br />
              station to learn more
            </div>
            <p style=" font-family: 'Public Sans', sans-serif;" class="text-[#2E3855] tracking-wider mt-5">
              Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you
            </p>
          </div>
        </div>
      </div>
    </h1>

    <!-- ===================after landing page =================== -->
    <div
      class="items-center rounded-lg bg-none w-5/6"
      id="cow-panel"
      style="z-index:30;position:fixed;top:150px;left:0px;width:30%;">
      <style>
        .cow-element {
          /* opacity: 0.1; */
        }
      </style>
      <div
        class="cow-element opacity-0 -translate-x-full absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-lg"
        id="cow">
        <div class="absolute left-[98%] rounded-lg">
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
            <div class="w-2/5"><img style="height:70%;padding:20px;margin-left:10%;" src="/assets/cow 1.png" alt="" /></div>
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
              <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
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
              <a href="/#calculator">
                <button
                  type="button"
                  onclick="toggleAlOff();"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  Start your project
                </button>
              </a>
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
      <div
        class="cow-element opacity-0 -translate-x-full absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-lg"
        id="food">
        <div class="absolute left-[98%] rounded-lg">
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
            <div class="w-2/5">
              <img style="height:70%;padding:20px;margin-left:10%;" src="/assets/Group 7 (2).png" alt="" />
            </div>
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
              <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
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
              <a href="/#calculator">
                <button
                  type="button"
                  onclick="toggleAlOff();"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  Start your project
                </button>
              </a>
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
      <div
        class="cow-element opacity-0 -translate-x-full absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-lg"
        id="bottle">
        <div class="absolute left-[98%] rounded-lg">
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
            <div class="w-2/5">
              <img style="height:70%;padding:20px;margin-left:20%;" src="/assets/pet bottle 1.png" alt="" />
            </div>
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
              <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
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
              <a href="/#calculator">
                <button
                  type="button"
                  onclick="toggleAlOff();"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  Start your project
                </button>
              </a>
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
      <div
        class="cow-element opacity-0 -translate-x-full absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-lg"
        id="technology">
        <div class="absolute left-[98%] rounded-lg">
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
            <div class="w-2/5"><img style="height:70%;padding:20px;margin-left:20%;" src="/assets/Group14.png" alt="" /></div>
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
              <a href="https://www.host.nl/en/case/guichen-france/" target="_blank">Case study</a>
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
              <a href="/#calculator">
                <button
                  type="button"
                  onclick="toggleAlOff();"
                  style=" font-family: 'Public Sans', sans-serif;"
                  class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  Start your project
                </button>
              </a>
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
    <section class="pt-10 rounded-2xl">
      <div
        class="container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"
        style="padding-top:520px;z-index:29;"
        id="field">
        <div>
          <div id="buttons" style="z-index:99">
            <button
              type="button"
              onclick="toggleElement('food')"
              style=" font-family: 'Public Sans', sans-serif; left:520px; top:-430px;"
              class="techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/Group 7 (2).png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('cow')"
              style=" font-family: 'Public Sans', sans-serif; left:780px; top:-200px;"
              class="techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2">
              <img class="mr-3" src="/assets/manure 1.png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('bottle')"
              style=" font-family: 'Public Sans', sans-serif; left:120px; top:-70px;"
              class="techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2">
              <img class="mr-3" src="/assets/pet bottle 1.png" alt="" />
            </button>
            <button
              type="button"
              onclick="toggleElement('technology')"
              style=" font-family: 'Public Sans', sans-serif; background:#2e3855;  left:560px; top:-530px;"
              class="techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase">
              <div style="color:#ffffff;font-size:18px;margin:-5px 0px -5px -5px;">Technology</div>
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
                height: 66px;
                margin: -10px 0px -5px -5px;
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
                position: absolute;
                bottom: -20px;
                left: 45px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #ffffffdd transparent transparent transparent;
              }
              .techbutton-dark::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 70px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #2e3855dd transparent transparent transparent;
              }
              .techbuttons {
                box-shadow: 0 0 10px 5px #d8e6f2ff;
              }
              .fullw {
                max-width: 100%;
                min-height: 100%;
                padding-left: 250px;
                padding-top: 650px !important;
              }
              .fullb {
                top: calc(100% - 65px) !important;
                left: calc(100% - 300px) !important;
                position: fixed !important;
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
            .growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }
          </style>
          <div
            class="growbuttons inline-flex"
            id="full-screen-buttons"
            style="width:200px; position:relative; top: -10px; left: calc(100% - 300px);">
            <div class="inline-flex items-center justify-center">
              <input
                type="text"
                placeholder="Search up waste..."
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
              <button
                aria-label="search"
                on:click={() => (search = !search)}
                tabindex="0"
                class="btn btn-square btn-ghost ml-[-45px]">
                <span class="i-heroicons-outline-search" />
              </button>
            </div>
            <button
              type="button"
              onclick="grow()"
              style=" font-family: 'Public Sans', sans-serif;"
              class="growbutton ml-[10px] w-10
               h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1">
              <img class="w-20 mr-3" src="/assets/Frame 19.svg" alt="" style="width:50px;height:50px;" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="rounded-2xl">
      <div class="container mx-auto pt-10 rounded-2xl">
        <div class="flex md:flex-row flex-col items-center rounded-2xl bg-white w-full">
          <div class="h-96 bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-2xl">
            <img class="w-96 h-60 mt-16" src="/assets/tech.png" alt="" />
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
            id="calculator"
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
                  <option class="bg-[#E7F5F5]" value="cow-manure">Cow manure</option>
                  <option class="bg-[#E7F5F5]" value="pig-slurry">Pig slurry</option>
                  <option class="bg-[#E7F5F5]" value="food-waste">Food waste</option>
                  <option class="bg-[#E7F5F5]" value="fish-waste">Fish waste</option>
                  <option class="bg-[#E7F5F5]" value="poultry-litter">Poultry litter</option>
                  <option class="bg-[#E7F5F5]" value="brewery-waste">Brewery waste</option>
                  <option class="bg-[#E7F5F5]" value="pulp-paper-waste">Pulp & paper waste</option>
                  <option class="bg-[#E7F5F5]" value="textile-waste">Textile waste</option>
                  <option class="bg-[#E7F5F5]" value="pe-plastic">PE plastic</option>
                  <option class="bg-[#E7F5F5]" value="srf-rdf">SRF and RDF</option>
                  <option class="bg-[#E7F5F5]" value="coffee-grounds">Coffee grounds</option>
                  <option class="bg-[#E7F5F5]" value="crop-residues">Crop residues</option>
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
                  <option class="bg-[#E7F5F5]" value="red">&lt; 5 t</option>
                  <option class="bg-[#E7F5F5]" value="red">5 - 100 t</option>
                  <option class="bg-[#E7F5F5]" value="red">100 - 1000 t</option>
                  <option class="bg-[#E7F5F5]" value="red">1000 - 10,000 t</option>
                  <option class="bg-[#E7F5F5]" value="red">10,000 - 20,000 t</option>
                  <option class="bg-[#E7F5F5]" value="red">20, 000 - 60,000 t</option>
                  <option class="bg-[#E7F5F5]" value="red">&gt; 60,000 t</option>
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
        <div class="flex justify-center w-full">
          <button
            class="font-bold mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore/#calculator"
            onclick="growElement();">
            <img class="mr-3" src="/assets/calculator.png" alt="" />
            <span>Calculate</span>
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
        var element = document.querySelector('#results')
        // element.classList.toggle('hidden')
        // element.classList.toggle('-translate-x-full')
        element.style.height = 550 + 'px'
        element.style.opacity = 1
      }
    </script>
    <section class="mt-5 grow" style="height:0px;opacity:0;">
      <div class="container mx-auto bg-white p-5 rounded-2xl">
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
            <button
              type="button"
              style=" font-family: 'Public Sans', sans-serif;"
              class="flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
              <a href="/contact">Book a call with us</a>
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
    </section>

    <section
      class=" container mx-auto bg-white pb-10 rounded-2xl grow"
      style="opacity:0;height:0px;overflow:hidden;"
      id="results">
      <div class="flex md:flex-row flex-col items-center p-5">
        <div class="md:w-1/5 w-full flex-col justifyq-center mx-auto" style="font-family: 'Poppins', sans-serif;">
          <div class="bg-[#E7F5F5] rounded-lg text-center py-5 p-10 text-[#2E3855]">
            <p class="uppercase text-sm font-semibold"><b>Waste type</b></p>
            <h2 class="text-lg font-bold">
              PE Plastic
              <br />
              10,000 tonnes
            </h2>
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
              Heat produced <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              11,200 MWh per year
            </div>
          </div>
          <div class="flex justify-center mb-5">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Heat savings <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] text-center">
              £48,000 per year
            </div>
          </div>
          <div class="flex justify-center">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Electricity produced <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] mb-5 text-center">
              4,800 MWh per year
            </div>
          </div>
          <div class="flex justify-center mb-5">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Electricity savings <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] text-center">
              £70,000 per year
            </div>
          </div>
          <div class="flex justify-center mb-5">
            <div
              style="font-family: 'Poppins', sans-serif;"
              class="flex justify-center items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-lg font-bold text-xl leading-10 text-white text-center after:absolute after:-right-2 after:top-[40%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20
                            tracking-wider text-[#2E3855]">
              Char produced <img class="ml-5" src="/assets/info.png" alt="" />
            </div>
            <div
              class="absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] font-bold text-xl leading-10 text-[#2E3855] text-center">
              500 tonnes
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
      // element.classList.toggle('scale-[1.5]')
      element.classList.toggle('fixed')
      element.classList.toggle('top-0')
      element.classList.toggle('left-0')
      element.classList.toggle('fullw')

      var growbuttons = document.querySelector('.growbuttons')
      growbuttons.classList.toggle('fullb')
    }

    setTimeout(() => {
      toggleAll()
      toggleAll()
    }, 100)
  </script>
</div>
