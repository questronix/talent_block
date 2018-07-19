import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    profile: {},
    count: 0
  },
  getters: {
    getProfile: (state) => {
      return state.profile;
    },
    getUser: (state) => {
      return state.user;
    },
    getCount: (state) => {
      return state.count;
    }
  },
  mutations: {
    SET_USER: (state, user) => state.user = user,
    CLEAR_USER: (state) => state.user = {},
  },
  actions: {
    setUser: () => {
      commit('SET_USER');
    },
  },
  plugins: [createPersistedState()]
});