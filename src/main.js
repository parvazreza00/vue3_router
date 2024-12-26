import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import 'bootstrap';  
import router from './data/router';

createApp(App).use(router).mount('#app')
