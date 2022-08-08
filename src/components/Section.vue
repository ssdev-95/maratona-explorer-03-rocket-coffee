<template>
  <section>
	  <header>
		  <h1>{{name}}</h1>
		</header>

		<Product
		  v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</section>
</template>

<script setup lang="ts">
import Product from './Product.vue'

type IProduct = {
  id:string
	name:string
	description:string
	price:number
}

const { name, products } = defineProps<{ name:string, products:IProduct[] }>()
</script>

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
</style>
