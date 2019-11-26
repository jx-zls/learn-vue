import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vueTap from 'v-tap'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vueTap)


const store = new Vuex.Store({
  state:{
    count:0
  },
  addCartEl: {},
  mutations:{
    increment(state){
      state.count++
    }
  }
})

const router = new VueRouter({
  routes: []})

new Vue({
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
