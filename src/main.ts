import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

console.log(import.meta.env);

app.mount('#app')
