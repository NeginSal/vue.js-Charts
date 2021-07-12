import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/chart1',
    name: 'Chart1',
    component: () => import('../views/Chart1.vue')
  },
  {
    path: '/chart2',
    name: 'Chart2',
    component: () => import('../views/Chart2.vue')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
