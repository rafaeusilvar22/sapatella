<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 w-full py-6 bg-secondary-100 px-3 md:px-0"
  >
    <div
      class="flex items-center sm:justify-center justify-start gap-2"
      v-for="benefit in PromoHighlightsData"
      :key="benefit.text"
    >
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full border border-solid border-primary-500"
      >
        <img :src="benefit.icon" alt="truck" />
      </div>
      <p>
        {{ benefit.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PromoHighlights'
});

const props = defineProps({
  PromoHighlightsData: Object
});
</script>
