<template>
  <div className="wrapper">
	  <div>
		  <h1>{{product.name}}</h1>
			<p>{{product.description}}</p>
		</div>

		<strong>
	    {{product.price}}
		</strong>
	</div>
</template>

<script setup lang="ts">
type Product = {
  id:string
	name:string
	description:string
	price:number
}

const { product } = defineProps<{ product:Product }>()
console.log(product)
</script>

<style scoped>
.wrapper {
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 1rem;
}

.wrapper > div {
  flex: 1;
}

.wrapper > div > p {
  color: var(--gray);
}
</style>
