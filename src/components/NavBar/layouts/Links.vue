<template>
  <div class="rightnav">
    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li><router-link :to="{ name: 'courses' }">Courses</router-link></li>
    <li><router-link :to="{ name: 'about' }">About</router-link></li>
    <li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
    <span v-if="!isAuthenticated">
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li><router-link :to="{ name: 'signUp' }">Sign Up</router-link></li>
      <li>{{ type }}</li>
    </span>
    <span v-else>
      <li><a href="#">Logout</a></li>
    </span>
  </div>
  <!-- <li><router-link :to="{ name: 'dashboard' }"><img src="../../assets/img/boy.svg" class="rounded-circle" height="30" width="30"><i class="fas fa-sort-down"></i></router-link></li> -->
</template>
