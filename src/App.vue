<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive } from 'vue'
import { drinks, brunch, loading, populateProducts } from './composables/products.ts'

import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Switcher from './components/Switcher.vue'
import Loader from './components/Loader.vue'

populateProducts()
  .catch((err) => console.log(err))
</script>

<template>
  <Header />
  <Section v-if="!loading" name="BRUNCH" />
  <Section v-if="!loading" name="DRINKS" />
	<Loader v-if="loading" />
	<Switcher />
</template>
