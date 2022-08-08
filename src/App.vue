<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive } from 'vue'
import Header from './components/Header.vue'
import Section from './components/Section.vue'

type Product = {
  id:string
	name:string
	description:string
	price:number
}

let brunch = reactive<Product[]>([])

let drinks = reactive<Product[]>([])

fetch(`${import.meta.env.VITE_API_URL}brunch`)
  .then(res => res.json())
	.then(json => {
	  brunch.value = json
	})
	.catch(err => console.log(err))

fetch(`${import.meta.env.VITE_API_URL}drinks`)
  .then(res => res.json())
	.then(json => {
	  drinks.value = json
	})
	.catch(err => console.log(err))
</script>

<template>
  <Header />
	<Section name="BRUNCH" :products="brunch" />
	<Section name="DRINKS" :products="drinks" />
</template>

<style scoped>
h1 {
  color: red;
}
</style>
