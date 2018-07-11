import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Course from './pages/Course.vue';
import About from './pages/About.vue';
import Login from './pages/Login.vue';
import SignUp from './pages/SignUp.vue';
import Dashboard from './pages/account/Dashboard.vue';
import Error404 from './pages/error/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'course',
    path: '/courses',
    component: Course
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'signUp',
    path: '/sign-up',
    component: SignUp
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  }, 
  {
    path: "/404",
    component: Error404
  },
  {
    path: "*",
    redirect: '/404'
  },
];

export default new VueRouter({
  routes
});