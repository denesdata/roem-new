<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div class="w-7/8 flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <style>
    div > img {
      /* width: 40%; */
      height: 200px;
      margin: 40px 40px 40px 100px;
      object-fit: contain;
    }
    p {
      font-size: 1.2rem;
    }
  </style>
  <div class="w-4/6 pt-10">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">
          Non-recycled waste is fuel. By using it as such, you can take control of your energy and waste costs, energy supply
          and sustainability credentials
        </h2>
        <p class="pt-10">Start your journey to grid independence and a sustainable future with us today</p>
        <div class="flex">
          <a
            class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/explore">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Get started</span>
          </a>
          <a
            class="ml-10 mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-navy rounded-lg flex justify-center items-center text-white tracking-wider"
            href="/green-energy/new-renewable/">
            <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
            <span>Learn more</span>
          </a>
        </div>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/medres/Non-recyclable waste box.png" alt="" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-full pr-30 bg-transparent justify-center text-center">
        <p class="pt-10">This platform</p>
        <h2 class="text-3xl card-title justify-center">
          <br />
          A one stop shop for your power from non-recycled waste journey. Here, you can ...
        </h2>
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">
          Achieve grid independence - with the best suited technology from our global database of suppliers
        </h2>
        <p class="pt-10">
          Using our extensive database of technologies, we can match you with the most suitable option for your specific needs
          and requirements
        </p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Act now</span>
        </a>
      </div>
      <div class="w-2/6 p-16 pr-30 pb-8 bg-white">
        <img src="/assets/medres/best suited technology box.png" alt="" class="h-44" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-1/2 rounded-3xl p-10 mr-0 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Control supply</h2>
        <div class="flex flex-row">
          <div class="container flex flex-col justify-between">
            <p class="content pt-10">
              By harnessing the power of non-recycled waste, our platform provides a secure and reliable energy source, giving
              you peace of mind knowing that you'll never run out of power.
            </p>
            <div class="button-container">
              <div class="bottom-0 flex flex-row justify-between">
                <a
                  class="mt-52 mr-20 w-60 h-14 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
                  href="/explore">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  <span>Take control</span>
                </a>
                <img
                  src="/assets/medres/Learn about Power-from-Waste as a renewable box.png"
                  alt=""
                  style="margin-bottom:0px; margin-top:80px; margin-left: 0px; margin-right: 20px;"
                  class="h-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 rounded-3xl p-10 ml-20 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Save costs on your energy bills and waste management</h2>
        <div class="flex flex-row">
          <div class="container flex flex-col justify-between">
            <p class="content pt-10">
              Our tool can automatically assess the potential of your non-recycled waste stream and match it to a specific
              technology
            </p>
            <div class="button-container">
              <div class="bottom-0 flex flex-row justify-between">
                <a
                  class="mt-52 mr-20 w-60 h-14 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
                  href="/explore">
                  <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
                  <span>Save money now</span>
                </a>
                <img
                  src="/assets/medres/Save costs box.png"
                  alt=""
                  style="margin-bottom:0px; margin-top:80px; margin-left: 0px; margin-right: 30px;"
                  class="h-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">Control your environmental footprint</h2>
        <p class="pt-10">
          Power from waste technology is not only clean and renewable, but also helps reduce waste in landfills and reduces
          greenhouse gas emissions. We help create circular, on site sustainable solutions and supply chains
        </p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Go green</span>
        </a>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/medres/Minimise your environmental footprint.png" alt="" class="h-64" />
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-full pr-30 bg-transparent justify-center text-center">
        <h2 class="text-3xl card-title justify-center">
          Don't settle for second best, find your technology right here on this platform
        </h2>
        <!-- <p class="pt-10">Select the right technology and start your project with just a few taps</p> -->
      </div>
    </div>
  </div>

  <div class="w-4/6">
    <div class="flex rounded-3xl overflow-hidden mt-20">
      <div class="w-4/6 p-10 pr-36 bg-white flex flex-col justify-between">
        <h2 class="card-title text-3xl">
          Our cutting-edge technology matching service on this website helps you find the perfect solution
        </h2>
        <p class="pt-10">Discover how your business can tap into the potential of power-from-waste technology</p>
        <a
          class="mt-10 w-60 p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"
          href="/explore">
          <img class="mr-3" src="/assets/arrow-right-circle.png" alt="" />
          <span>Explore our tools</span>
        </a>
      </div>
      <div class="w-2/6 p-12 pr-30 bg-white">
        <img src="/assets/medres/Investing in green energy box.png" alt="" class="h-52" />
      </div>
    </div>
  </div>
</div>
