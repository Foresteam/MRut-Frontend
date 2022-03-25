import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/files',
    name: 'Files',
    component: () => import('../views/FilesView.vue')
  },
  {
    path: '/screenview',
    name: 'Screen view',
    component: () => import('../views/ScreenView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
