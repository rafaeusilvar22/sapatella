<template>
  <footer class="text-secondary-600">
    <section
      class="flex flex-col md:flex-row justify-around items-center md:items-start gap-8 py-[3rem] px-3"
    >
      <div class="flex flex-col gap-[36px] items-center md:items-start">
        <img
          class="w-[169px] h-[36px]"
          :src="storeData.footer[0].image"
        />
        <div class="flex gap-4">
          <img
            class="cursor-pointer"
            v-for="icon in storeData.footer[0].icons"
            :key="icon.icon"
            :src="icon.icon"
          />
        </div>
      </div>

      <div class="flex flex-col xs:flex-row gap-8 justify-around">
        <div v-for="(item, key) in storeData.footer" :key="key">
          <div
            v-if="key == 1 || key == 2 || key == 3"
            class="text-center md:text-left flex flex-col gap-5"
          >
            <h3 class="sap-text-md-regular-1-25 uppercase">{{ item.title }}</h3>
            <ul class="sap-text-sm flex flex-col gap-[0.875rem]">
              <li
                v-for="(section, index) in item.sections"
                :key="index"
                class="mb-2 cursor-pointer hover:text-primary-500"
              >
                {{ section.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <h3 class="sap-text-md-regular-1-25 uppercase">
          {{ storeData.footer[4].title }}
        </h3>
        <div class="flex gap-4">
          <img
            v-for="icon in storeData.footer[4].icons"
            :key="icon.icon"
            :src="icon.icon"
          />
        </div>
      </div>
    </section>

    <hr class="w-full h-[0.0625rem] bg-black" />
    <section class="flex flex-col items-center gap-[1.69rem] pt-[2rem] pb-[1.81rem] px-3">
      <p class="text-center py-4" v-html="storeData.footer[5].title"/>
      <img :src="storeData.footer[5].icon" alt="icon baseboard">
    </section>
  </footer>
</template>

<script setup>
import { storeData } from '../composable/globalVariables';
</script>
