import { createRouter, createWebHashHistory } from 'vue-router';
import MarketAnalysis from '../views/MarketAnalysis.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MarketAnalysis
  },
  {
    path: '/competitive',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CometitiveAnalysis.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
