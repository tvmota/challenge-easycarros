import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stsLoader: false,
  },
  mutations: {
    SET_STS_LOADER(state, payload) {
      state.stsLoader = payload;
    },
  },
  getters: {
    getStsLoader: state => state.stsLoader,
  },
  actions: {
    updateStsLoader({ commit }, sts) {
      commit('SET_STS_LOADER', sts);
    },
  },
});
