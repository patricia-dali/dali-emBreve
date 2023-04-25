import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import(/* webpackChunkName: "produtos" */ '../views/Produtos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router