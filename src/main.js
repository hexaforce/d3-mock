import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/vuetify'

import App from './App.vue'
import StackedAreaChart from './components/StackedAreaChart'
Vue.component('vn-stacked-area', StackedAreaChart)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
