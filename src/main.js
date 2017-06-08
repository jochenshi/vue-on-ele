// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
  store
})
