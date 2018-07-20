<template>
  <div>
    <div v-if="type === 'homepage'">
      <div slot="header">
        <div class="heading">
          <div class="nav-bar">
            <div class="header">
              <div class="logo">
                <img src="/static/img/logo-2.png" height="30" width="30">
              </div>
              <div class="title">
                <a href="" class="brand">Talent Block</a>
              </div>
            </div>
            <ul>
              <div class="rightnav">
                <li>
                  <b-form @submit.prevent="onSearch">
                    <input class="form-control" type="text" name="search" placeholder="Search Courses" v-model="search">
                  </b-form>
                </li>
                <Links />
              </div>
            </ul>
          </div>
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
          <div class="nav-bar">
            <div class="header">
              <div class="logo">
                <img src="/static/img/logo-2.png" height="30" width="30">
              </div>
              <div class="title">
                <a href="" class="brand">Talent Block</a>
              </div>
            </div>
            <ul>
              <div class="rightnav">
                <li>
                  <form @submit.prevent="onSearch">
                    <input class="form-control" type="text" name="search" placeholder="Search Courses" v-model="search">
                  </form>
                </li>
                <Links />
              </div>
            </ul>
          </div>
          <center>
            <div class="breadcrum">
              <h1>{{ heading }}</h1>
            </div>
          </center>
          </div>
        </div>
    </div>

    <div v-else>
      <div class="nav-bar colored fixed">
        <div class="header">
          <div class="logo">
            <img src="/static/img/logo-2.png" height="30" width="30">
          </div>
          <div class="title">
            <a href="" class="brand">Talent Block</a>
          </div>
        </div>
        <ul>
          <div class="rightnav">
            <li>
              <form @submit.prevent="onSearch">
                <input class="form-control" type="text" name="search" placeholder="Search Courses" v-model="search">
              </form>
            </li>
            <Links />
          </div>
        </ul>
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


