import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import LatestTopics from '@/pages/LatestTopics.vue'

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