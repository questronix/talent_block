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
              <b-alert variant="danger"
                dismissible
                :show="alert"
                @dismissed="alert=false">
                {{ alertMsg }}
              </b-alert>
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
                <b-button type="submit" variant="primary" :block="true" :disabled="isLoading">
                  <div v-show="isLoading" class="lds-hourglass"></div>
                  <div v-show="!isLoading">Sign Up</div>
                </b-button>
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
      isLoading: false,
      alert: false,
      alertMsg: 'There\'s a problem wiht your request. Please try again.',
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      this.alert = false;
      axios.post('/signup/student', this.form)
        .then((response) => {
          this.isLoading = false;
          window.location.href = '#/success';
        }).catch((err) => {
          if (err.response.data) {
            let errCode = err.response.data.details.code;
            if (errCode === 'ER_DUP_ENTRY') {
              this.alertMsg = "Username or Email is already taken.";
            }
          }
          this.isLoading = false;
          this.alert = true;
        })
        .then(() => {
          this.isLoading = false;
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

