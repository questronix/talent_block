<template>
  <base-layout>
    <div slot="body">  
      <div class="login">
        <div class="card text-center" style="width: 40rem;">
          <div class="card-body">
            <br/>
                <h2> Change Your Password</h2>
            <br/>
            <b-form @submit.prevent="onSubmit">

                <b-form-group> 
                  <b-form-input 
                    id="ch-reg-password" 
                    type="password" 
                    v-model="password" 
                    placeholder="New Password"
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
                    CHANGE PASSWORD
                </b-button>
              </b-form>
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
          if(/(?=.*\s)/g.test(password)) //has a whitespace
            missing.push("<b>NO SPACES</b>");
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
          strength: strength
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

