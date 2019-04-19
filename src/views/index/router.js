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
      redirect:'/index.html'
    },
    {
      path: '/index.html',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/course.html',
      beforeEnter() {
        window.location.href = '/course.html'
      }
    },
     {
       path: '/about.html',
       beforeEnter() {
         window.location.href = '/about.html'
       }
     },
    {
      path: '/video.html',
      beforeEnter () {
        window.location.href = '/video.html'
      }
    },
    {
      path: '/info.html',
      beforeEnter() {
        window.location.href = '/info.html'
      }
    },
    {
      path: '/contact.html',
      beforeEnter() {
        window.location.href = '/contact.html'
      }
    },
    {
      path:'/infoDetails.html',
      beforeEnter() {
        window.location.href = '/infoDetails.html'
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
