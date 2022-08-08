<template>
  <div class="wrapper">
    <div>
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
    </div>

    <strong class="product-price">
      US${{ product.price }}
    </strong>
  </div>
</template>

<script setup lang="ts">
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
</style>
