// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from '@/store/index'
import axios from 'axios'
import Vuetify, {
  VCard,
  VImg,
  VCardTitle,
  VBtn,
  VCardActions,
  VCardText,
  VProgressCircular,
  VSpacer,
  VDialog,
  VDivider,
  VAlert,
  VApp,
} from 'vuetify'

import FullCalendar from 'vue-full-calendar'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'fullcalendar/dist/fullcalendar.css'
import 'vue2-datepicker/index.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';


window.$ = require('jquery')
window.axios = axios
window.JQuery = require('jquery')

Vue.config.productionTip = false

Vue.use(FullCalendar)
Vue.use(BootstrapVue)
Vue.use(Buefy)
Vue.use(Vuetify)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
