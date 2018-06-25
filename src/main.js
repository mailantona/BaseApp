import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueResource from 'vue-resource'

import {store} from './store/store.js'
import {router} from './routes.js'

Vue.use(VueFire)
Vue.use(VueResource)
Vue.http.options.root = 'https://sp-atelier.firebaseio.com/'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
