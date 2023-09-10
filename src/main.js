import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index';
import './index.css'
import router from './router';
import { OhVueIcon } from "oh-vue-icons";

const app =  createApp(App);
// const router = createRouter({
//     history:createWebHistory(),
//     routes:routes
// });

app.use(store)
app.component("v-icon", OhVueIcon);
app.use(router)
app.mount('#app')
