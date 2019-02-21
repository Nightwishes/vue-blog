import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/state'
import getters from './getters/getter'
import mutations from './mutations/mutations'
import createLogger from 'vuex/dist/logger'
const isDev = process.env.NODE_ENV === 'development'
Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    getters,
    mutations,
    plugins: [createLogger()]
  })
  return store
}