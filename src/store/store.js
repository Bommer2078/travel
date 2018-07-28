import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    currCity:'北京'
  },
  getters:{},
  mutations:{
    changeCurrCity(state,payload){
      state.currCity = payload;
    }
  },
  actions:{}
})
