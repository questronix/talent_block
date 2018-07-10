<template>
  <base-layout>
    <div slot="body">
      <b-row>
        <div class="login">
          <b-col cols="4" offset-md="4">
          <div class="login-card">
            <h4 class="text-center">Login</h4>
            <b-form @submit.stop="onSubmit">
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
                <b-button variant="primary" :block="block">Login</b-button>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group>
                  <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
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
      
      <!-- <div class="login">
        <div class="col-md-4 offset-md-4 mt-5">
          <div class="card">
            <h4 class="title">Login</h4>
            <input class="form-control" type="text" name="username" placeholder="Username or Email">
            <br>
            <input class="form-control" type="password" name="password" placeholder="Password">
            <br>
            <a href="">Forgot Password?</a>
            <br>
            <button class="btn btn-primary loginbtn">Login</button>
            <br>
            <div style="display: inline-block;">
            <input type="checkbox" name=""> Keep me sign in
            </div>
            <hr>
            <button class="btn btn-primary fbbtn"><span class="iconwidth"><i class="fab fa-facebook-f"></i></span> Login with Facebook</button>
            <br>
            <button class="btn googlebtn"><span class="iconwidth"><i class="fab fa-google"></i></span>Login with Google</button>
          </div>
        </div>
      </div> -->
    </div>
  </base-layout>
</template>

<script>  
import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: 'loginPage',
  data() {
    return {
      form: {
        username: '',
        password: '',
        keepSignIn: true,
      },
      block: true,
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form));
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

