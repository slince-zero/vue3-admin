import { createRouter, createWebHistory } from 'vue-router'
import {routerMenu} from './routerMenu'

const router = createRouter({
 history: createWebHistory(),
 routes: [
  {
   path: '/',
   name: 'home',
   meta: {
    title: 'vue3-admin',
   },
   redirect: '/home',
   component: () => import('../layout/MainLayout.vue'),
   children: [...routerMenu],
  },
 ],
})

export default router
