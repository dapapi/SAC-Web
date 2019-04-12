import Vue from 'vue'
import Router from 'vue-router'
// import Index from './views/Index.vue'
console.log(222)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/course',
      name: 'course',
      // component: Index
      component: () => import('./views/Index.vue')
    },
    {
      path: '/course.html',
      name: 'course',
      // component: Index
      component: () => import('./views/Index.vue')
    },
    
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect: '/course'
    // },
    // {
    //   path: '/course',
    //   name: 'course',
    //   component: () => import('./views/Index.vue')
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Index
    //   // component: () => import('./Index.vue')
    // },
    // {
    //   path: '/test',
    //   beforeEnter () {
    //     window.location.href = '/test.html'
    //   }
    // }
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
