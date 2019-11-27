import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vueTap from 'v-tap'
import goods from './components/goods/goods'
import rating from './components/rating/rating'
import seller from './components/seller/seller'
import datas from './static/data.json'


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
  routes: [{
    path:'/goods',
    component:goods,
    props:{goods:datas.seller}
  },{
    path:'/ratings',
    component:rating,
    props:{rating:datas.rating}
  },{
    path:'/seller',
    component:seller,
    props:{seller:datas.seller}
  }]})

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
