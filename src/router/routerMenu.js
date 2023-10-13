export const routerMenu = [
 {
  path: '/home',
  name: 'home',
  icon: 'HomeFilled',
  component: () => import('../views/home/home.vue'),
  meta: {
   title: '首页',
  },
 },
 {
  path: '/other',
  name: 'other',
  icon: 'ToiletPaper',
  meta: {
   title: '其他',
  },
  children: [
   {
    path: '/test1',
    name: 'test1',
    icon: 'Watch',
    component: () => import('../views/other/test1.vue'),
    meta: {
     title: 'test1',
    },
   },
   {
    path: '/test2',
    name: 'test2',
    icon: 'QuartzWatch',
    component: () => import('../views/other/test2.vue'),
    meta: {
     title: 'test2',
    },
   },
  ],
 },
]
