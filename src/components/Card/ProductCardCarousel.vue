<template>
  <div class="flex flex-col items-start gap-3">
    <div
      class="w-full relative overflow-hidden cursor-pointer"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full  "
      />

      <Transition name="fade">
        <div
          v-if="isHovered"
          class="absolute inset-0 flex flex-col justify-between text-white h-full"
        >
          <div class="flex justify-between w-full p-[0.62rem]">
            <div
              v-if="product.oldPrice"
              class="py-[0.38rem] px-[0.75rem] bg-primary-500 text-white sap-text-xxs"
            >
              {{ discountPercentage }}% OFF
            </div>
            <img src="/images/svg/components/heart.svg" />
          </div>

          <div
            class="flex flex-col items-center space-y-2 sap-select-a-size-card-product"
          >
            <div class="sap-text-xs text-secondary-500">
              Selecione um tamanho
            </div>
            <div class="flex items-center justify-around w-full">
              <button @click="prevSize">
                <img
                  src="/images/svg/components/chevron-left-card.svg"
                  width="20px"
                  height="20px"
                  alt=""
                />
              </button>
              <div class="flex space-x-1">
                <span
                  v-for="size in visibleSizes"
                  :key="size"
                  @click="selectedSize = size"
                  class="w-[1.75rem] h-[1.75rem] flex items-center justify-center sap-text-xs cursor-pointer transition-colors"
                  :class="
                    selectedSize === size
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-secondary-500 border border-secondary-300'
                  "
                >
                  {{ size }}
                </span>
              </div>
              <button @click="nextSize">
                <img
                  src="/images/svg/components/chevron-right-card.svg"
                  width="20px"
                  height="20px"
                  alt=""
                />
              </button>
            </div>
            <button class="py-[0.44rem] bg-primary-500 text-white w-full" @click="addToCart">
              Adicionar à sacola
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div class="">
      <p class="sap-text-xs sap-text-xs-1-25 pb-4">{{ product.name }}</p>
      <div class="flex items-center gap-2">
        <div class="sap-text-md-regular-1-375 text-secondary-600">{{ product.price }}</div>
        <p v-if="product.oldPrice" class="text-secondary-700 line-through sap-text-sm-normal">
          {{ product.oldPrice }}
        </p>
      </div>
      <p class="text-secondary-500 sap-text-xs">{{ product.installments }} sem juros</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '../../stores/cartStore'; 

const props = defineProps({
  product: Object
});

const isHovered = ref(false);
const selectedSize = ref(null);
const cartStore = useCartStore(); 

const discountPercentage = computed(() => {
  if (!props.product.oldPrice) return 0;
  const oldPrice = parseFloat(
    props.product.oldPrice.replace('R$', '').replace(',', '.')
  );
  const newPrice = parseFloat(
    props.product.price.replace('R$', '').replace(',', '.')
  );
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
});

const selectedSizeIndex = ref(0);
const visibleSizes = computed(() =>
  props.product.sizes.slice(
    selectedSizeIndex.value,
    selectedSizeIndex.value + 5
  )
);

const prevSize = () => {
  if (selectedSizeIndex.value > 0) selectedSizeIndex.value--;
};

const nextSize = () => {
  if (selectedSizeIndex.value < props.product.sizes.length - 5)
    selectedSizeIndex.value++;
};

const addToCart = () => {
  cartStore.addToCart(props.product, selectedSize.value);
};
</script>
