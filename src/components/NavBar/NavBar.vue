<template>
  <div>
    <div class="nav-bar colored fixed">
      <div class="header">
        <div class="logo">
          <img src="/static/img/logo-2.png" height="30" width="30">
        </div>
        <div class="title">
          <a href="">Talent Block</a>
        </div>
      </div>
      <ul>
        <div class="rightnav">
          <li>
            <form action="" method="">
              <input class="form-control" type="text" name="search" placeholder="Search Courses">
            </form>
          </li>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'course' }">Courses</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
          <span v-if="!isAuthenticated">
            <li><router-link :to="{ name: 'login' }">Login</router-link></li>
            <li><router-link :to="{ name: 'signUp' }">Sign Up</router-link></li>
          </span>
          <span v-else>
            <li><a href="#">Logout</a></li>
          </span>
          <!-- <li><router-link :to="{ name: 'dashboard' }"><img src="../../assets/img/boy.svg" class="rounded-circle" height="30" width="30"><i class="fas fa-sort-down"></i></router-link></li> -->
        </div>
      </ul>
    </div>
    <!-- <div style="height: 80px; width: 100%;"></div> -->
  </div>
</template>

<script>

export default {
  name: 'nav',
  data() {
    return {
      isAuthenticated: false
    };
  }
}
</script>

