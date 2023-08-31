import HomePageVue from "@/components/pages/HomePageView.vue"
import AddTaskView from "@/components/pages/AddTaskView.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes =[
    {
        path: '/',
        component:HomePageVue
    },
    {
        path:'/addTask',
        component:AddTaskView
    },
 
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router;