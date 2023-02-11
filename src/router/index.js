import { createRouter, createWebHistory } from 'vue-router'
import Task1 from '../components/Task1.vue'
import Task2 from '../components/Task2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: '1',
      component: Task1
    },
    {
      path: '/2',
      name: '2',
      component: Task2
    },
    {
      path: '/3',
      name: '3',
      component: () => import('../components/Task3.vue')
    },
    {
      path: '/4',
      name: '4',
      component: () => import('../components/Task4.vue')
    },
    {
      path: '/5',
      name: '5',
      component: () => import('../components/Task5.vue')
    },
    {
      path: '/5',
      name: '5',
      component: () => import('../components/Task5.vue')
    },
    {
      path: '/6',
      name: '6',
      component: () => import('../components/Task6.vue')
    },
    {
      path: '/7',
      name: '7',
      component: () => import('../components/Task7.vue')
    },
    {
      path: '/8',
      name: '8',
      component: () => import('../components/Task8.vue')
    },
    {
      path: '/9',
      name: '9',
      component: () => import('../components/Task9.vue')
    },

  ]
})

export default router
