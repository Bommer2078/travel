import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
  if(localStorage.currCity){
    defaultCity = localStorage.currCity
  }
} catch (e) {}

export const store = new Vuex.Store({
  state:{
    currCity:defaultCity,
    letter:''
  },
  getters:{},
  mutations:{
    changeCurrCity(state,payload){
      state.currCity = payload
      try {
        localStorage.currCity = payload
      } catch (e) {}
    },
    letterClick(state,payload){
      state.letter = payload
    },
    letterMove(state,payload){
      state.letter = payload
    }
  },
  actions:{}
})
