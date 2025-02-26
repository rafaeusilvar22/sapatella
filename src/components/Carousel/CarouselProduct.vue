<template>
  <div class="sap-carousel-product-container">
    <button class="swiper-button-prev sap-carousel-custom-prev hover:bg-secondary-300">
      <img
        src="/images/svg/components/chevron-left-card.svg"
        width="20px"
        height="20px"
        alt="icon chevron left"
      />
    </button>

    <swiper
      :pagination="paginationOptions"
      :navigation="{
        nextEl: '.sap-carousel-custom-next',
        prevEl: '.sap-carousel-custom-prev',
      }"
      :breakpoints="breakpoints"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in storeData[3].products" :key="item.name">
        <product-card-carousel :product="item" />
      </swiper-slide>
    </swiper>

    <button class="swiper-button-next sap-carousel-custom-next hover:bg-secondary-300">
      <img
        src="/images/svg/components/chevron-right-card.svg"
        width="20px"
        height="20px"
        alt="icon chevron right"
      />
    </button>

    <div class="sap-custom-swiper-pagination"></div>
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ProductCardCarousel from '../Card/ProductCardCarousel.vue';
import { storeData } from '../../composable/globalVariables';

defineOptions({
  name: 'CarouselProduct'
});

const props = defineProps({
  breakpoints: {
    type: Object,
    required: true
  },
  width: {
    type: Number,
    default: 1200
  }
});

const modules = [Navigation, Pagination, Mousewheel, Keyboard];

const paginationOptions = ref({
  el: '.sap-custom-swiper-pagination',
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className} custom-bullet"></span>`;
  }
});
</script>