import Vue from 'vue'
import Router from 'vue-router'
import AnnouncePage from '@/components/AnnouncePage'
import store from '@/store/index.js'
import LoginPage from '@/components/LoginPage'
import DashboardPage from '@/components/DashboardPage'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/login'
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
      path: '/announce',
      name: 'Announce',
      component: AnnouncePage
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      return next('/login')
    }
    next()
  } else {
    next()
  }
})

export default router
