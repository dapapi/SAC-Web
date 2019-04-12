import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/info'
    },
    {
      path: '/info',
      name: 'info',
      // component: Index
      component: () => import('./views/Index.vue')
    },
    // {
    //   path: '/',
    //   beforeEnter () {
    //     window.location.href = '/index.html'
    //   }
    // },
    {
      path: '/',
      name: 'index',
      // component: Index
      component: () => import('./views/Index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Index
      // component: () => import('./Index.vue')
    },
    {
      path: '/test',
      beforeEnter () {
        window.location.href = '/test.html'
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
