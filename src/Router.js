import { createRouter, createWebHistory} from 'vue-router'
import Main from './Main/Main.vue'
import MainVideos from './Main/MainVideos.vue'

const routes = [
    {
        path:'/',
        name: 'main',
        component: Main,
        children: [
            {
                path:'pagination/:id',
                name: 'pagination',
                component: Main
            },
        ]
    },
    {
        path:'/videos',
        name: 'videos',
        component: MainVideos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;