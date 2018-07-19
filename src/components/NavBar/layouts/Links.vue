<template>
  <div class="rightnav">
    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li><router-link :to="{ name: 'courses' }">Courses</router-link></li>
    <li><router-link :to="{ name: 'about' }">About</router-link></li>
    <span v-if="!isLoggedIn">
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li><router-link :to="{ name: 'signUp' }">Sign Up</router-link></li>
    </span>
    <span v-else>
      <li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
      <li><a href="#" @click="logout">Logout</a></li>
    </span>
  </div>
</template>

<script>
// NOTE: Hindi nasasama sa pag build to (don't know why) pero pag gumawa ka ng changes make sure to manually rebuild.
import axios from 'axios';

export default {
  computed: {
    isLoggedIn() {
      return this.$root.isLogged;
    }
  },
  methods: {
    logout() {
      axios.post('/logout')
        .then((response) => {
          this.$store.commit('CLEAR_USER');
          window.location.href = response.data.redirectUrl;
        }).catch((err) => {
          alert('failed to logout');
        });
    }
  }
}
</script>

