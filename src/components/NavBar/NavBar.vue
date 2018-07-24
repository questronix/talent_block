<template>
  <div>
    <div v-if="type === 'homepage'">
      <div slot="header">
        <div class="heading">
          <b-navbar class="navbar-transparent" toggleable="md" type="light" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <div class="title">
                <img src="/static/img/logo-2.png" height="30" width="30">
                <router-link :to="{ name: 'home' }">Talent Block</router-link>
              </div>
            <b-collapse is-nav id="nav_collapse">
              <!-- Right aligned nav items -->
              <Links/>
            </b-collapse>
          </b-navbar>
            <div class="heading-centered">
              <div class="heading-caption">
                <h2>{{ heading }}</h2>
                <b-button href="#/signup" v-if="!isLoggedIn" variant="primary">{{ linkCaption }}</b-button>
                <b-button href="#/courses" v-if="isLoggedIn" variant="primary">Browse courses</b-button>
              </div>
            </div>
        </div>
      </div>
      <div slot="space"></div>
    </div>

    <div v-else-if="type === 'dashboard'">
      	<div class="page-title" :style="{ backgroundImage: dashImg }">
          <div class="title-centered">
            <b-navbar class="navbar-transparent" toggleable="md" type="light" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <div class="title">
                <img src="/static/img/logo-2.png" height="30" width="30">
                <router-link :to="{ name: 'home' }">Talent Block</router-link>
              </div>
            <b-collapse is-nav id="nav_collapse">
              <!-- Right aligned nav items -->
              <Links/>
            </b-collapse>
          </b-navbar>
          <center>
            <div class="breadcrum">
              <h1>{{ heading }}</h1>
            </div>
          </center>
          </div>
        </div>
    </div>

    <div v-else>
      <div style="background: #4a74cc;">
          <b-navbar class="navbar-transparent" toggleable="md" type="light" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <div class="title">
                <img src="/static/img/logo-2.png" height="30" width="30">
                <router-link :to="{ name: 'home' }">Talent Block</router-link>
              </div>
            <b-collapse is-nav id="nav_collapse">
              <!-- Right aligned nav items -->
              <Links/>
            </b-collapse>
          </b-navbar>
      </div>
    </div>

  </div>
</template>

<script>
import Links from './layouts/Links.vue';

export default {
  name: 'NavBar',
  props: ['type', 'heading', 'linkCaption', 'height', 'img'],
  data() {
    return {
      navHeight: this.height,
      dashImg: this.img,
      search: '',
    };
  },
  components: {
    Links,
  },
  methods: {
    onSearch() {
      alert(this.search);
    }
  },
  computed: {
    isLoggedIn() {
      return this.$root.isLogged;
    }
  }
}
</script>

<style scoped>
.bg-info {
  background-color: transparent !important;
  width: 100%;
  z-index: 999;
  height: 65px;
}

.bg-dash {
  background-color: #4a74cc;
}

@media all and (min-width: 480px) and (max-width: 768px) {
  .bg-info {
    background-color: rgba(78, 120, 198, 0.85)!important;
    position: fixed;
  }

 .bg-dash {
    background-color: rgba(78, 120, 198, 0.85)!important;
    position: fixed;
  }
}

@media all and (max-width: 480px) {
  .bg-info {
    background-color: rgba(78, 120, 198, 0.85)!important;
    position: fixed;
  }

  .bg-dash {
    background-color: rgba(78, 120, 198, 0.85)!important;
    position: fixed;
  }
}

.bg-dash a{
  color: #fff;
}

.bg-info a {
  color: #fff;
}

.bg-dash input {
    border-radius: 20px;
    width: 250px;
    z-index: 999;
}
</style>
