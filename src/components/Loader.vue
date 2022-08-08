<template>
  <div class="wrapper">
	  <div class="circle" :class="isDarkThemeEnabled ? 'dark' : ''" />
	</div>
</template>

<script setup lang="ts">
import { isDarkThemeEnabled } from '../composables/theme.ts'
</script>

<style scoped>
.wrapper {
  height: 4rem;
	width: 4rem;
	margin: 30vh auto;
}

.circle {
  height: 4rem;
	width: 4rem;
	border-radius: 6rem;
	background-image: linear-gradient(90deg,var(--brown) 35%,transparent);
	position: relative;

	animation: SPIN 2s infinite cubic-bezier(0.7,0.7,0.7,0.7);
}

.circle::before {
  content: "";
  background-color: var(--beige);

	height: 75%;
	width: 75%;
	border-radius: 100px;

  position: absolute;
	top: 50%;
	left: 50%;

  transform: translateX(-50%) translateY(-50%);
}

.circle.dark {
  background-image: linear-gradient(90deg,var(--salmon) 35%,transparent);
}

.circle.dark::before {
  background-color: var(--brown);
}

@keyframes SPIN {
  0% {
	  transform: rotate(0deg);
	}
	25% {
	  transform: rotate(90deg);
	}
	50% {
	  transform: rotate(180deg);
	}
	75% {
	  transform: rotate(270deg);
	}
	100% {
	  transform: rotate(360deg);
	}
}
</style>
