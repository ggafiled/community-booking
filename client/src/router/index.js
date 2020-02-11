import Vue from 'vue'
import Router from 'vue-router'
import AnnouncePage from '@/components/AnnouncePage'
import store from '@/store/index.js'
import LoginPage from '@/components/LoginPage'
import LogoutPage from '@/components/LogoutPage'
import DashboardPage from '@/components/DashboardPage'

Vue.use(Router)

let router = new Router({
  saveScrollPosition: true,
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
      component: DashboardPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutPage
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
