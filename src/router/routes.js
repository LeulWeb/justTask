import {createWebHistory, createRouter} from 'vue-router'
import TodoView from '../view/TodoView.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TodoView
        },
        {
            path: '/about',
            name: 'about',
            component: ()=>import ('../view/AboutView.vue') // Lazy load

        },
    ]
})

export default router