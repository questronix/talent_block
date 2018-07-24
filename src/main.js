import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import BootstrapVue from 'bootstrap-vue';
import Toasted from 'vue-toasted';
import store from './store.js';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(Toasted, {
  duration: 5000,
  position: 'bottom-right',
  action: {
    text: 'CLOSE',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  },
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!window.isLogged) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
});

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