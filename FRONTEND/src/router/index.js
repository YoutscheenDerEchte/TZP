// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ÜbersichtView',
    component: () => import('@/views/ÜbersichtView.vue'),
    
  },
  {
    path: '/Prüfung',
    name: 'PrüfungView',
    component: () => import('@/views/PrüfungView.vue'),
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
