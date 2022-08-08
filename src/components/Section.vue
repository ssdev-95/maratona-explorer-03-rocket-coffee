<script setup lang="ts">
  import { reactive } from 'vue'
  import Product from './Product.vue'
	import * as Coffee from '../composables/products.ts'
	import { isDarkThemeEnabled } from '../composables/theme.ts'

	const { name } = defineProps<{
	  name: string
	}>()

	const list = Coffee[name.toLowerCase()]
</script>

<template>
  <section>
    <header>
      <h1 class="title" :class="isDarkThemeEnabled ? 'dark' : ''">{{ name }}</h1>
    </header>

    <Product v-for="product in list" :key="product.id" :product="product" />
  </section>
</template>

<style scoped>
section {
  width: 18.75rem;
  max-width: 90%;
  margin-inline: auto;
}

section > header {
  width: 100%;
  padding: 0.75rem;
  text-align: center;
  background-color: var(--salmon);
}

.title.dark {
  color: var(--brown);
}
</style>
