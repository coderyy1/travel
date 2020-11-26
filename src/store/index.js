import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

const store = Vuex.createStore({
  state,
  mutations,
  actions,
  getters: {

  },
})

export default store