<template>
  <div>
    <div v-if="type === 'homepage'">
      <div slot="header">
        <div class="heading" :style="{ height: navHeight + 'vh' }">
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
                  <form action="" method="">
                    <input class="form-control" type="text" name="search" placeholder="Search Courses">
                  </form>
                </li>
                <Links />
              </div>
            </ul>
          </div>
            <div class="heading-centered">
              <div class="heading-caption">
                <h2>{{ heading }}</h2>
                <button class="btn btn-primary">{{ linkCaption }}</button>
              </div>
            </div>
        </div>
      </div>
      <div slot="space"></div>
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
              <form action="" method="">
                <input class="form-control" type="text" name="search" placeholder="Search Courses">
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
  props: ['type', 'heading', 'linkCaption', 'height'],
  data() {
    return {
      isAuthenticated: false,
      navHeight: this.height,
    };
  },
  components: {
    Links,
  }
}
</script>

