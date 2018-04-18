import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
