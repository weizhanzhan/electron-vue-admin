import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  getters,
  plugins: [
   // createPersistedState(), 刷新后值还存在
    //createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
