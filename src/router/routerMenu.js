export const routerMenu = [
 {
  path: '/home',
  name: 'home',
  icon: 'HomeFilled',
  component: () => import('../views/home/home.vue'),
  meta: {
   title: '首页',
   closable: false,
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
     closable: true,
    },
   },
   {
    path: '/test2',
    name: 'test2',
    icon: 'QuartzWatch',
    component: () => import('../views/other/test2.vue'),
    meta: {
     title: 'test2',
     closable: true,
    },
   },
  ],
 },
 {
  path: '/form',
  name: 'form',
  icon: 'FolderAdd',
  meta: {
   title: '表单相关',
  },
  children: [
   {
    path: '/table',
    name: 'table',
    icon: 'Food',
    meta: {
     title: '常用表格',
     closable: true,
    },
    component: () => import('../views/form/commonTable.vue'),
   },
  ],
 },
]
