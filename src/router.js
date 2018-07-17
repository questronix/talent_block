import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Course from './pages/Course.vue';
import Courses from './pages/Courses.vue';
import About from './pages/About.vue';
import Login from './pages/Login.vue';
import SignUp from './pages/SignUp.vue';
import SuccessSignUp from './pages/SuccessSignUp.vue';
import Dashboard from './pages/account/Dashboard.vue';
import TransactionLog from './pages/account/TransactionLog.vue';
import DashboardSchool from './pages/school/Dashboard.vue';
import Error404 from './pages/error/404.vue';
import FacultyDashboard from './pages/faculty/FacultyDashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'courses',
    path: '/courses',
    component: Courses
  },
  {
    name: 'course',
    path: '/courses/course',
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
    path: '/signup',
    component: SignUp
  },
  {
    name: 'success',
    path: '/success',
    component: SuccessSignUp
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'settings',
    path: '/transactionlog',
    component: TransactionLog
  },
  {
    name: 'dashboardSchool',
    path: '/schooldashboard',
    component: DashboardSchool
  },
  {
    name: 'faculty_dashboard',
    path: '/faculty_dashboard',
    component: FacultyDashboard
  }, 
  {
    name: 'dashboardSchool',
    path: '/schooldashboard',
    component: DashboardSchool
  },
  {
    name: 'faculty_dashboard',
    path: '/faculty_dashboard',
    component: FacultyDashboard
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