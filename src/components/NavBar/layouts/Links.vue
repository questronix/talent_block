<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-form @submit.prevent="onSearch">
      <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
    </b-nav-form>
      <b-nav-item href="#"><router-link :to="{ name: 'home' }">Home</router-link></b-nav-item>
      <b-nav-item :to="{ name: 'courses' }"><router-link :to="{ name: 'courses' }">Courses</router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{ name: 'about' }">About</router-link></b-nav-item>
      <span v-if="!isLoggedIn">
      <b-nav-item href="#"><router-link :to="{ name: 'login' }">Login</router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{ name: 'signUp' }">Sign Up</router-link></b-nav-item>
      </span>
      <span v-else>
      <b-nav-item href="#"><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></b-nav-item>
      <b-nav-item href="#"><a href="#" @click="logout">Logout</a></b-nav-item>
      </span>
  </b-navbar-nav>
</template>

<script>
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
          console.log('Logout error ' ,err);
        });
    }
  }
}
</script>

<style scoped>
span {
  display: flex;
}

a{
  color: #fff;
}

a:hover {
  color: #9ecb4b;
  border-bottom: 3px solid;
}

input {
    border-radius: 20px;
    width: 250px;
    z-index: 999;
}

@media all and (min-width: 480px) and (max-width: 768px) {
  span {
    display: block;
  }

  input {
    width: 100% !important;
  }
}

@media all and (max-width: 480px) {
  span {
    display: block;
  }

  input {
    width: 100% !important;
  }
}
</style>
