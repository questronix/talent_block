import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import BootstrapVue from 'bootstrap-vue';
import store from './store.js';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  data() {
    return {
      isLogged: false,
    };
  },
  router,
  store,
  mounted() {
    if (window.isLogged) {
      this.isLogged = window.isLogged;
    }
  },
  render: h => h(App)
});