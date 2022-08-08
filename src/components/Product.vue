<template>
  <div class="wrapper" :class="isDarkThemeEnabled ? 'dark' : ''">
    <div>
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
    </div>

    <strong class="product-price">
      US${{ product.price.toFixed(2) }}
    </strong>
  </div>
</template>

<script setup lang="ts">
import { isDarkThemeEnabled } from '../composables/theme.ts'
const { product } = defineProps<{ product: IProduct }>()
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
	padding: 1.45rem 0;
}

p, h1, strong {
  transition: color 0.25s cubic-bezier(0.7,0.7,0.7,0.7);
}

.wrapper > div {
  flex: 1;
}

.product-description {
  color: var(--gray);
}

.product-name {
  font-size: 1.5rem;
}

.product-price {
  font-weight: 700;
	font-size: 1.25rem;
}

.wrapper.dark .product-name, .wrapper.dark .product-price {
  color: var(--white);
}

.wrapper.dark .product-description {
  color: var(--beige);
}
</style>
