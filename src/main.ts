import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

if (import.meta.env.VITE_SENTRY_ENABLED) {
  console.log('sentry is working!!');
}

app.mount('#app')
