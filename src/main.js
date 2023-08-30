import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index';
import './index.css'
import router from './router';


const app =  createApp(App);
// const router = createRouter({
//     history:createWebHistory(),
//     routes:routes
// });

app.use(store)
app.use(router)
app.mount('#app')
