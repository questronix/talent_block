<template>
  <base-layout>
    <div slot="body">  
      <b-container fluid class="login">
        <b-row align-v="center" class="login-row">
          <b-col></b-col>
          <b-col cols="12" md="5" align-self="center">
            <div align-v="center" class="login-card">
              <h4 class="text-center">Login</h4>
              <b-alert variant="danger"
                dismissible
                :show="alert"
                @dismissed="alert=false">
                Invalid username or password.
              </b-alert>
              <b-form @submit.prevent="onSubmit">
                <b-form-group>
                  <b-form-input id="username" type="text" v-model="form.username" placeholder="Username or Email" :disabled="isLoading" required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input id="password" type="password" v-model="form.password" placeholder="Password" :disabled="isLoading" required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <a href="">Forgot Password?</a>
                </b-form-group>
                <b-form-group>
                  <b-button type="submit" variant="primary" :block="block" :disabled="isLoading">
                    <div v-show="isLoading" class="lds-hourglass"></div>
                    <div v-show="!isLoading">Login</div>
                  </b-button>
                </b-form-group>
                <b-form-group>
                  <b-form-checkbox-group>
                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="form.keepSignIn">
                      Keep me sign in
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <hr>
                <!-- <p class="text-center">or</p> -->
                <b-form-group>
                  <b-button variant="primary" :block="block">Login with Facebook</b-button>
                </b-form-group>
                <b-form-group>
                  <b-button id="btnGoogle" :block="block">Login with Google</b-button>
                </b-form-group>
              </b-form>
            </div>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </base-layout>
</template>

<script>  
// FIXME: Please fix keepSignIn bug.
import BaseLayout from '../layouts/BaseLayout.vue';
import axios from 'axios';

export default {
  name: 'loginPage',
  data() {
    return {
      form: {
        username: '',
        password: '',
        keepSignIn: false,
      },
      block: true,
      isLoading: false,
      alert: false,
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      axios.post('/login', this.form)
        .then((response) => {
          this.isLoading = false;
          let user = response.data;
          this.$store.commit('SET_USER', user);
          this.$store.commit('SET_REDIRECT_URL', this.$route.query.redirect);
          window.location.href = '/';
        })
        .catch((err) => {
          this.isLoading = false;
          this.alert = true;
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {
    isLoggedIn() {
      return this.$root.isLogged;
    },
    redirectUrl() {
      return this.$store.getters.getRedirectUrl;
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.isLoggedIn) {
        window.location.href = `#${from.path}`;
      }
    });
  },
}
</script>


<style scoped>
body {
  overflow: hidden;
}

.login-card {
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,.125);
  margin: 40px;
}

#btnGoogle {
  color: black;
  background-color: #dcdcdc;
  border-style: none;
}

#username, #password {
  border-radius: 20px;
}

.login {
  height: -webkit-calc(100vh - 65px);
  height:    -moz-calc(100vh - 65px);
  height:         calc(100vh - 65px);
}

.login-row {
  height: -webkit-calc(100vh - 65px);
  height:    -moz-calc(100vh - 65px);
  height:         calc(100vh - 65px);
}

@media all and (min-width: 480px) and (max-width: 768px) {
  .login {
    height: 100vh;
  }

  .login-row {
    height: 100vh;
  }
}

@media all and (max-width: 480px) {
  .login-row {
    height: 100vh;
  }

  .login {
    height: 100vh;
  }
}
</style>

