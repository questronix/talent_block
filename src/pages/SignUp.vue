<template>
  <base-layout>
    <div slot="body">
      
      <div class="signuppage">
        <div class="signupcontainer">
          <div class="signupform">
            <div class="singupcontent">
              <span class="signup-span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Suspendisse id venenatis nibh, a porttitor libero.
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
  }
}
</script>

