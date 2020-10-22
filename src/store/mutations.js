import {CHANGE_CITY} from './mutation-types'

export default {
  [CHANGE_CITY] (state, payload) {
    state.city = payload
    try {
      localStorage.city = payload
    } catch (e) {}
  }
}