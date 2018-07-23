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
                Already have a Talent Block account?<a class="linking" href=#login>Login here.</a>
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
                    id="ch-reg-password" 
                    type="password" 
                    v-model="form.password" 
                    placeholder="Password"
                    required>
                  </b-form-input>
                </b-form-group>

                <b-container>
                  
                  <div id="ch-pass-str-msg"/>
                  <div id="ch-pass-str"/>
                 </b-container>
                <b-container id="ch-pass-str-miss-msg"/>
               

                <b-form-group>
                  <b-form-input 
                    id="ch-conpassword" 
                    type="password" 
                    v-model="conpassword" 
                    placeholder="Confirm Password"
                    required>
                  </b-form-input>
                </b-form-group>

                <b-container>
                  <div id="ch-str-msg-conpass" />
                </b-container>

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
let missing = [];
let strength = false;
$(document).off('keyup').on('keyup', function(e){
        var password = $("#ch-reg-password").val().replace(/ /g,"");
        var conpassword = $("#ch-conpassword").val().replace(/ /g,"");
        var str = $('#ch-pass-str');
        var str_miss_msg = $('#ch-pass-str-miss-msg');
        var str_msg = $('#ch-pass-str-msg');
        var pts = 0;

        
        if(password != conpassword){
            $('#ch-str-msg-conpass').css({color: "#EF5350"}).html("Passwords do not match.");
        }else{
            $('#ch-str-msg-conpass').css({color: "#4F8A10"}).html("Passwords match."); 
            
        }

        missing = [];
        if(/^(?=.*[a-z])/g.test(password)){ //has lower case
            pts += 1;
        }else{
            missing.push("at least one <b>lower case</b>");
        }
        if(/^(?=.*[A-Z])/g.test(password)){ //has upper case
            pts += 1;
        }else{
            missing.push("at least one <b>UPPER CASE</b>");
        }
        if(/^(?=.*[0-9])/g.test(password)){ //has number
            pts += 1;            
        }else{
            missing.push("at least one <b>number</b>");
        }
        if(/^(?=.*[!@#$%^&*?_])/g.test(password)){ //has special character
            pts += 1;
        }else{
            missing.push("at least one <b>special character</b> (!@#$%^&*?_) excluding spaces");
        }

        if(password.length < 8){
            missing.push("at least <b>8 characters</b>");
        }

        if(password.length == 0){
            pts = 0;
        }else if(password.length >= 5 && password.length <= 7){
            pts += 1;
        }else if(password.length >= 8 && password.length <= 10){
            pts += 2;
        }else if(password.length >= 10 && password.length <= 12){
            pts += 4;
        }else if(password.length > 12){
            pts += 6;
        }
        
        if(missing.length > 0){
            str.css({width: '0%', background: 'none'}).hide();
            str_msg.css({color: '#EF5350'}).html(`Strength: Weak`);
            str_miss_msg.html(`Password must contain:
            <ul><li>${missing.join('</li><li>')}</li></ul>`);
        }else{
            str_miss_msg.html(``);
        }
        if(pts <= 3){
            str.css({width: '0%', background: 'none'}).hide();
            str_msg.css({color: '#EF5350'}).html(`Strength: Weak`);
            strength = false;
        }
        if(pts >= 4 && pts <= 5){
            str.css({width: `${25}%`, background: '#EF5350'}).show();
            str_msg.css({color: '#EF5350'}).html(`Strength: Weak`);
             strength = false;
        }
        if(pts >= 6 && pts <= 7){
            str.css({width: `${50}%`, background: '#9F6000'}).show();
            str_msg.css({color: '#9F6000'}).html(`Strength: Fair`);
             strength = true;
        }
        if(pts >= 8 && pts <= 9){
            str.css({width: `${75}%`, background: '#00529B'}).show();
            str_msg.css({color: '#00529B'}).html(`Strength: Good`);
             strength = true;
        }
        if(pts > 9){
            str.css({width: `${100}%`, background: '#4F8A10'}).show();
            str_msg.css({color: '#4F8A10'}).html(`Strength: Strong`);
             strength = true;
          
        }
    });


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

      conpassword: '',
      missing: missing,
      strength: strength,
      isLoading: false,
      alert: false,
      alertMsg: 'There\'s a problem with your request. Please try again.',
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    validate(){
      let valid = true;
      if(this.missing.length !== 0 || !strength){
        valid = false;
        this.alertMsg = 'Password strength is too weak.';
        this.alert = true;
      }
      else if(this.form.password !== this.conpassword) {
        valid = false
        this.alertMsg = 'Passwords do not match.';
        this.alert = true;
      };
      return valid;
    },
    onSubmit() {
      if(this.validate()){
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
    isValidPassword(password){
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?_])[A-Za-z\d!@#$%^&*?_]{8,}/;

      var upperCaseChecker = new RegExp(/(?=.*[A-Z])/);
      var checker;
      checker = upperCaseChecker.test(password);
      return regex.test(password);
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

<style>
/******************sign up link**********************/
.linking{
  color:white;
  text-decoration:underline;
  
}

.linking:hover{
  color:greenyellow;
}


</style>

