import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  status: '',
  auth: !!localStorage.getItem('auth') || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  routePath: ""
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state,isAuthenticated,user) {
    state.status = 'success'
    state.user = user
    state.auth = isAuthenticated
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout_success(state) {
    state.status = 'success'
    state.auth = false
    state.user = null
  },
  logout_error(state) {
    state.status = 'error'
  },
  route_change(state,path) {
    state.routePath = path
  }
}

const actions = {
  login({
    commit
  }, user) {
    console.log(user)
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post('http://localhost:8081/login', {
          u_email: user.u_email,
          u_pwd: user.u_pwd
        })
        .then(res => {
          console.log("auth_request")
          console.log(res.data.user)
          const user = JSON.stringify(res.data.user)
          const isAuthenticated = res.data.isAuthenticated
          localStorage.setItem('auth', isAuthenticated)
          localStorage.setItem('user', user)
          // // Add the following line:
          // axios.defaults.headers.common['Authorization'] = token
          commit('auth_success',isAuthenticated,user)
          resolve(res)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('auth')
          localStorage.removeItem('user')
          reject(err)
        })
    })
  },
  logout({
    commit
  }) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post('http://localhost:8081/logout')
        .then(res => {
          localStorage.removeItem('auth')
          localStorage.removeItem('user')
          commit('logout_success')
          resolve(res)
        })
        .catch(err => {
          commit('logout_error')
          localStorage.removeItem('auth')
          localStorage.removeItem('user')
          reject(err)
        })
    })
  },
  routeChange({commit},path){
    return new Promise((resolve, reject)=>{
      commit('route_change',path.path)
      resolve(path)
    })
  }
}

const getters = {
  isLoggedIn: state => !!state.auth,
  authStatus: state => state.status,
  userInformation: state => state.user,
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
