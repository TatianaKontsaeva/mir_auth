import { createStore } from 'vuex'

export const state = {
  isAuth: false,
}

const store = createStore({
  state
})
export default store