// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(Buefy)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
