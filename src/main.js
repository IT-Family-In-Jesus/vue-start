import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueRouter from 'vue-router'
// import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
