import Vue from 'vue'
import Router from 'vue-router'
import AnnouncePage from '@/components/AnnouncePage'
import store from '@/store/index.js'
import LoginPage from '@/components/LoginPage'
import HomePage from '@/components/HomePage'
import CalendarPage from '@/components/CalendarPage'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: CalendarPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/announce',
      name: 'Announce',
      component: AnnouncePage,
      meta: {
        requiresAuth: true
      }
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('routeChange',{ path: to.path })
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
