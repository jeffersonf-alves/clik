import { createRouter, createWebHistory} from 'vue-router'
import Main from './Main/Main.vue'


const routes = [
    {
        path:'/',
        name: 'main',
        component: Main
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;