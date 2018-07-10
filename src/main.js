import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});