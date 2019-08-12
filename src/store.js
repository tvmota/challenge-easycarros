import Vue from 'vue';
import Vuex from 'vuex';
import vehicleService from './services/VehicleService';
import swalAlert from './utils/alert';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stsLoader: false,
    vehicles: [],
  },
  mutations: {
    SET_STS_LOADER(state, payload) {
      state.stsLoader = payload;
    },
    SET_VEHICLES(state, payload) {
      state.vehicles = payload;
    },
  },
  getters: {
    getStsLoader: state => state.stsLoader,
    getVehicles: state => state.vehicles,
  },
  actions: {
    updateStsLoader({ commit }, sts) {
      commit('SET_STS_LOADER', sts);
    },
    updateVehicles({ commit }) {
      commit('SET_STS_LOADER', true);

      vehicleService.list()
        .then((result) => {
          commit('SET_VEHICLES', result.data.data);
        })
        .catch(err => swalAlert.alertError(err.response.data.error.message, 'Erro'))
        .finally(() => {
          commit('SET_STS_LOADER', false);
        });
    },
  },
});
