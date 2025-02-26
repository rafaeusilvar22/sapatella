<template>
  <nav class="fixed top-0 left-0 right-0 z-50 sap-bg-navbar"
   >
      <div class="flex flex-col 3xl:flex-row items-center justify-center py-4 gap-4 3xl:gap-0">
        <img
          class="w-[9.375rem]"
          :src="storeData.logomarca"
          alt="logo marca"
        />

        <div class="gap-8 mx-[2.94rem] hidden md:flex">
          <div
            v-for="section in storeData.header.sections"
            :key="section.name"
            class="text-white hover:text-primary-500 cursor-pointer sap-text-md "
            :class="{ 'font-bold': section.name === 'OFF' }"
          >
            {{ section.name }}
          </div>
        </div>

        <div class="items-center gap-6 hidden md:flex">
          <input-search />

          <div class="flex gap-6">
            <div v-for="action in headerActions" :key="action.name">
              <button class="cursor-pointer hover:bg-secondary-400 rounded-full p-1">
                <img :src="action.icon" alt="action.name" />
              </button>
            </div>
            <cart-dialog />
          </div>
        </div>
      </div>

  </nav>
</template>
<script setup>
import { storeData } from '../composable/globalVariables';
import InputSearch from './SearchInput.vue';
import CartDialog from './CartDialog.vue';

const headerActions = [
  { name: 'user', icon: '/images/svg/components/user.svg' },
  { name: 'favorite', icon: '/images/svg/components/heart.svg' },
];
</script>
