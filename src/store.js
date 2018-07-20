import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    count: 0,
    redirectTo: '/',
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getCount: (state) => {
      return state.count;
    },
    getRedirectLink: (state) => {
      return state.redirectTo;
    }
  },
  mutations: {
    SET_USER: (state, user) => state.user = user,
    CLEAR_USER: (state) => state.user = {},
    SET_REDIRECT_URL: (state, url) => state.redirectTo = url,
    CLEAR_REDIRECT_URL: (state) => state.redirectTo = '',
  },
  actions: {
    setUser: (user) => {
      commit('SET_USER', user);
    },
  },
  plugins: [createPersistedState()]
});