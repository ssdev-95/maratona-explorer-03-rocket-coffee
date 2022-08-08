<template>
  <label class="wrapper" :class="isDarkThemeEnabled ? 'dark' : ''">
	  <div class="switcher">
		  <input v-model="isDarkThemeEnabled" type="checkbox" />
			<div class="thumb" :class="isDarkThemeEnabled ? 'dark' : ''" />
	  </div>
	</label>
</template>

<script setup lang="ts">
import { isDarkThemeEnabled } from '../composables/theme.ts'
</script>

<style scoped>
.wrapper {
  position: absolute;
	top: .95rem;
	left: .95rem;

	height: 1.5rem;
	width: 4rem;
	background-color: var(--brown);

	border-radius: 5rem;
	transition: background-color 0.25s cubic-bezier(0.7,0.7,0.7,0.7);
}


.wrapper.dark {
  background-color: var(--salmon);
}

.switcher {
  width: 5rem;
	height: 1.5rem;
	position: relative;
}

.thumb {
  height: 1.9rem;
	width: 1.9rem;
	border-radius: 1.6rem;
	background-color: var(--white);
	position: absolute;
	left: -4px;
	top: -3px;
	transition: all 0.25s cubic-bezier(0.7,0.7,0.7,0.7);
}

.thumb.dark {
  left: 2.35rem;
}

.switcher input {
  transform: translateY(-100vh);
}
</style>
