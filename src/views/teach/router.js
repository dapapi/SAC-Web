import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/teach.html',
      name: 'teach',
      // component: Index
      component: () => import('./views/Index.vue')
    }
  ]
})
