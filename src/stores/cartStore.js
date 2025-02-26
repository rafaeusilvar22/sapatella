import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const addToCart = (product, size) => {
    if (!size) {
      alert('Selecione um tamanho antes de adicionar ao carrinho.');
      return;
    }

    const existingItem = cart.value.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({ ...product, size, quantity: 1 });
    }
  };

  return { cart, addToCart };
}, {
  persist: {
    storage: sessionStorage
  }
});
