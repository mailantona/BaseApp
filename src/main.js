import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'

import {store} from './store/store.js'
import {router} from './routes.js'

Vue.use(VueFire)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
