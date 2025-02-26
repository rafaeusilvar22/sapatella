<template>
  <div class="flex items-center justify-center">
    <div class="overflow-hidden rvx-bg-light">
      <div
        class="sap-carousel-1-section"
        @mousedown="startDragging"
        @mousemove="onDragging"
        @mouseup="stopDragging"
        @mouseleave="stopDragging"
      >
        <div v-for="(item, index) in storeData[1].products" :key="index">
          <div
            class="flex flex-col items-center justify-center p-2 w-[188px] cursor-pointer transform transition duration-500 hover:scale-105 hover:text-primary-500 gap-[14px]"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-[10.125rem]"
              @dragstart.prevent
            />
            <span class="sap-text-md-1-375">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeData } from '../../composable/globalVariables';

defineOptions({
  name: 'CarouselRecentQueries'
});

const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const startDragging = (e) => {
  isDragging.value = true;
  startX.value = e.pageX - e.currentTarget.offsetLeft;
  scrollLeft.value = e.currentTarget.scrollLeft;
};

const onDragging = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - e.currentTarget.offsetLeft;
  const walk = (x - startX.value) * 1;
  e.currentTarget.scrollLeft = scrollLeft.value - walk;
};

const stopDragging = () => {
  isDragging.value = false;
};
</script>
