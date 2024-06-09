import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, LatestTopics } from '@/pages'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
          },
          {
            path: '/latest',
            name: 'latest',
            component: LatestTopics
          }
    ]});

export default router