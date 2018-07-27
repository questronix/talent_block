<template>
  <base-layout>
    <div slot="body">
      
      <div class="signuppage">
        <div class="signupcontainer">
          <div class="signupform">
            <div class="singupcontent" >
              <h5><strong>CHOOSE. PAY. LEARN.</strong></h5>
              <span class="signup-span">
                Create a <strong>Talent Block</strong> account to enroll to courses in 
                just a few clicks and pay without waiting in line.
                Already have a Talent Block account?<a class="linking" href=#login>Login here.</a>
              </span>
              <br>
              <img src="/static/img/signupimg.svg" height="200px">
            </div>
            <div class="formsignup" v-on:input="validateInput">
            <h4>Sign Up</h4>
              <b-alert :variant="alertVariant"
                dismissible
                :show="alert"
                @dismissed="alert=false">
                {{ alertMsg }}
              </b-alert>
              

              <b-form @submit.prevent="onSubmit"> 
                <b-form-group>
                  <b-form-input 
                    v-on:input="testValidate"
                    id="usernames" 
                    type="text" 
                    v-model="form.username" 
                    placeholder="Username (6-30 characters)"
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
                    v-on:input="setStrength"
                    id="ch-reg-password" 
                    type="password" 
                    v-model="form.password" 
                    placeholder="Password"
                    required>
                  </b-form-input>

                  <b-container>
                    <b-alert v-if="form.password.length > 0" :show="strengthAlert" :variant="variant"> {{strengthMsg}} </b-alert>
                  </b-container>
                  
                  <b-container v-if="missing.length > 0">
                    Password must contain: <br/>
                    <ul>
                        <li v-for="(errormsg, index) in missing" :key="index">
                            {{errormsg}}
                        </li>
                    </ul>
                  </b-container>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    type="password" 
                    v-model="conpassword" 
                    placeholder="Confirm Password"
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

let pts = 0;
import BaseLayout from '../layouts/BaseLayout.vue';
import axios from 'axios';
import validate from '../helper/validator.js';
import user_schema from '../schema/user_signup.js';

export default {
  name: 'signUpPage',
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: '',

      },

      formerror:{
        username:'',

      },
      pts: 0,
      isLoading: false,
      conpassword: '',
      missing: [],
      strength: false,
      strengthMsg: '',
      variant: '',
      alertVariant: '',
      alert: false,
      strengthAlert: false,
      alertMsg: 'There\'s a problem with your request. Please try again.',
      errors : [],
      userAlert:'',
      emailAlert: '',
      validInputs:true,
      
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
          testValidate(){
            this.validInputs = true;

            let output = validate.setSchema(user_schema).assert({        
              username:this.form.username,
              
            });

            if (output.length > 0){
              this.validInputs=false;
              output.forEach(error=>{
                if(typeof error =='object'){
                  this.formerror[error.key] = error.msg
                  // this.alertMsg = error.msg
                }else{
                  alert(error.msg);

                }
              })
            }
          },
          validateUsername(error){
            this.userAlert=error.msg;

          },
          validateEmail(error){
            this.emailAlert=error.msg;

          },
          
        checkMissing(){
          this.missing = [];
            if(/^(?=.*[a-z])/g.test(this.form.password)){ //has lower case
                pts += 1;
            }else{
                this.missing.push(`at least one lower case`);
            }
            if(/^(?=.*[A-Z])/g.test(this.form.password)){ //has upper case
                pts += 1;
            }else{
                this.missing.push("at least one UPPER CASE");
            }
            if(/^(?=.*[0-9])/g.test(this.form.password)){ //has number
                pts += 1;            
            }else{
                this.missing.push("at least one number");
            }
            if(/^(?=.*[!@#$%^&*?_])/g.test(this.form.password)){ //has special character
                pts += 1;
            }else{
                this.missing.push("at least one special character (!@#$%^&*?_) excluding spaces");
            }

            if(this.form.password.length < 8){
                this.missing.push("at least 8 characters");
            }

        },
        computePoints(){
            
            if(this.form.password.length == 0){
                pts = 0;
            }else if(this.form.password.length >= 5 && this.form.password.length <= 7){
                pts += 1;
            }else if(this.form.password.length >= 8 && this.form.password.length <= 10){
                pts += 2;
            }else if(this.form.password.length >= 10 && this.form.password.length <= 12){
                pts += 4;
            }else if(this.form.password.length > 12){
                pts += 6;
            }
      },
      setStrength(){
        if(pts <= 5){
            this.variant = "danger";
            this.strengthMsg = `Strength: Weak`;
            this.strength = false;
        }
        if(pts >= 6 && pts <= 7){
            this.variant = "warning";
            this.strengthMsg = `Strength: Fair`;
            this.strength = true;
        }
        if(pts >= 8 && pts <= 9){
            this.variant = "success";
            this.strengthMsg = `Strength: Good`;
            this.strength = true;
        }
        if(pts > 9){
            this.variant = "primary";
            this.strengthMsg = `Strength: Strong`;
            this.strength = true;
        }
        this.strengthAlert = true;
      },
      validateInput(){
          this.checkMissing();
          this.computePoints();
      

      },
      validate(){
      let valid = this.passwordValidationHelper();
      this.alertVariant = "danger";
      if(this.form.password !== this.conpassword) {
        valid = false
        this.alertMsg = 'Passwords do not match.';
        this.alert = true;
      }else if(this.missing.length > 0 || !this.strength){
        valid = false;
        this.alertMsg = 'Password strength is too weak.';
        this.alert = true;
      }else if(valid){
        this.alertVariant = "success";    
        
      }
      else{
        this.alertVariant = "danger";
        this.alert = true;
        this.alertMsg = 'Password should only contain alphanumeric characters and the following symbols: !@#$%^&*_?';
      }
      if(!this.validInputs){
         this.alertVariant = "danger";
        this.alert = true;
        this.alertMsg = `Username ${this.formerror.username}.     Should start with alpha character followed by at least 5 (five) alphanumeric and/or _(underscore) characters.`;
        valid = false;
        console.log(`Valid: `+valid);
      
      }
      

      return valid;
    },
    passwordValidationHelper(){
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_?])[A-Za-z0-9!@#$%^&*_?]{8,}$/;
        return regex.test(this.form.password);
    },
    onSubmit() {
      console.log(`validInputs: ` + this.validInputs);
      if(this.validate()){
        this.isLoading = true;
        this.alert = false;
        this.strengthAlert = false;
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
  },
  // created() {
  //   console.log('this.form.username',this.form.username);
  //   let o = validate.setSchema(user_schema).assert({
  //     usernames: this.form.username,
  //   });
  //   console.log('CREATED ', o);
  // },
  // watch: {
  //   validInputs() {
  //     alert('asdada');
  //   }
  // }
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

