<template>
  <base-layout>
    <div slot="body">
      
      <div class="signuppage">
        <div class="signupcontainer">
          <div class="signupform">
            <div class="singupcontent">
              <h5><strong>CHOOSE. PAY. LEARN.</strong></h5>
              <span class="signup-span">
                Create a <strong>Talent Block</strong> account to enroll to courses in 
                just a few clicks and pay without waiting in line.
                Already have a Talent Block account?<a class="linkg" href=#login>Login here.</a>
              </span>
              <br>
              <img src="/static/img/signupimg.svg" height="200px">
            </div>
            <div class="formsignup">
            <h4>Sign Up</h4>
              <b-form @submit.prevent="onSubmit">
                <b-form-group>
                  <b-form-input 
                    id="username" 
                    type="text" 
                    v-model="form.username" 
                    placeholder="Username"
                    required>
                  </b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input 
                    id="email" 
                    type="email" 
                    v-model="form.email" 
                    placeholder="Email"
                    required>
                  </b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input 
                    id="password" 
                    type="password" 
                    v-model="form.password" 
                    placeholder="Password"
                    required>
                  </b-form-input>
                </b-form-group>
                <b-form-group>
                  <p>Captcha here</p>
                </b-form-group>
                <b-form-group>
                  <b-button 
                    type="submit" 
                    variant="primary" 
                    :block="true">Sign Up</b-button>
                </b-form-group>
              </b-form>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      </div>

    </div>
  </base-layout>
</template>

<script>  
import BaseLayout from '../layouts/BaseLayout.vue';
import axios from 'axios';

export default {
  name: 'signUpPage',
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: '',
      },
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    onSubmit() {
      axios.post('/signup', this.form)
        .then((response) => {
          alert('Account successfully created. We sent you a verification in your email.')
        }).catch((err) => {
          alert('Failed registration');
        });
    }
  },
  computed: {
    isLoggedIn() {
      return this.$root.isLogged;
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.isLoggedIn) {
        window.location.href = `#${from.path}`;
      }
    });
  }
}
</script>

