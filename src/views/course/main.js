import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
// import store from './store'
Vue.config.productionTip = false
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
