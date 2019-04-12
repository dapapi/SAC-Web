import Vue from 'vue'
import Router from 'vue-router'
// import Index from './Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/video'
    },
    {
      path: '/video',
      name: 'video',
      // component: Index
      component: () => import('./views/Index.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      // component: Index
      component: () => import('./views/swiper.vue')
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
