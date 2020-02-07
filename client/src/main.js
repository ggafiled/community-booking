// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
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
window.JQuery = require('jquery')

Vue.config.productionTip = false

Vue.use(FullCalendar)
Vue.use(BootstrapVue)
Vue.use(Buefy)
Vue.use(Vuetify)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (!authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
