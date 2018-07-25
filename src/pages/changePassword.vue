<template>
  <base-layout>
    <div slot="body">  
      <div class="login">
        <b-card class="card" style="width: 40rem;">
          <b-container>
                <h3 class="text-center"> Change Your Password</h3>
            <br/>
            <b-form @submit.prevent="onSubmit" v-on:input="validateInput">
                <b-alert variant="danger"
                    dismissible
                    :show="alert"
                    @dismissed="alert=false">
                    {{ alertMsg }}
              </b-alert>

                <b-form-group> 
                  <b-form-input 
                    v-on:input="setStrength"
                    id="ch-reg-password" 
                    type="password" 
                    v-model="password" 
                    placeholder="New Password"
                    required>
                  </b-form-input>
                </b-form-group>

                <b-container>
                    <b-alert v-if="password.length > 0" id="ch-pass-str-msg" show="true" :variant="variant"> {{strengthMsg}} </b-alert>
                </b-container>

                <b-container id="ch-pass-str-miss-msg" v-if="missing.length > 0">
                    Password must contain: <br/>
                    <ul>
                        <li v-for="(errormsg, index) in missing" :key="index">
                            {{errormsg}}
                        </li>
                    </ul>
                </b-container>
                
               
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
                <br/>
                <b-button type="submit" variant="primary" :block="true" :disabled="isLoading">
                    CHANGE PASSWORD
                </b-button>
              </b-form>
          </b-container>
        </b-card>
      </div>
    </div>
  </base-layout>
</template>

<script>  
let missing = [];
let strength = false;
let pts = 0;

import BaseLayout from '../layouts/BaseLayout.vue';


export default {
  name: 'changepassword',  
  components: {
    BaseLayout,
  },
  data(){
      return{
          password: '',
          conpassword: '',
          missing: missing,
          strength: strength,
          strengthMsg: '',
          variant: '',
          alert: false,
          alertMsg: 'There\'s a problem with your request. Please try again.',

      }
  },
  methods: {
      checkMissing(){
          this.missing = [];
            if(/^(?=.*[a-z])/g.test(this.password)){ //has lower case
                pts += 1;
            }else{
                this.missing.push(`at least one lower case`);
            }
            if(/^(?=.*[A-Z])/g.test(this.password)){ //has upper case
                pts += 1;
            }else{
                this.missing.push("at least one UPPER CASE");
            }
            if(/^(?=.*[0-9])/g.test(this.password)){ //has number
                pts += 1;            
            }else{
                this.missing.push("at least one number");
            }
            if(/^(?=.*[!@#$%^&*?_])/g.test(this.password)){ //has special character
                pts += 1;
            }else{
                if(/(?=.*\s)/g.test(this.password)) //has a whitespace
                    this.missing.push("NO SPACES");
                
                this.missing.push("at least one special character (!@#$%^&*?_) excluding spaces");
            }

            if(this.password.length < 8){
                this.missing.push("at least 8 characters");
            }

        },
        computePoints(){
            
            if(this.password.length == 0){
                pts = 0;
            }else if(this.password.length >= 5 && this.password.length <= 7){
                pts += 1;
            }else if(this.password.length >= 8 && this.password.length <= 10){
                pts += 2;
            }else if(this.password.length >= 10 && this.password.length <= 12){
                pts += 4;
            }else if(this.password.length > 12){
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
      },
      validateInput(){
          this.checkMissing();
          this.computePoints();

      },
      validate(){
      let valid = true;
      
      if(this.password !== this.conpassword) {
        valid = false
        this.alertMsg = 'Passwords do not match.';
        this.alert = true;
      }else if(this.missing.length > 0 || !this.strength){
        valid = false;
        this.alertMsg = 'Password strength is too weak.';
        this.alert = true;
      }else{
        this.alert = false;
        this.alertMsg = 'Successfully changed your password!';
        
      }
      return valid;
    },
    onSubmit(){
        if(this.validate()){
            console.log("Successfully logged in");
        }
    }
  }
}
</script>


<style scoped>
body {
  overflow: hidden;
}


#btnGoogle {
  color: black;
  background-color: #dcdcdc;
  border-style: none;
}

#username, #password {
  border-radius: 20px;
}

.mail{
  width: 30%;
  height:auto;
  margin-bottom:20px;
}
.login .card{
  margin-left:25%;
  margin-top:4%;
  background-color: white;
  color:black;
  border:none;
}
.continuation{
  margin-top:-20px;
}

#text-details{
  color:lightgrey;
}

</style>

