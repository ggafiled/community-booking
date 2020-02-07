import Vue from 'vue'
import Router from 'vue-router'
import AnnouncePage from '@/components/AnnouncePage'
import LoginPage from '@/components/LoginPage'
import DashboardPage from '@/components/DashboardPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/dash',
      name: 'Dash',
      component: DashboardPage
    },
    { path: '*', redirect: '/' }
  ]
})
