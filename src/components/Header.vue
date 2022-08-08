<template>
  <header>
    <h1 class="logo" :class="isDarkThemeEnabled ? 'dark' : ''">Rocket<span>Coffee</span></h1>
    <p class="text" :class="isDarkThemeEnabled ? 'dark' : ''">Open everyday, 8am ~ 9pm</p>
  </header>
</template>

<script setup lang="ts">
import { isDarkThemeEnabled } from '../composables/theme.ts'
</script>

<style scoped lang="css">
header {
  width: 100vw;
  padding: 2.75rem 0.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  color: #1c1c1c;
  text-transform: uppercase;
}

.logo > span {
  color: var(--brown);
}

.logo.dark {
  color: var(--white);
}

.logo.dark > span {
   color: var(--salmon);
}

.text {
  color: var(--gray);
}

.text.dark {
  color: var(--beige);
}
</style>
