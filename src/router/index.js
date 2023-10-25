import { createRouter, createWebHistory } from 'vue-router'
import { routerMenu } from './routerMenu'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:'/login',
        name:'login',
        component: ()=> import('../views/login/login.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'vue3-admin',
      },
      redirect: '/login',
      component: () => import('../layout/MainLayout.vue'),
      children: [...routerMenu],
    },
  ],
})

export default router
