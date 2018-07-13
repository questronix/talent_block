<template>
  <base-layout>
    <div slot="body">
      <b-row>
        <div class="login">
          <b-col cols="4" offset-md="4">
          <div class="login-card">
            <h4 class="text-center">Login</h4>
            <b-form @submit.prevent="onSubmit">
              <b-form-group>
                <b-form-input id="username" type="text" v-model="form.username" placeholder="Username or Email"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input id="password" type="password" v-model="form.password" placeholder="Password"></b-form-input>
              </b-form-group>
              <b-form-group>
                <a href="">Forgot Password?</a>
              </b-form-group>
              <b-form-group>
                <b-button type="submit" variant="primary" :block="block">Login</b-button>
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
        </div>
      </b-row>
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
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    onSubmit() {
      axios.post('/login', this.form)
        .then((response) => {
          let user = response.data.user;
          alert(`Welcome back ${user.username}!`);
        }).catch((err) => {
          alert('Invalid username or password.');
        });
    }
  }
}
</script>

<style scoped>
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
</style>

