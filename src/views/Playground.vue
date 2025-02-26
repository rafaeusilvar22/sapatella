<template>
  <div class="relative flex min-h-screen">
    <div
      v-for="(image, index) in backgroundImages"
      :key="index"
      class="w-full md:w-1/2 min-h-[400px] md:min-h-screen bg-cover bg-center invisible md:visible"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <button
      class="swiper-button-prev sap-main-carousel-custom-prev hover:bg-secondary-300 left-8 invisible md:visible"
    >
      <img
        src="/images/svg/components/chevron-left-card.svg"
        width="20px"
        height="20px"
        alt="icon chevron left"
      />
    </button>
    <div class="absolute inset-0 flex items-center justify-center px-4 mt-[15.5rem] md:mt-0">
      <div class="relative">
        <div
          class="w-full max-w-[25.75rem] h-[500px] flex items-center justify-center relative pb-6"
        >
          <swiper
            :pagination="paginationOptions"
            :navigation="navigationConfig"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper w-full h-full"
          >
            <swiper-slide
              v-for="item in carouselImages"
              :key="item"
            >
              <div class="w-full h-full flex flex-col items-center relative">
                <div class="flex justify-between bg-white px-6 py-4 w-full">
                  <p class="sap-text-xl-regular">#SuperBazar</p>
                  <p class="text-primary-900 sap-text-sm">
                    até
                    <span class="sap-text-xl-bold text-primary-500"
                      >50% OFF</span
                    >
                  </p>
                </div>
                <img :src="item" class="w-full h-full object-cover" />
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <button
          class="w-[9.75rem] h-[3rem] text-white bg-primary-500 absolute bottom-[0.5rem] left-1/2 transform -translate-x-1/2 hover:bg-primary-600 z-10 "
        >
          Conferir
        </button>
      </div>
    </div>
    <button
      class="swiper-button-next sap-main-carousel-custom-next hover:bg-secondary-300 right-8 invisible md:visible"
    >
      <img
        src="/images/svg/components/chevron-right-card.svg"
        width="20px"
        height="20px"
        alt="icon chevron right"
      />
    </button>
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { storeData } from '../composable/globalVariables';

const modules = [Navigation, Pagination, Mousewheel, Keyboard];

const paginationOptions = ref({
  el: '.sap-custom-swiper-pagination',
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className} custom-bullet"></span>`;
  }
});

const navigationConfig = {
  nextEl: '.sap-main-carousel-custom-next',
  prevEl: '.sap-main-carousel-custom-prev'
};

const backgroundImages = [
  '/images/webp/components/image_1_main_carousel.webp',
  '/images/webp/components/image_2_main_carousel.webp'
];

const carouselImages = [
  '/images/webp/components/product_1_main_carousel.webp',
  '/images/webp/components/product_1_main_carousel.webp',
  '/images/webp/components/product_1_main_carousel.webp'
];

</script>
