import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pag-prueba',
      name: 'prueba',
      component: () => import('../views/Prueba.vue')
    },
    {
      path: '/pag-prueba-2',
      name: 'tset',
      component: () => import('../views/Test.vue')
    }
  ]
})

export default router
