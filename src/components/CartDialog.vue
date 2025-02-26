<template>
    <button class="cursor-pointer hover:bg-secondary-400 rounded-full p-1 relative">
      <div v-if="cartStore?.cart.length > 0" class="bg-primary-500 text-white w-4 h-4 flex items-center justify-center rounded-full absolute top-0 right-0 sap-text-xxs">{{ cartStore?.cart.length }}</div>
      <img src="/images/svg/components/shopping-cart.svg" />
    </button>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'; 

const cartStore = useCartStore(); 


</script>

<style lang="scss" scoped>

</style>