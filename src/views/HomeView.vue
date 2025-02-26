<template>
  <div>
    <main-carousel />
    <div class="flex flex-col gap-[4.5rem] text-secondary-600">
      <promo-highlights :PromoHighlightsData="storeData[0].benefits" />

      <section class="flex flex-col gap-6">
        <h2 class="text-center sap-text-xl-regular">
          {{ storeData[1].title }}
        </h2>
        <category-carousel />
      </section>

      <section
        class="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-[0rem] w-full py-6 bg-secondary-100"
      >
        <div class="flex flex-col w-full max-w-[16.875rem]">
          <h2 class="sap-text-lg pb-4">{{ storeData[2].title }}</h2>
          <p class="sap-text-xs pb-8">{{ storeData[2].description }}</p>
          <button
            class="w-[9.75rem] h-[3rem] text-white bg-primary-500 hover:bg-primary-600 sap-text-md-regular-1-25"
          >
            {{ storeData[2].button.name }}
          </button>
        </div>
        <img
          class="w-full max-w-[35.875rem] h-auto"
          src="/images/webp/page/image_1_section.webp"
          alt="model in cart image"
        />
      </section>

      <section class="flex flex-col gap-6 px-[3.5rem]">
        <div class="text-center sap-text-xl-regular">
          {{ storeData[3].title }}
        </div>

        <carousel-product
          :breakpoints="breakpointsCarouselProductThirdSection"
        />
      </section>

      <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-10 lg:px-[3.5rem] py-10 bg-secondary-100"
      >
        <div class="flex flex-col md:items-start items-center">
          <div class="sap-text-fourth-section-container-text">
            <h3 class="sap-text-lg pb-1">{{ storeData[4].title }}</h3>
            <p class="sap-text-xs">{{ storeData[4].description }}</p>
            <button
              class="flex items-center gap-2 hover:bg-secondary-200 rounded-md px-1 my-[1.64rem]"
            >
              <p class="sap-text-md-1-25">{{ storeData[4][0].button }}</p>
              <img
                src="/images/svg/arrow-right-alt.svg"
                width="24px"
                height="24px"
                alt="icon arrow right"
              />
            </button>
          </div>
          <img
            class="sap-image-4-0-section transform transition duration-500 hover:scale-105"
            :src="storeData[4][0].image"
          />
        </div>

        <div
          class="flex flex-col justify-between md:items-start items-center h-full"
        >
          <img
            class="sap-image-4-1-section transform transition duration-500 hover:scale-105"
            :src="storeData[4][1].image"
          />
          <div>
            <button
              class="flex items-center gap-2 hover:bg-secondary-200 rounded-md px-1 mt-[1.63rem]"
            >
              <p class="sap-text-md-1-25">{{ storeData[4][1].button }}</p>
              <img
                src="/images/svg/arrow-right-alt.svg"
                width="24px"
                height="24px"
              />
            </button>
          </div>
        </div>

        <div class="flex flex-col items-center justify-between gap-6 h-full">
          <img
            class="sap-image-4-2-section transform transition duration-500 hover:scale-105"
            :src="storeData[4][2].image"
          />
          <div class="flex flex-col gap-1 w-[15.625rem]">
            <div class="sap-text-lg pb-1">{{ storeData[4][2].title }}</div>
            <p class="sap-text-xs">{{ storeData[4][2].description }}</p>
          </div>
          <button
            class="flex items-center gap-2 hover:bg-secondary-200 rounded-md px-1"
          >
            <p class="sap-text-md-1-25">{{ storeData[4][2].button }}</p>
            <img
              src="/images/svg/arrow-right-alt.svg"
              width="24px"
              height="24px"
            />
          </button>
        </div>
      </section>

      <section
        class="flex flex-col lg:flex-row items-center gap-[3.5rem] w-full"
      >
        <div class="w-full lg:w-1/2">
          <img class="w-full h-auto object-cover" :src="storeData[5].image" />
        </div>

        <div class="w-full lg:w-1/2  px-[3.5rem]">
          <carousel-product
              :breakpoints="breakpointsCarouselProductFifthSection"
            />
        </div>
      </section> 
      <img class="w-full" :src="storeData[6].image" alt="models in a desk" />

      <section
        class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[8.31rem] px-3"
      >
        <div style="width: 100%; max-width: 28.8125rem">
          <div class="sap-text-xl-regular pb-4">{{ storeData[7].title }}</div>
          <p class="sap-text-sm text-left">{{ storeData[7].description }}</p>
        </div>
        <div class="relative">
          <img :src="storeData[7].image" class="sap-7-section-image" />
          <div class="sap-7-section-block-image-behind" />
        </div>
      </section>

      <section
        class="flex flex-col gap-[0.81rem] bg-secondary-100 text-center py-[2.19rem] px-6 md:px-0"
      >
        <div class="sap-text-lg" v-html="storeData[8].title"></div>
        <div class="flex flex-col sm:flex-row justify-center gap-5">
          <input
            class="w-full max-w-full sm:max-w-[17.3125rem] px-3 py-[0.69rem] border-2 border-solid border-secondary-800"
            type="text"
            placeholder="Nome"
          />
          <input
            class="w-full max-w-full sm:max-w-[17.3125rem] px-3 py-[0.69rem] border-2 border-solid border-secondary-800"
            type="email"
            placeholder="E-mail"
          />
          <button
            class="w-full max-w-full sm:max-w-[9.75rem] h-[3rem] text-white bg-primary-500 hover:bg-primary-600"
          >
            {{ storeData[8].button.name }}
          </button>
        </div>
      </section>
    </div>
    <footer-standard />
  </div>
</template>

<script setup>
import { storeData } from '../composable/globalVariables';
import MainCarousel from '../components/Carousel/MainCarousel.vue';
import CategoryCarousel from '../components/Carousel/CategoryCarousel.vue';
import FooterStandard from '../components/FooterStandard.vue';
import CarouselProduct from '../components/Carousel/CarouselProduct.vue';
import PromoHighlights from '../components/PromoHighlights.vue';

defineOptions({
  name: 'HomeView'
});

const breakpointsCarouselProductThirdSection = {
  200: { slidesPerView: 1, spaceBetween: 20 },
  400: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 3, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 20 }
};

const breakpointsCarouselProductFifthSection = {
  200: { slidesPerView: 1, spaceBetween: 20 },
  400: { slidesPerView: 2, spaceBetween: 20 },
  1100: { slidesPerView: 2, spaceBetween: 20 }
};
</script>
