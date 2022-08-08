import { createApp } from 'vue'
import eruda from 'eruda'

import './style.css'
import App from './App.vue'

if (
	!!document &&
	window.innerWidth <= 860 &&
  import.meta.env.DEV
) {
  eruda.init()
}

createApp(App).mount('#app')
